import Joi from "joi";

// Constants for repeated messages
const requiredFieldMessage = (field: string) => `${field} is a required field`;
const stringBaseMessage = (field: string) => `${field} should be a type of text`;
const stringMinMessage = (field: string, minLength: number) => `${field} should have a minimum length of ${minLength}`;
const arrayBaseMessage = (field: string) => `${field} should be an array of objects`;

// Helper functions to create fields
const createStringField = (minLength: number, field: string) => Joi.string().min(minLength).required().messages({
    'string.base': stringBaseMessage(field),
    'string.empty': `${field} cannot be an empty field`,
    'string.min': stringMinMessage(field, minLength),
    'any.required': requiredFieldMessage(field)
});

const emailField = Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email',
    'any.required': requiredFieldMessage('Email')
});

const uriField = (field: string) => Joi.string().pattern(/^(https?:\/\/)?[\w.-]+(\.[\w\.-]+)+[/#?]?.*$/).required().messages({
    'string.pattern.base': `${field} must be a valid URL`,
    'any.required': requiredFieldMessage(field)
});

const genderField = Joi.string().valid('male', 'female').required().messages({
    'any.only': 'Gender must be either male or female',
    'any.required': requiredFieldMessage('Gender')
});

const passwordField = createStringField(6, 'Password');

const numberField = (field: string) => Joi.number().required().messages({
    'number.base': `${field} must be a number`,
    'any.required': requiredFieldMessage(field)
});

const phoneNumberField = Joi.string().pattern(/^\+\d{1,3}\d{4,14}$/).required().messages({
    'string.pattern.base': 'Phone number must start with a country code (e.g., +250) and be between 5 to 15 digits long',
    'any.required': requiredFieldMessage('Phone number')
});

const arrayField = (itemSchema: Joi.Schema, field: string) => Joi.array().items(itemSchema).required().messages({
    'array.base': arrayBaseMessage(field),
    'any.required': requiredFieldMessage(field)
});


// Validation schemas
export const userValidationSchema = Joi.object({
    firstname: createStringField(2, 'First name'),
    lastname: createStringField(2, 'Last name'),
    email: emailField,
    password: passwordField,
    role: Joi.string().valid('hr', 'admin').required().messages({
        'any.only': 'Role must be either hr or admin',
        'any.required': requiredFieldMessage('Role')
    }),
    registrationType: Joi.string().valid('google', 'email').default('email').messages({
        'any.only': 'Registration type must be either google or email'
    }),
    user_status: Joi.string().valid('active', 'deactivated', 'pending').default('pending').messages({
        'any.only': 'User status must be either active, deactivated, or pending'
    }),
    profilePictureURL: uriField('Profile picture URL')
});

export const userLoginValidationSchema = Joi.object({
    email: emailField,
    password: passwordField
}).messages({
    'object.unknown': 'Unexpected field in login data'
});

export const userResetPasswordDTO = Joi.object({
    email: emailField,
    password: passwordField
}).messages({
    'object.unknown': 'Unexpected field in reset password data'
});

export const userForgotPasswordDTO = Joi.object({
    email: emailField
}).messages({
    'object.unknown': 'Unexpected field in forgot password data'
});

export const candidateValidationSchema = Joi.object({
    names: createStringField(2, 'Names'),
    gender: genderField,
    phoneNumber: phoneNumberField,
    linkedinURL: uriField('LinkedIn URL').optional(),
    profileURL: uriField('Profile URL').optional(),
    tranings: Joi.string().optional().messages({
        'string.base': stringBaseMessage('Trainings'),
        'string.empty': 'Trainings cannot be an empty field'
    }),
    documentation: Joi.string().optional().messages({
        'string.base': stringBaseMessage('Documentation'),
        'string.empty': 'Documentation cannot be an empty field'
    }),
    supervisor: Joi.string().optional().messages({
        'string.base': stringBaseMessage('Supervisor'),
        'string.empty': 'Supervisor cannot be an empty field'
    }),
    project: Joi.string().optional().messages({
        'string.base': stringBaseMessage('Project'),
        'string.empty': 'Project cannot be an empty field'
    }),
    educations: arrayField(Joi.object().unknown(), 'Educations'),
    experiences: arrayField(Joi.object().unknown(), 'Experiences')
}).messages({
    'object.unknown': 'Unexpected field in candidate data'
});

export const jobValidationSchema = Joi.object({
    position: createStringField(2, 'Position'),
    positionLeft: numberField('Position left'),
    applicants: numberField('Applicants'),
    interviewed: numberField('Interviewed'),
    rejected: numberField('Rejected'),
    feedbackPending: numberField('Feedback pending'),
    offered: numberField('Offered'),
    description: createStringField(10, 'Description'),
    requirements: arrayField(Joi.string().min(2).required(), 'Requirements'),
    responsabilities: arrayField(Joi.string().min(2).required(), 'Responsibilities'),
    applicationDeadline: Joi.date().required().messages({
        'date.base': 'Application deadline must be a valid date',
        'any.required': requiredFieldMessage('Application deadline')
    }),
    applicationLink: uriField('Application link'),
    status: Joi.string().valid('open', 'closed').default('open').messages({
        'any.only': 'Status must be either open or closed'
    })
}).messages({
    'object.unknown': 'Unexpected field in job data'
});












