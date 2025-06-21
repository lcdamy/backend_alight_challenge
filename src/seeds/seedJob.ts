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