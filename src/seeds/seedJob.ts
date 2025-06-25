import { AppDataSource } from "../config/dbConfig";
import { Job } from "../models/Job";


const seedJob = async () => {
    await AppDataSource.initialize();

    const jobRepository = AppDataSource.getRepository(Job);

    const jobs = [
        {
            position: "Software Engineer",
            positionLeft: 3,
            applicants: 50,
            interviewed: 10,
            rejected: 30,
            feedbackPending: 5,
            offered: 2,
            description: "Develop and maintain software applications.",
            requirements: [
                "Bachelor's degree in Computer Science or related field.",
                "Experience with TypeScript and Node.js."
            ],
            responsabilities: [
                "Write clean, scalable code.",
                "Collaborate with cross-functional teams.",
                "Participate in code reviews.",
                "Troubleshoot and debug applications.",
                "Stay updated with emerging technologies."
            ],
            applicationDeadline: new Date("2024-12-31"),
            applicationLink: "https://example.com/apply/software-engineer",
            status: "open"
        },
        {
            position: "Product Manager",
            positionLeft: 2,
            applicants: 30,
            interviewed: 5,
            rejected: 15,
            feedbackPending: 3,
            offered: 1,
            description: "Lead product development and strategy.",
            requirements: [
                "Bachelor's degree in Business or related field.",
                "Experience in product management."
            ],
            responsabilities: [
                "Define product vision and roadmap.",
                "Gather and prioritize product requirements.",
                "Collaborate with engineering and design teams.",
                "Conduct market research and analysis.",
                "Monitor product performance and user feedback."
            ],
            applicationDeadline: new Date("2024-11-30"),
            applicationLink: "https://example.com/apply/product-manager",
            status: "open"
        },
        {
            position: "Data Analyst",
            positionLeft: 1,
            applicants: 20,
            interviewed: 4,
            rejected: 10,
            feedbackPending: 2,
            offered: 0,
            description: "Analyze data to provide insights and support decision-making.",
            requirements: [
                "Bachelor's degree in Data Science or related field.",
                "Proficiency in SQL and data visualization tools."
            ],
            responsabilities: [
                "Collect and analyze data from various sources.",
                "Create reports and dashboards.",
                "Identify trends and patterns in data.",
                "Collaborate with stakeholders to understand data needs.",
                "Present findings to management."
            ],
            applicationDeadline: new Date("2024-10-31"),
            applicationLink: "https://example.com/apply/data-analyst",
            status: "open"
        },
        {
            position: "UX/UI Designer",
            positionLeft: 2,
            applicants: 25,
            interviewed: 6,
            rejected: 12,
            feedbackPending: 4,
            offered: 1,
            description: "Design user-friendly interfaces and experiences.",
            requirements: [
                "Bachelor's degree in Design or related field.",
                "Experience with design tools like Figma or Adobe XD."
            ],
            responsabilities: [
                "Create wireframes, prototypes, and mockups.",
                "Conduct user research and usability testing.",
                "Collaborate with developers to implement designs.",
                "Stay updated with design trends and best practices.",
                "Ensure consistency in design across products."
            ],
            applicationDeadline: new Date("2024-09-30"),
            applicationLink: "https://example.com/apply/ux-ui-designer",
            status: "open"
        },
        {
            position: "Marketing Specialist",
            positionLeft: 1,
            applicants: 15,
            interviewed: 3,
            rejected: 8,
            feedbackPending: 1,
            offered: 0,
            description: "Develop and execute marketing strategies.",
            requirements: [
                "Bachelor's degree in Marketing or related field.",
                "Experience with digital marketing tools."
            ],
            responsabilities: [
                "Create and manage marketing campaigns.",
                "Analyze market trends and customer behavior.",
                "Collaborate with sales team to align marketing efforts.",
                "Monitor and report on campaign performance.",
                "Manage social media accounts and content."
            ],
            applicationDeadline: new Date("2024-08-31"),
            applicationLink: "https://example.com/apply/marketing-specialist",
            status: "open"
        },
        {
            position: "DevOps Engineer",
            positionLeft: 2,
            applicants: 18,
            interviewed: 5,
            rejected: 8,
            feedbackPending: 2,
            offered: 1,
            description: "Maintain and improve CI/CD pipelines and cloud infrastructure.",
            requirements: [
                "Bachelor's degree in Computer Science or related field.",
                "Experience with AWS and Docker."
            ],
            responsabilities: [
                "Implement and manage CI/CD pipelines.",
                "Monitor system performance and reliability.",
                "Automate infrastructure provisioning.",
                "Collaborate with development teams.",
                "Ensure security best practices."
            ],
            applicationDeadline: new Date("2024-12-15"),
            applicationLink: "https://example.com/apply/devops-engineer",
            status: "open"
        },
        {
            position: "QA Engineer",
            positionLeft: 1,
            applicants: 12,
            interviewed: 3,
            rejected: 5,
            feedbackPending: 1,
            offered: 0,
            description: "Test software to ensure quality and reliability.",
            requirements: [
                "Bachelor's degree in Computer Science or related field.",
                "Experience with automated testing tools."
            ],
            responsabilities: [
                "Develop and execute test cases.",
                "Identify and document bugs.",
                "Work with developers to resolve issues.",
                "Maintain test automation scripts.",
                "Participate in release planning."
            ],
            applicationDeadline: new Date("2024-11-20"),
            applicationLink: "https://example.com/apply/qa-engineer",
            status: "open"
        },
        {
            position: "HR Manager",
            positionLeft: 1,
            applicants: 10,
            interviewed: 2,
            rejected: 4,
            feedbackPending: 1,
            offered: 1,
            description: "Manage HR operations and employee relations.",
            requirements: [
                "Bachelor's degree in Human Resources or related field.",
                "Experience in HR management."
            ],
            responsabilities: [
                "Oversee recruitment and onboarding.",
                "Manage employee relations.",
                "Develop HR policies.",
                "Coordinate training programs.",
                "Ensure compliance with labor laws."
            ],
            applicationDeadline: new Date("2024-10-15"),
            applicationLink: "https://example.com/apply/hr-manager",
            status: "open"
        },
        {
            position: "Sales Executive",
            positionLeft: 3,
            applicants: 22,
            interviewed: 6,
            rejected: 10,
            feedbackPending: 2,
            offered: 1,
            description: "Drive sales and build client relationships.",
            requirements: [
                "Bachelor's degree in Business or related field.",
                "Experience in sales."
            ],
            responsabilities: [
                "Identify and pursue sales leads.",
                "Build and maintain client relationships.",
                "Achieve sales targets.",
                "Prepare sales reports.",
                "Collaborate with marketing team."
            ],
            applicationDeadline: new Date("2024-09-25"),
            applicationLink: "https://example.com/apply/sales-executive",
            status: "open"
        },
        {
            position: "Content Writer",
            positionLeft: 2,
            applicants: 14,
            interviewed: 4,
            rejected: 6,
            feedbackPending: 1,
            offered: 0,
            description: "Create engaging content for various platforms.",
            requirements: [
                "Bachelor's degree in English, Journalism, or related field.",
                "Excellent writing skills."
            ],
            responsabilities: [
                "Write articles, blogs, and social media posts.",
                "Edit and proofread content.",
                "Research industry topics.",
                "Collaborate with marketing team.",
                "Ensure content aligns with brand voice."
            ],
            applicationDeadline: new Date("2024-08-20"),
            applicationLink: "https://example.com/apply/content-writer",
            status: "open"
        },
        {
            position: "Customer Support",
            positionLeft: 2,
            applicants: 16,
            interviewed: 5,
            rejected: 7,
            feedbackPending: 2,
            offered: 1,
            description: "Provide support to customers via various channels.",
            requirements: [
                "Bachelor's degree or equivalent experience.",
                "Strong communication skills."
            ],
            responsabilities: [
                "Respond to customer inquiries.",
                "Resolve issues and escalate as needed.",
                "Document support interactions.",
                "Provide product information.",
                "Maintain customer satisfaction."
            ],
            applicationDeadline: new Date("2024-07-31"),
            applicationLink: "https://example.com/apply/customer-support-specialist",
            status: "open"
        },
        {
            position: "Finance Analyst",
            positionLeft: 1,
            applicants: 11,
            interviewed: 3,
            rejected: 5,
            feedbackPending: 1,
            offered: 0,
            description: "Analyze financial data and prepare reports.",
            requirements: [
                "Bachelor's degree in Finance or related field.",
                "Proficiency in Excel and financial modeling."
            ],
            responsabilities: [
                "Analyze financial statements.",
                "Prepare financial reports.",
                "Support budgeting and forecasting.",
                "Identify financial risks and opportunities.",
                "Collaborate with finance team."
            ],
            applicationDeadline: new Date("2024-10-10"),
            applicationLink: "https://example.com/apply/finance-analyst",
            status: "open"
        },
        {
            position: "Network Administrator",
            positionLeft: 1,
            applicants: 9,
            interviewed: 2,
            rejected: 4,
            feedbackPending: 1,
            offered: 0,
            description: "Manage and maintain network infrastructure.",
            requirements: [
                "Bachelor's degree in IT or related field.",
                "Experience with network hardware and protocols."
            ],
            responsabilities: [
                "Monitor network performance.",
                "Troubleshoot network issues.",
                "Install and configure network devices.",
                "Ensure network security.",
                "Maintain documentation."
            ],
            applicationDeadline: new Date("2024-09-15"),
            applicationLink: "https://example.com/apply/network-administrator",
            status: "open"
        },
        {
            position: "Mobile App Developer",
            positionLeft: 2,
            applicants: 17,
            interviewed: 4,
            rejected: 8,
            feedbackPending: 2,
            offered: 1,
            description: "Develop and maintain mobile applications.",
            requirements: [
                "Bachelor's degree in Computer Science or related field.",
                "Experience with iOS or Android development."
            ],
            responsabilities: [
                "Design and build mobile apps.",
                "Collaborate with UX/UI designers.",
                "Test and debug applications.",
                "Publish apps to app stores.",
                "Stay updated with mobile trends."
            ],
            applicationDeadline: new Date("2024-12-05"),
            applicationLink: "https://example.com/apply/mobile-app-developer",
            status: "open"
        },
        {
            position: "Business Analyst",
            positionLeft: 1,
            applicants: 13,
            interviewed: 3,
            rejected: 6,
            feedbackPending: 1,
            offered: 0,
            description: "Analyze business processes and recommend improvements.",
            requirements: [
                "Bachelor's degree in Business or related field.",
                "Strong analytical skills."
            ],
            responsabilities: [
                "Gather and document business requirements.",
                "Analyze processes and workflows.",
                "Identify areas for improvement.",
                "Collaborate with stakeholders.",
                "Support project implementation."
            ],
            applicationDeadline: new Date("2024-11-10"),
            applicationLink: "https://example.com/apply/business-analyst",
            status: "open"
        },
        {
            position: "Graphic Designer",
            positionLeft: 2,
            applicants: 19,
            interviewed: 5,
            rejected: 9,
            feedbackPending: 2,
            offered: 1,
            description: "Create visual content for digital and print media.",
            requirements: [
                "Bachelor's degree in Graphic Design or related field.",
                "Proficiency with Adobe Creative Suite."
            ],
            responsabilities: [
                "Design graphics for marketing materials.",
                "Develop branding assets.",
                "Collaborate with marketing and product teams.",
                "Prepare files for print and web.",
                "Stay updated with design trends."
            ],
            applicationDeadline: new Date("2024-08-10"),
            applicationLink: "https://example.com/apply/graphic-designer",
            status: "open"
        },
        {
            position: "IT Support Specialist",
            positionLeft: 2,
            applicants: 15,
            interviewed: 4,
            rejected: 7,
            feedbackPending: 1,
            offered: 0,
            description: "Provide technical support to internal teams.",
            requirements: [
                "Bachelor's degree in IT or related field.",
                "Experience with troubleshooting hardware and software."
            ],
            responsabilities: [
                "Respond to IT support requests.",
                "Install and configure software.",
                "Troubleshoot hardware issues.",
                "Maintain IT inventory.",
                "Document support activities."
            ],
            applicationDeadline: new Date("2024-07-20"),
            applicationLink: "https://example.com/apply/it-support-specialist",
            status: "open"
        },
        {
            position: "Operations Manager",
            positionLeft: 1,
            applicants: 8,
            interviewed: 2,
            rejected: 3,
            feedbackPending: 1,
            offered: 1,
            description: "Oversee daily operations and process improvements.",
            requirements: [
                "Bachelor's degree in Business or related field.",
                "Experience in operations management."
            ],
            responsabilities: [
                "Manage daily business operations.",
                "Optimize processes for efficiency.",
                "Coordinate with different departments.",
                "Monitor KPIs and performance.",
                "Implement operational policies."
            ],
            applicationDeadline: new Date("2024-09-05"),
            applicationLink: "https://example.com/apply/operations-manager",
            status: "open"
        }
    ];

    for (const job of jobs) {
        const existingJob = await jobRepository.findOne({ where: { position: job.position } });
        if (!existingJob) {
            const newJob = jobRepository.create(job);
            await jobRepository.save(newJob);
        } 
    }

    console.log("Job type seeded successfully");
    await AppDataSource.destroy();
};

seedJob().catch((error) => {
    console.error("Error seeding Job type", error);
    process.exit(1);
});