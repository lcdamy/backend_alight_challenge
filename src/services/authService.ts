import { AppDataSource } from "../config/dbConfig";
import { User } from "../models/User";
import bcrypt from "bcryptjs";
import { generateToken, verifyToken } from "../utils/helper";
import { sendEmail } from "../utils/emailService";
import logger from '../config/logger';



export class AuthService {

    private userRepository = AppDataSource.getRepository(User);
    private frontend_host = process.env.FRONTEND_URL ? process.env.FRONTEND_URL : 'http://localhost:3000';

    async register(userDTO: any) {
        const { email, password, registrationType, ...otherData } = userDTO;

        const user_status = registrationType === "google" ? "active" : "pending";
        const existingUser = await this.userRepository.findOne({ where: { email } });

        if (existingUser) {
            if (registrationType !== 'google') {
                logger.error(`User registration failed: User with email ${email} already exists`);
                throw new Error("User already exists, please login or reset your password");
            }
            return existingUser; // Return existing user if registrationType is 'google'
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = this.userRepository.create({ ...otherData, registrationType, email, password: hashedPassword, user_status });
        await this.userRepository.save(user);
        logger.info(`User registered successfully with email ${email}`);
        return user;
    }

    //login user
    async login(email: string, password: string): Promise<string> {
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            logger.error(`Login failed: Invalid credentials for email ${email}`);
            throw new Error("Invalid credentials");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            logger.error(`Login failed: Invalid credentials for email ${email}`);
            throw new Error("Invalid credentials");
        }

        if (!process.env.TOKEN_SECRET) {
            logger.error("Login failed: TOKEN_SECRET is not defined");
            throw new Error("Server configuration error");
        }

        const tokenPayload = {
            id: user.id,
            email: user.email,
            role: user.role || 'hr', // Ensure role is always present
            names: user.firstname + ' ' + user.lastname,
            profilePictureURL: user.profilePictureURL,
        };

        const token = generateToken(tokenPayload, 86400);
        logger.info(`User logged in successfully with email ${email}`);
        return token;
    }

    //find user by email
    async findUserByEmail(email: string): Promise<Partial<User> | null> {
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            logger.warn(`User not found with email ${email}`);
            return null;
        }

        logger.info(`User found with email ${email}`);
        const { password, registrationType, ...userWithoutSensitiveInfo } = user;
        return { ...userWithoutSensitiveInfo, role: user.role || 'hr' }; // Ensure role is always present
    }
    //find user by id
    async findUserById(id: string): Promise<Partial<User> | null> {
        const user = await this.userRepository.findOne({ where: { id } });
        if (user) {
            logger.info(`User found with id ${id}`);
            const { password, registrationType, ...userWithoutSensitiveInfo } = user;
            return userWithoutSensitiveInfo;
        } else {
            logger.warn(`User not found with id ${id}`);
            return null;
        }
    }

    //activate account
    async activateAccount(email: string): Promise<User> {
        const user = await this.userRepository.findOne({ where: { email: email } });
        if (!user) {
            logger.error(`Account activation failed: User not found with email ${email}`);
            throw new Error("User not found");
        }
        user.user_status = "active";
        await this.userRepository.save(user);
        logger.info(`Account activated successfully for email ${email}`);
        return user;
    }

    //forgot password
    async forgotPassword(email: string): Promise<void> {
        const user = await this.userRepository.findOne({ where: { email } });
        const context = {
            year: new Date().getFullYear(),
            logo_url: process.env.LOGO_URL,
            subject: '',
            name: '',
            message: '',
            link: '',
            link_label: ''
        };
        if (!user) {
            logger.error(`Forgot password failed: User not found with email ${email}`);
            throw new Error("User not found");
        }
        user.user_status = "deactivated";
        await this.userRepository.save(user);
        const token = generateToken({ email: user.email }, 86400);
        const resetLink = `${this.frontend_host}/auth/reset-password?token=${token}`;
        logger.info(`Password reset link generated for email ${email}: ${resetLink}`);
        context.subject = 'Alight HR platform Password Reset';
        context.name = user.firstname + ' ' + user.lastname;
        context.message = 'We received a request to reset your password. This link is valid for 1 hour. Please click the button below to reset your password:';
        context.link = resetLink;
        context.link_label = 'Reset your password';
        try {
            sendEmail('email_template', 'Password reset', user.email, context);
            logger.info(`Password reset email sent to ${email}`);
        } catch (error) {
            if (error instanceof Error) {
                logger.error(`Error sending password reset email to ${email}: ${error.message}`);
            } else {
                logger.error(`Error sending password reset email to ${email}`);
            }
        }
    }

    //reset password
    async resetPassword(token: string, newPassword: string): Promise<void> {
        const decoded = verifyToken(token);

        if (typeof decoded === 'string') {
            logger.error("Password reset failed: Invalid token");
            throw new Error("Invalid token");
        }
        const user = await this.userRepository.findOne({ where: { email: decoded.email } });
        if (!user) {
            logger.error(`Password reset failed: User not found with email ${decoded.email}`);
            throw new Error("User not found");
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.user_status = "active";
        await this.userRepository.save(user);
        logger.info(`Password reset successfully for email ${decoded.email}`);
    }

}
