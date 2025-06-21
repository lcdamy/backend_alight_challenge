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
        },
        {
            names: "Sophia Turner",
            gender: "female",
            email: "sophia.turner@example.com",
            phoneNumber: "+12015550101",
            title: "UI Designer",
            linkedinURL: "https://linkedin.com/in/sophiaturner",
            profileURL: "https://example.com/profiles/sophiaturner",
            tranings: "Figma Advanced, UX Research",
            documentation: "Resume, Design Portfolio",
            supervisor: "Chris Evans",
            project: "Mobile App Redesign",
            educations: [
                {
                    degree: "BA Graphic Design",
                    institution: "Art Institute",
                    year: 2021
                }
            ],
            experiences: [
                {
                    company: "Designify",
                    role: "UI Designer",
                    duration: "Jun 2021 - Present",
                    responsibilities: [
                        "Designing mobile interfaces",
                        "Conducting user research",
                        "Prototyping",
                        "Collaborating with developers"
                    ]
                }
            ]
        },
        {
            names: "James Wilson",
            gender: "male",
            email: "james.wilson@example.com",
            phoneNumber: "+12015550102",
            title: "Backend Developer",
            linkedinURL: "https://linkedin.com/in/jameswilson",
            profileURL: "https://example.com/profiles/jameswilson",
            tranings: "Node.js Advanced, PostgreSQL Mastery",
            documentation: "Resume, References",
            supervisor: "Anna Scott",
            project: "API Development",
            educations: [
                {
                    degree: "BSc Software Engineering",
                    institution: "Tech University",
                    year: 2019
                }
            ],
            experiences: [
                {
                    company: "APISoft",
                    role: "Backend Developer",
                    duration: "Aug 2019 - Present",
                    responsibilities: [
                        "Building REST APIs",
                        "Database design",
                        "Performance optimization",
                        "Code reviews"
                    ]
                }
            ]
        },
        {
            names: "Emma Clark",
            gender: "female",
            email: "emma.clark@example.com",
            phoneNumber: "+12015550103",
            title: "Data Scientist",
            linkedinURL: "https://linkedin.com/in/emmaclark",
            profileURL: "https://example.com/profiles/emmaclark",
            tranings: "Machine Learning, Python for Data Science",
            documentation: "Resume, Publications",
            supervisor: "Mark Taylor",
            project: "Predictive Analytics",
            educations: [
                {
                    degree: "MSc Data Science",
                    institution: "Science College",
                    year: 2022
                }
            ],
            experiences: [
                {
                    company: "DataGen",
                    role: "Data Scientist",
                    duration: "Jan 2022 - Present",
                    responsibilities: [
                        "Building ML models",
                        "Data preprocessing",
                        "Statistical analysis",
                        "Reporting findings"
                    ]
                }
            ]
        },
        {
            names: "Oliver King",
            gender: "male",
            email: "oliver.king@example.com",
            phoneNumber: "+12015550104",
            title: "Full Stack Developer",
            linkedinURL: "https://linkedin.com/in/oliverking",
            profileURL: "https://example.com/profiles/oliverking",
            tranings: "React, Node.js, GraphQL",
            documentation: "Resume, Code Samples",
            supervisor: "Nina Brooks",
            project: "E-commerce Platform",
            educations: [
                {
                    degree: "BSc Computer Science",
                    institution: "Tech University",
                    year: 2018
                }
            ],
            experiences: [
                {
                    company: "ShopEase",
                    role: "Full Stack Developer",
                    duration: "Feb 2019 - Present",
                    responsibilities: [
                        "Developing frontend and backend",
                        "Integrating APIs",
                        "Testing and deployment",
                        "Maintaining codebase"
                    ]
                }
            ]
        },
        {
            names: "Mia Harris",
            gender: "female",
            email: "mia.harris@example.com",
            phoneNumber: "+12015550105",
            title: "Business Analyst",
            linkedinURL: "https://linkedin.com/in/miaharris",
            profileURL: "https://example.com/profiles/miaharris",
            tranings: "Business Process Modeling, Agile Analysis",
            documentation: "Resume, Case Studies",
            supervisor: "Paul Adams",
            project: "Process Optimization",
            educations: [
                {
                    degree: "BBA",
                    institution: "Business School",
                    year: 2017
                }
            ],
            experiences: [
                {
                    company: "BizConsult",
                    role: "Business Analyst",
                    duration: "Mar 2018 - Present",
                    responsibilities: [
                        "Analyzing business processes",
                        "Gathering requirements",
                        "Facilitating workshops",
                        "Documenting solutions"
                    ]
                }
            ]
        },
        {
            names: "Lucas Wright",
            gender: "male",
            email: "lucas.wright@example.com",
            phoneNumber: "+12015550106",
            title: "Mobile Developer",
            linkedinURL: "https://linkedin.com/in/lucaswright",
            profileURL: "https://example.com/profiles/lucaswright",
            tranings: "Flutter, Android Development",
            documentation: "Resume, App Portfolio",
            supervisor: "Sophie Miller",
            project: "Mobile Banking App",
            educations: [
                {
                    degree: "BSc Information Systems",
                    institution: "IT College",
                    year: 2020
                }
            ],
            experiences: [
                {
                    company: "AppMakers",
                    role: "Mobile Developer",
                    duration: "Jul 2020 - Present",
                    responsibilities: [
                        "Developing mobile apps",
                        "UI implementation",
                        "Testing and debugging",
                        "Publishing to app stores"
                    ]
                }
            ]
        },
        {
            names: "Charlotte Baker",
            gender: "female",
            email: "charlotte.baker@example.com",
            phoneNumber: "+12015550107",
            title: "Scrum Master",
            linkedinURL: "https://linkedin.com/in/charlottebaker",
            profileURL: "https://example.com/profiles/charlottebaker",
            tranings: "Scrum Certification, Agile Leadership",
            documentation: "Resume, Certifications",
            supervisor: "George Hall",
            project: "Agile Transformation",
            educations: [
                {
                    degree: "BSc Project Management",
                    institution: "Management Institute",
                    year: 2016
                }
            ],
            experiences: [
                {
                    company: "AgileWorks",
                    role: "Scrum Master",
                    duration: "Sep 2017 - Present",
                    responsibilities: [
                        "Facilitating scrum ceremonies",
                        "Removing impediments",
                        "Coaching teams",
                        "Tracking progress"
                    ]
                }
            ]
        },
        {
            names: "Benjamin Carter",
            gender: "male",
            email: "benjamin.carter@example.com",
            phoneNumber: "+12015550108",
            title: "Cloud Architect",
            linkedinURL: "https://linkedin.com/in/benjamincarter",
            profileURL: "https://example.com/profiles/benjamincarter",
            tranings: "Azure Solutions Architect, Cloud Security",
            documentation: "Resume, Certifications",
            supervisor: "Rachel Moore",
            project: "Cloud Infrastructure",
            educations: [
                {
                    degree: "MSc Cloud Computing",
                    institution: "Tech University",
                    year: 2015
                }
            ],
            experiences: [
                {
                    company: "Cloudify",
                    role: "Cloud Architect",
                    duration: "Nov 2015 - Present",
                    responsibilities: [
                        "Designing cloud solutions",
                        "Ensuring scalability",
                        "Implementing security best practices",
                        "Cost optimization"
                    ]
                }
            ]
        },
        {
            names: "Amelia Evans",
            gender: "female",
            email: "amelia.evans@example.com",
            phoneNumber: "+12015550109",
            title: "Content Strategist",
            linkedinURL: "https://linkedin.com/in/ameliaevans",
            profileURL: "https://example.com/profiles/ameliaevans",
            tranings: "Content Marketing, SEO",
            documentation: "Resume, Writing Samples",
            supervisor: "Henry Young",
            project: "Brand Awareness",
            educations: [
                {
                    degree: "BA Communications",
                    institution: "Media College",
                    year: 2014
                }
            ],
            experiences: [
                {
                    company: "ContentPro",
                    role: "Content Strategist",
                    duration: "Jan 2015 - Present",
                    responsibilities: [
                        "Planning content strategy",
                        "SEO optimization",
                        "Coordinating writers",
                        "Analyzing engagement"
                    ]
                }
            ]
        },
        {
            names: "Henry Scott",
            gender: "male",
            email: "henry.scott@example.com",
            phoneNumber: "+12015550110",
            title: "Security Analyst",
            linkedinURL: "https://linkedin.com/in/henryscott",
            profileURL: "https://example.com/profiles/henryscott",
            tranings: "Cybersecurity, Ethical Hacking",
            documentation: "Resume, Certifications",
            supervisor: "Olivia Parker",
            project: "Security Audit",
            educations: [
                {
                    degree: "BSc Cybersecurity",
                    institution: "Security Institute",
                    year: 2018
                }
            ],
            experiences: [
                {
                    company: "SecureIT",
                    role: "Security Analyst",
                    duration: "May 2018 - Present",
                    responsibilities: [
                        "Conducting security assessments",
                        "Monitoring threats",
                        "Incident response",
                        "Implementing security policies"
                    ]
                }
            ]
        },
        {
            names: "Grace Lewis",
            gender: "female",
            email: "grace.lewis@example.com",
            phoneNumber: "+12015550111",
            title: "HR Specialist",
            linkedinURL: "https://linkedin.com/in/gracelewis",
            profileURL: "https://example.com/profiles/gracelewis",
            tranings: "HR Management, Talent Acquisition",
            documentation: "Resume, Certifications",
            supervisor: "Samuel Walker",
            project: "Employee Engagement",
            educations: [
                {
                    degree: "BSc Human Resources",
                    institution: "Business School",
                    year: 2013
                }
            ],
            experiences: [
                {
                    company: "PeopleFirst",
                    role: "HR Specialist",
                    duration: "Feb 2014 - Present",
                    responsibilities: [
                        "Recruiting talent",
                        "Managing benefits",
                        "Employee relations",
                        "Organizing training"
                    ]
                }
            ]
        },
        {
            names: "Jack Martin",
            gender: "male",
            email: "jack.martin@example.com",
            phoneNumber: "+12015550112",
            title: "Network Engineer",
            linkedinURL: "https://linkedin.com/in/jackmartin",
            profileURL: "https://example.com/profiles/jackmartin",
            tranings: "Cisco Networking, Network Security",
            documentation: "Resume, Certifications",
            supervisor: "Ella Turner",
            project: "Network Upgrade",
            educations: [
                {
                    degree: "BEng Network Engineering",
                    institution: "Engineering Institute",
                    year: 2012
                }
            ],
            experiences: [
                {
                    company: "NetSolutions",
                    role: "Network Engineer",
                    duration: "Jun 2012 - Present",
                    responsibilities: [
                        "Managing network infrastructure",
                        "Troubleshooting connectivity",
                        "Implementing security measures",
                        "Upgrading hardware"
                    ]
                }
            ]
        },
        {
            names: "Lily Walker",
            gender: "female",
            email: "lily.walker@example.com",
            phoneNumber: "+12015550113",
            title: "Marketing Manager",
            linkedinURL: "https://linkedin.com/in/lilywalker",
            profileURL: "https://example.com/profiles/lilywalker",
            tranings: "Digital Marketing, Brand Management",
            documentation: "Resume, Campaign Portfolio",
            supervisor: "David Harris",
            project: "Product Launch Campaign",
            educations: [
                {
                    degree: "MBA Marketing",
                    institution: "Business School",
                    year: 2015
                }
            ],
            experiences: [
                {
                    company: "MarketLeads",
                    role: "Marketing Manager",
                    duration: "Sep 2015 - Present",
                    responsibilities: [
                        "Planning marketing strategies",
                        "Managing campaigns",
                        "Analyzing market trends",
                        "Leading marketing team"
                    ]
                }
            ]
        },
        {
            names: "Ethan Hill",
            gender: "male",
            email: "ethan.hill@example.com",
            phoneNumber: "+12015550114",
            title: "Systems Administrator",
            linkedinURL: "https://linkedin.com/in/ethanhill",
            profileURL: "https://example.com/profiles/ethanhill",
            tranings: "Linux Administration, Windows Server",
            documentation: "Resume, Certifications",
            supervisor: "Chloe Allen",
            project: "Server Migration",
            educations: [
                {
                    degree: "BSc Information Technology",
                    institution: "IT College",
                    year: 2011
                }
            ],
            experiences: [
                {
                    company: "SysOps",
                    role: "Systems Administrator",
                    duration: "Apr 2011 - Present",
                    responsibilities: [
                        "Managing servers",
                        "Ensuring uptime",
                        "Automating tasks",
                        "User support"
                    ]
                }
            ]
        },
        {
            names: "Ella Robinson",
            gender: "female",
            email: "ella.robinson@example.com",
            phoneNumber: "+12015550115",
            title: "Technical Writer",
            linkedinURL: "https://linkedin.com/in/ellarobinson",
            profileURL: "https://example.com/profiles/ellarobinson",
            tranings: "Technical Writing, API Documentation",
            documentation: "Resume, Writing Samples",
            supervisor: "Matthew King",
            project: "Documentation Overhaul",
            educations: [
                {
                    degree: "BA English",
                    institution: "Literature College",
                    year: 2010
                }
            ],
            experiences: [
                {
                    company: "DocuTech",
                    role: "Technical Writer",
                    duration: "Jan 2011 - Present",
                    responsibilities: [
                        "Writing technical documents",
                        "Creating user manuals",
                        "Editing content",
                        "Collaborating with engineers"
                    ]
                }
            ]
        },
        {
            names: "William Young",
            gender: "male",
            email: "william.young@example.com",
            phoneNumber: "+12015550116",
            title: "Database Administrator",
            linkedinURL: "https://linkedin.com/in/williamyoung",
            profileURL: "https://example.com/profiles/williamyoung",
            tranings: "SQL Server, Database Optimization",
            documentation: "Resume, Certifications",
            supervisor: "Samantha Lee",
            project: "Database Migration",
            educations: [
                {
                    degree: "BSc Computer Science",
                    institution: "Tech University",
                    year: 2009
                }
            ],
            experiences: [
                {
                    company: "DataManage",
                    role: "Database Administrator",
                    duration: "May 2009 - Present",
                    responsibilities: [
                        "Managing databases",
                        "Optimizing queries",
                        "Ensuring data integrity",
                        "Backup and recovery"
                    ]
                }
            ]
        },
        {
            names: "Ava Perez",
            gender: "female",
            email: "ava.perez@example.com",
            phoneNumber: "+12015550117",
            title: "Project Coordinator",
            linkedinURL: "https://linkedin.com/in/avaperez",
            profileURL: "https://example.com/profiles/avaperez",
            tranings: "Project Coordination, MS Project",
            documentation: "Resume, References",
            supervisor: "Logan Scott",
            project: "ERP Implementation",
            educations: [
                {
                    degree: "BA Management",
                    institution: "Management Institute",
                    year: 2013
                }
            ],
            experiences: [
                {
                    company: "ProjSync",
                    role: "Project Coordinator",
                    duration: "Oct 2013 - Present",
                    responsibilities: [
                        "Coordinating project tasks",
                        "Tracking milestones",
                        "Reporting progress",
                        "Supporting project managers"
                    ]
                }
            ]
        },
        {
            names: "Noah Ramirez",
            gender: "male",
            email: "noah.ramirez@example.com",
            phoneNumber: "+12015550118",
            title: "Support Engineer",
            linkedinURL: "https://linkedin.com/in/noahramirez",
            profileURL: "https://example.com/profiles/noahramirez",
            tranings: "Customer Support, ITIL Foundation",
            documentation: "Resume, Certifications",
            supervisor: "Victoria Clark",
            project: "Customer Support Portal",
            educations: [
                {
                    degree: "BSc Information Systems",
                    institution: "IT College",
                    year: 2016
                }
            ],
            experiences: [
                {
                    company: "HelpDeskPro",
                    role: "Support Engineer",
                    duration: "Dec 2016 - Present",
                    responsibilities: [
                        "Resolving customer issues",
                        "Documenting solutions",
                        "Improving support processes",
                        "Training new staff"
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