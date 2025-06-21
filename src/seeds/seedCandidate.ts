import { AppDataSource } from "../config/dbConfig";
import { Candidate } from "../models/Candidate";


const seedCandidate = async () => {
    await AppDataSource.initialize();

    const candidateRepository = AppDataSource.getRepository(Candidate);

    const candidates = [
        {
            names: "John Doe",
            gender: "male",
            email: "john.doe@example.com",
            phoneNumber: "+1234567890",
            title: "Software Engineer",
            linkedinURL: "https://linkedin.com/in/johndoe",
            profileURL: "https://example.com/profiles/johndoe",
            tranings: "Advanced TypeScript, Node.js Bootcamp",
            documentation: "Resume, Cover Letter",
            supervisor: "Jane Smith",
            project: "Backend Revamp",
            educations: [
                {
                    degree: "BSc Computer Science",
                    institution: "Tech University",
                    year: 2020
                }
            ],
            experiences: [
                {
                    company: "TechCorp",
                    role: "Developer",
                    duration: "May 2021 - Present",
                    responsibilities: [
                        "Developing web applications",
                        "Collaborating with cross-functional teams",
                        "Participating in code reviews",
                        "Troubleshooting and debugging",
                        "Staying updated with emerging technologies",
                        "Mentoring junior developers"
                    ]
                },
                {
                    company: "TechSolutions",
                    role: "Developer",
                    duration: "Dec 2019 - Apr 2021",
                    responsibilities: [
                        "Assisted in developing web applications",
                        "Collaborated with cross-functional teams",
                        "Participated in code reviews",
                        "Troubleshot and debugged applications",
                        "Stayed updated with emerging technologies"
                    ]
                }
            ]
        },
        {
            names: "Alice Smith",
            gender: "female",
            email: "alice.smith@example.com",
            phoneNumber: "+1987654321",
            title: "Frontend Developer",
            linkedinURL: "https://linkedin.com/in/alicesmith",
            profileURL: "https://example.com/profiles/alicesmith",
            tranings: "React Mastery, UI/UX Design",
            documentation: "Resume, Portfolio",
            supervisor: "Bob Johnson",
            project: "UI Redesign",
            educations: [
                {
                    degree: "BSc Information Technology",
                    institution: "Design College",
                    year: 2019
                }
            ],
            experiences: [
                {
                    company: "WebWorks",
                    role: "Frontend Developer",
                    duration: "Jan 2020 - Present",
                    responsibilities: [
                        "Building responsive web interfaces",
                        "Working with designers",
                        "Optimizing performance",
                        "Writing unit tests"
                    ]
                }
            ]
        },
        {
            names: "Michael Brown",
            gender: "male",
            email: "michael.brown@example.com",
            phoneNumber: "+1123456789",
            title: "DevOps Engineer",
            linkedinURL: "https://linkedin.com/in/michaelbrown",
            profileURL: "https://example.com/profiles/michaelbrown",
            tranings: "AWS Certification, Docker Deep Dive",
            documentation: "Resume, Certifications",
            supervisor: "Sara Lee",
            project: "Cloud Migration",
            educations: [
                {
                    degree: "BEng Software Engineering",
                    institution: "Engineering Institute",
                    year: 2018
                }
            ],
            experiences: [
                {
                    company: "CloudNet",
                    role: "DevOps Engineer",
                    duration: "Mar 2019 - Present",
                    responsibilities: [
                        "Managing cloud infrastructure",
                        "Automating deployments",
                        "Monitoring systems",
                        "Ensuring security compliance"
                    ]
                }
            ]
        },
        {
            names: "Linda Green",
            gender: "female",
            email: "linda.green@example.com",
            phoneNumber: "+1098765432",
            title: "QA Analyst",
            linkedinURL: "https://linkedin.com/in/lindagreen",
            profileURL: "https://example.com/profiles/lindagreen",
            tranings: "Automated Testing, Selenium Workshop",
            documentation: "Resume, References",
            supervisor: "Tom White",
            project: "Testing Automation",
            educations: [
                {
                    degree: "BSc Quality Assurance",
                    institution: "QA University",
                    year: 2017
                }
            ],
            experiences: [
                {
                    company: "TestPro",
                    role: "QA Analyst",
                    duration: "Feb 2018 - Present",
                    responsibilities: [
                        "Designing test cases",
                        "Automating test scripts",
                        "Reporting bugs",
                        "Collaborating with developers"
                    ]
                }
            ]
        },
        {
            names: "David Lee",
            gender: "male",
            email: "david.lee@example.com",
            phoneNumber: "+1012345678",
            title: "Product Manager",
            linkedinURL: "https://linkedin.com/in/davidlee",
            profileURL: "https://example.com/profiles/davidlee",
            tranings: "Agile Product Management, Scrum Master",
            documentation: "Resume, Product Portfolio",
            supervisor: "Emma Brown",
            project: "Product Launch",
            educations: [
                {
                    degree: "MBA",
                    institution: "Business School",
                    year: 2016
                }
            ],
            experiences: [
                {
                    company: "InnovateX",
                    role: "Product Manager",
                    duration: "Apr 2017 - Present",
                    responsibilities: [
                        "Defining product vision",
                        "Coordinating teams",
                        "Gathering requirements",
                        "Managing product lifecycle"
                    ]
                }
            ]
        }
    ];

    for (const candidate of candidates) {
        const existingCandidate = await candidateRepository.findOne({ where: { email: candidate.email } });

        if (!existingCandidate) {
            const newCandidate = candidateRepository.create(candidate);
            await candidateRepository.save(newCandidate);
        }
    }

    console.log("Candidate type seeded successfully");
    await AppDataSource.destroy();
};

seedCandidate().catch((error) => {
    console.error("Error seeding Candidate type", error);
    process.exit(1);
});