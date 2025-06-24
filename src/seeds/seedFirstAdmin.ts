import { AppDataSource } from "../config/dbConfig";
import { User } from "../models/User";
import bcrypt from "bcryptjs";
import { sendEmail } from "../utils/emailService";
import { generateRandomPassword } from "../utils/helper";


const seedFirstAdmin = async () => {
    await AppDataSource.initialize();

    const admin_email = process.env.FIRST_ADMIN_EMAIL || "zudanga@gmail.com";

    const admin_password = generateRandomPassword(12);
    const frontend_host = process.env.FRONTEND_URL ? process.env.FRONTEND_URL : 'http://localhost:3000';

    const userRepository = AppDataSource.getRepository(User);

    const adminExists = await userRepository.findOne({ where: { email: admin_email } });


    if (!adminExists) {
        const hashedPassword = await bcrypt.hash(admin_password, 10);


        const adminUser = userRepository.create({
            email: admin_email,
            password: hashedPassword,
            role: "admin",
            registrationType: "email",
            profilePictureURL: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            firstname: "Super",
            lastname: "Admin",
            user_status: 'active'
        });

        await userRepository.save(adminUser);


        const context = {
            year: new Date().getFullYear(),
            logo_url: process.env.LOGO_URL,
            subject: 'Super Admin Account Creation',
            name: 'Super Admin',
            message: `Congratulations on becoming the Super Admin of alight HR Platform! As a Super Admin, you have full access to the system and the ability to manage all aspects of the platform. 
            Here is your temporary password: ${admin_password}. We highly recommend changing it after logging in for security purposes. 
            Thank you for taking on this important role!`,
            link: `${frontend_host}/login`,
            link_label: 'Log in to your account'
        };
        sendEmail('email_template', 'Super Admin Account creation', admin_email, context);
        console.log("First admin user created successfully");
    } else {
        console.log("Admin user already exists");
    }

    await AppDataSource.destroy();
};

seedFirstAdmin().catch((error) => {
    console.error("Error seeding First admin", error);
    process.exit(1);
});