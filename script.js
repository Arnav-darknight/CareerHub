
// ==========================================
// 5. GIRLCODE FUTURE - DEGREE & CAREER EXPLORER
// ==========================================

// UK salary estimates are indicative annual gross salaries.
// Actual pay varies by experience, location and employer.

const degreeCareerPaths = [

    // TECHNOLOGY
    {
        degree: "Computer Science",
        qualification: "BSc Computer Science",
        category: "technology",
        description: "Explore programming, algorithms, artificial intelligence, databases and computer systems.",
        careers: [
            {
                name: "Software Developer",
                salary: "£30,000–£65,000",
                description: "Designs, develops, tests and maintains software applications and computer systems.",
                qualifications: "A degree in Computer Science, Software Engineering or a related subject can be useful.",
                skills: "Programming, problem-solving, debugging and teamwork.",
                progression: "Junior Developer → Software Developer → Senior Developer → Software Architect"
            },
            {
                name: "Web Developer",
                salary: "£25,000–£55,000",
                description: "Builds and maintains websites and web applications using programming languages and web technologies.",
                qualifications: "Computer Science, Web Development or Software Engineering.",
                skills: "HTML, CSS, JavaScript, databases and problem-solving.",
                progression: "Junior Developer → Web Developer → Senior Developer → Technical Lead"
            },
            {
                name: "Mobile App Developer",
                salary: "£28,000–£60,000",
                description: "Creates applications for smartphones and tablets.",
                qualifications: "Computer Science, Software Engineering or Mobile Application Development.",
                skills: "Java, Kotlin, Swift, mobile frameworks and UI development.",
                progression: "Junior App Developer → App Developer → Senior Developer"
            },
            {
                name: "Database Administrator",
                salary: "£28,000–£60,000",
                description: "Manages databases, protects information and ensures data systems operate reliably.",
                qualifications: "Computer Science, Computing or Database Management.",
                skills: "SQL, database management, security and data organisation.",
                progression: "Database Technician → Database Administrator → Database Manager"
            },
            {
                name: "Systems Analyst",
                salary: "£28,000–£60,000",
                description: "Studies an organisation's computer systems and identifies ways to improve efficiency.",
                qualifications: "Computer Science or Business Information Systems.",
                skills: "Systems analysis, communication, technical knowledge and problem-solving.",
                progression: "Junior Analyst → Systems Analyst → Senior Analyst → IT Consultant"
            }
        ]
    },

    {
        degree: "Cyber Security",
        qualification: "BSc Cyber Security",
        category: "technology",
        description: "Learn how to protect networks, computers and information from cyber threats.",
        careers: [
            {
                name: "Cybersecurity Analyst",
                salary: "£28,000–£60,000",
                description: "Monitors computer systems, identifies security threats and helps organisations prevent cyberattacks.",
                qualifications: "Cyber Security, Computer Science or Digital Forensics.",
                skills: "Network security, threat analysis, risk management and problem-solving.",
                progression: "Junior Analyst → Security Analyst → Senior Analyst → Security Manager"
            },
            {
                name: "Penetration Tester",
                salary: "£30,000–£65,000",
                description: "Tests computer systems and networks for weaknesses by simulating authorised cyberattacks.",
                qualifications: "Cyber Security, Computer Science or Computing.",
                skills: "Ethical hacking, networking, scripting and security testing.",
                progression: "Junior Penetration Tester → Penetration Tester → Senior Security Consultant"
            },
            {
                name: "Digital Forensics Investigator",
                salary: "£25,000–£55,000",
                description: "Examines digital devices and recovers evidence that may be relevant to investigations.",
                qualifications: "Digital Forensics, Cyber Security or Computer Science.",
                skills: "Evidence handling, investigation, computer systems and attention to detail.",
                progression: "Forensic Technician → Digital Forensics Investigator → Senior Investigator"
            },
            {
                name: "Information Security Manager",
                salary: "£45,000–£85,000",
                description: "Oversees an organisation's security policies, risk management and protection strategies.",
                qualifications: "Cyber Security, Computer Science or Information Security, usually with professional experience.",
                skills: "Leadership, security management, risk assessment and communication.",
                progression: "Security Analyst → Security Consultant → Information Security Manager"
            }
        ]
    },

    {
        degree: "Artificial Intelligence",
        qualification: "BSc Artificial Intelligence",
        category: "technology",
        description: "Study intelligent systems, machine learning, robotics and how computers can learn from data.",
        careers: [
            {
                name: "AI Engineer",
                salary: "£35,000–£75,000",
                description: "Develops artificial intelligence systems and integrates machine learning into software applications.",
                qualifications: "Artificial Intelligence, Computer Science, Mathematics or Data Science.",
                skills: "Python, machine learning, programming and mathematics.",
                progression: "Junior AI Engineer → AI Engineer → Senior AI Engineer → AI Lead"
            },
            {
                name: "Machine Learning Engineer",
                salary: "£40,000–£80,000",
                description: "Builds systems that learn from data and make predictions or decisions.",
                qualifications: "Artificial Intelligence, Computer Science, Data Science or Mathematics.",
                skills: "Python, machine learning, statistics and data processing.",
                progression: "Junior ML Engineer → ML Engineer → Senior ML Engineer"
            },
            {
                name: "AI Researcher",
                salary: "£35,000–£75,000",
                description: "Investigates new AI methods and develops models and technologies that improve intelligent systems.",
                qualifications: "Artificial Intelligence, Computer Science, Mathematics or a related subject. Research positions may require postgraduate study.",
                skills: "Research, mathematics, programming and machine learning.",
                progression: "Research Assistant → Research Scientist → Senior Researcher"
            },
            {
                name: "Robotics Engineer",
                salary: "£30,000–£65,000",
                description: "Designs and develops robots that can perform tasks using sensors, software and mechanical systems.",
                qualifications: "Robotics, Mechatronics, Artificial Intelligence or Engineering.",
                skills: "Programming, electronics, mechanics and control systems.",
                progression: "Junior Robotics Engineer → Robotics Engineer → Senior Engineer"
            }
        ]
    },

    {
        degree: "Data Science",
        qualification: "BSc Data Science",
        category: "technology",
        description: "Learn how to collect, analyse and interpret data to solve real-world problems.",
        careers: [
            {
                name: "Data Scientist",
                salary: "£32,000–£65,000",
                description: "Uses statistics, programming and machine learning to identify patterns and solve complex problems using data.",
                qualifications: "Data Science, Mathematics, Statistics or Computer Science.",
                skills: "Python, SQL, statistics, data visualisation and machine learning.",
                progression: "Junior Data Scientist → Data Scientist → Senior Data Scientist"
            },
            {
                name: "Data Analyst",
                salary: "£25,000–£50,000",
                description: "Analyses information and produces reports that help organisations make informed decisions.",
                qualifications: "Data Science, Mathematics, Statistics or Computing.",
                skills: "Excel, SQL, Python, statistics and data visualisation.",
                progression: "Junior Analyst → Data Analyst → Senior Analyst"
            },
            {
                name: "Business Intelligence Analyst",
                salary: "£28,000–£55,000",
                description: "Turns business information into dashboards, reports and insights.",
                qualifications: "Data Science, Business Analytics or Computer Science.",
                skills: "SQL, Power BI, data analysis and communication.",
                progression: "Junior BI Analyst → BI Analyst → BI Manager"
            }
        ]
    },

    // ENGINEERING
    {
        degree: "Mechanical Engineering",
        qualification: "BEng Mechanical Engineering",
        category: "engineering",
        description: "Study the design, development and operation of machines, engines and mechanical systems.",
        careers: [
            {
                name: "Mechanical Engineer",
                salary: "£28,000–£55,000",
                description: "Designs, develops and tests mechanical equipment, machinery and engineering systems.",
                qualifications: "Mechanical Engineering or a related engineering degree.",
                skills: "CAD, mathematics, mechanics and problem-solving.",
                progression: "Graduate Engineer → Mechanical Engineer → Senior Engineer → Engineering Manager"
            },
            {
                name: "Automotive Engineer",
                salary: "£28,000–£60,000",
                description: "Works on vehicle design, performance, safety and the development of automotive technologies.",
                qualifications: "Automotive Engineering or Mechanical Engineering.",
                skills: "Vehicle dynamics, CAD, electronics and engineering design.",
                progression: "Graduate Engineer → Automotive Engineer → Senior Engineer"
            },
            {
                name: "Motorsport Engineer",
                salary: "£28,000–£65,000",
                description: "Develops and improves racing vehicles through engineering, performance analysis and testing.",
                qualifications: "Motorsport Engineering, Mechanical Engineering or Automotive Engineering.",
                skills: "Vehicle dynamics, aerodynamics, data analysis and engineering design.",
                progression: "Graduate Engineer → Motorsport Engineer → Senior Race Engineer"
            },
            {
                name: "Aerospace Engineer",
                salary: "£30,000–£65,000",
                description: "Designs and develops aircraft, spacecraft and their engineering systems.",
                qualifications: "Aerospace Engineering or Mechanical Engineering.",
                skills: "Aerodynamics, mathematics, CAD and engineering analysis.",
                progression: "Graduate Engineer → Aerospace Engineer → Senior Engineer"
            }
        ]
    },

    {
        degree: "Electrical and Electronic Engineering",
        qualification: "BEng Electrical and Electronic Engineering",
        category: "engineering",
        description: "Study electrical systems, circuits, electronics, energy and modern technologies.",
        careers: [
            {
                name: "Electrical Engineer",
                salary: "£28,000–£60,000",
                description: "Designs and maintains electrical systems used in buildings, industries and power networks.",
                qualifications: "Electrical Engineering or Electronic Engineering.",
                skills: "Circuit design, electrical systems, mathematics and technical problem-solving.",
                progression: "Graduate Engineer → Electrical Engineer → Senior Engineer"
            },
            {
                name: "Electronics Engineer",
                salary: "£28,000–£60,000",
                description: "Designs and tests electronic circuits, components and devices.",
                qualifications: "Electronic Engineering or Electrical Engineering.",
                skills: "Circuit design, microprocessors, electronics and programming.",
                progression: "Graduate Engineer → Electronics Engineer → Senior Engineer"
            },
            {
                name: "Renewable Energy Engineer",
                salary: "£28,000–£60,000",
                description: "Develops technologies and systems that generate energy from sustainable sources.",
                qualifications: "Renewable Energy, Electrical Engineering or Mechanical Engineering.",
                skills: "Energy systems, engineering design and sustainability.",
                progression: "Graduate Engineer → Energy Engineer → Senior Engineer"
            }
        ]
    },

    // SCIENCE
    {
        degree: "Biology and Biomedical Science",
        qualification: "BSc Biomedical Science or Biology",
        category: "science",
        description: "Explore living organisms, human biology, disease, genetics and scientific research.",
        careers: [
            {
                name: "Biomedical Scientist",
                salary: "£28,000–£50,000",
                description: "Analyses patient samples in laboratories to help diagnose diseases and monitor medical conditions.",
                qualifications: "An accredited Biomedical Science degree is important for the NHS biomedical scientist registration route.",
                skills: "Laboratory techniques, biology, accuracy and scientific analysis.",
                progression: "Trainee Biomedical Scientist → Biomedical Scientist → Specialist Scientist"
            },
            {
                name: "Microbiologist",
                salary: "£25,000–£50,000",
                description: "Studies microorganisms such as bacteria, viruses and fungi.",
                qualifications: "Microbiology, Biology or Biomedical Science.",
                skills: "Laboratory research, microbiology, analysis and attention to detail.",
                progression: "Laboratory Assistant → Microbiologist → Senior Scientist"
            },
            {
                name: "Geneticist",
                salary: "£28,000–£60,000",
                description: "Studies genes, DNA and inherited characteristics to understand biological processes and diseases.",
                qualifications: "Genetics, Biology or Biomedical Science. Research roles may require postgraduate qualifications.",
                skills: "Genetics, laboratory research, data analysis and biology.",
                progression: "Research Assistant → Geneticist → Senior Research Scientist"
            }
        ]
    },

    {
        degree: "Environmental Science",
        qualification: "BSc Environmental Science",
        category: "science",
        description: "Study environmental systems, climate change, ecosystems and ways to protect the planet.",
        careers: [
            {
                name: "Environmental Scientist",
                salary: "£25,000–£50,000",
                description: "Investigates environmental problems such as pollution, climate impacts and resource management.",
                qualifications: "Environmental Science, Ecology or Geography.",
                skills: "Research, data analysis, environmental monitoring and communication.",
                progression: "Graduate Scientist → Environmental Scientist → Senior Consultant"
            },
            {
                name: "Climate Scientist",
                salary: "£28,000–£55,000",
                description: "Studies climate patterns and uses scientific data to understand climate change.",
                qualifications: "Climate Science, Physics, Environmental Science or Mathematics.",
                skills: "Statistics, research, climate modelling and data analysis.",
                progression: "Research Assistant → Climate Scientist → Senior Researcher"
            },
            {
                name: "Wildlife Conservationist",
                salary: "£23,000–£45,000",
                description: "Works to protect wildlife, natural habitats and biodiversity.",
                qualifications: "Wildlife Conservation, Ecology, Zoology or Biology.",
                skills: "Ecology, field research, conservation and communication.",
                progression: "Conservation Assistant → Conservation Officer → Conservation Manager"
            }
        ]
    },

    // HEALTHCARE
    {
        degree: "Medicine",
        qualification: "MBBS / MBChB",
        category: "healthcare",
        description: "Study human anatomy, diseases, diagnosis and clinical practice to prepare for a medical career.",
        careers: [
            {
                name: "Doctor",
                salary: "£38,000–£75,000+",
                description: "Diagnoses illnesses, treats patients and provides medical advice and care.",
                qualifications: "An approved medical degree followed by Foundation training and further medical training.",
                skills: "Communication, medical knowledge, decision-making and teamwork.",
                progression: "Foundation Doctor → Specialty Trainee → Consultant"
            },
            {
                name: "Surgeon",
                salary: "£40,000–£100,000+",
                description: "Performs surgical procedures to treat injuries, diseases and medical conditions.",
                qualifications: "Medical degree followed by specialist surgical training.",
                skills: "Surgical techniques, anatomy, precision and decision-making.",
                progression: "Foundation Doctor → Surgical Trainee → Consultant Surgeon"
            },
            {
                name: "Psychiatrist",
                salary: "£40,000–£100,000+",
                description: "Diagnoses and treats mental health conditions using medical and therapeutic approaches.",
                qualifications: "Medical degree followed by specialist psychiatry training.",
                skills: "Medical knowledge, communication, assessment and patient care.",
                progression: "Foundation Doctor → Psychiatry Trainee → Consultant Psychiatrist"
            }
        ]
    },

    {
        degree: "Psychology",
        qualification: "BSc Psychology",
        category: "healthcare",
        description: "Explore the human mind, behaviour, emotions, development and mental processes.",
        careers: [
            {
                name: "Psychologist",
                salary: "£30,000–£65,000",
                description: "Studies human behaviour and supports people with emotional, behavioural or psychological difficulties.",
                qualifications: "Psychology degree. Practitioner psychologist roles require further recognised postgraduate training and registration.",
                skills: "Research, communication, assessment and understanding human behaviour.",
                progression: "Psychology Assistant → Trainee Psychologist → Practitioner Psychologist"
            },
            {
                name: "Research Psychologist",
                salary: "£28,000–£55,000",
                description: "Conducts research into human behaviour, memory, emotions and mental processes.",
                qualifications: "Psychology degree. Research positions may require a Master's or PhD.",
                skills: "Research methods, statistics, analysis and scientific writing.",
                progression: "Research Assistant → Researcher → Senior Researcher"
            }
        ]
    },

    // BUSINESS
    {
        degree: "Business Management",
        qualification: "BA Business Management",
        category: "business",
        description: "Learn how organisations operate through management, leadership, finance and business strategy.",
        careers: [
            {
                name: "Business Manager",
                salary: "£30,000–£65,000",
                description: "Oversees business activities, manages teams and helps organisations achieve their goals.",
                qualifications: "Business Management, Business Studies or a related degree.",
                skills: "Leadership, organisation, communication and decision-making.",
                progression: "Management Trainee → Business Manager → Senior Manager → Director"
            },
            {
                name: "Project Manager",
                salary: "£30,000–£65,000",
                description: "Plans and manages projects, ensuring they are completed within agreed budgets and deadlines.",
                qualifications: "Project Management, Business Management or a relevant subject.",
                skills: "Planning, communication, leadership and risk management.",
                progression: "Project Coordinator → Project Manager → Programme Manager"
            },
            {
                name: "Management Consultant",
                salary: "£30,000–£70,000",
                description: "Advises organisations on improving performance, solving problems and developing business strategies.",
                qualifications: "Business Management, Economics, Finance or other relevant degrees.",
                skills: "Analysis, communication, problem-solving and presentation.",
                progression: "Analyst → Consultant → Senior Consultant → Partner"
            }
        ]
    },

    {
        degree: "Accounting and Finance",
        qualification: "BSc Accounting and Finance",
        category: "business",
        description: "Study financial reporting, accounting, investment, taxation and financial decision-making.",
        careers: [
            {
                name: "Accountant",
                salary: "£28,000–£60,000",
                description: "Prepares financial records, analyses accounts and helps organisations manage their finances.",
                qualifications: "Accounting and Finance or Accounting. Professional qualifications such as ACCA or ACA may be needed for progression.",
                skills: "Numeracy, financial reporting, organisation and attention to detail.",
                progression: "Trainee Accountant → Qualified Accountant → Finance Manager"
            },
            {
                name: "Financial Analyst",
                salary: "£30,000–£65,000",
                description: "Examines financial information and helps businesses and investors make financial decisions.",
                qualifications: "Finance, Accounting, Economics or Mathematics.",
                skills: "Financial modelling, analysis, mathematics and Excel.",
                progression: "Junior Analyst → Financial Analyst → Senior Analyst"
            },
            {
                name: "Investment Banker",
                salary: "£35,000–£90,000+",
                description: "Helps organisations raise capital, manage financial transactions and assess investment opportunities.",
                qualifications: "Finance, Economics, Accounting or Mathematics.",
                skills: "Financial analysis, communication, mathematics and commercial awareness.",
                progression: "Analyst → Associate → Vice President → Director"
            }
        ]
    },

    // ARTS AND DESIGN
    {
        degree: "Graphic and Digital Design",
        qualification: "BA Graphic Design",
        category: "arts",
        description: "Explore visual communication, branding, digital design and creative problem-solving.",
        careers: [
            {
                name: "Graphic Designer",
                salary: "£23,000–£45,000",
                description: "Creates visual designs for brands, websites, advertising and digital or printed media.",
                qualifications: "Graphic Design, Visual Communication or Digital Design.",
                skills: "Creativity, typography, design software and visual communication.",
                progression: "Junior Designer → Graphic Designer → Senior Designer → Creative Director"
            },
            {
                name: "UX Designer",
                salary: "£28,000–£60,000",
                description: "Designs user-friendly digital experiences by understanding user needs and improving how people interact with products.",
                qualifications: "UX Design, Interaction Design, Graphic Design or Computer Science.",
                skills: "User research, wireframing, prototyping, accessibility and design thinking.",
                progression: "Junior UX Designer → UX Designer → Senior UX Designer → UX Lead"
            },
            {
                name: "UI Designer",
                salary: "£28,000–£55,000",
                description: "Designs the visual elements of websites and applications, including layouts, buttons, icons and interfaces.",
                qualifications: "Graphic Design, Digital Design, UX Design or Interaction Design.",
                skills: "Visual design, Figma, typography and prototyping.",
                progression: "Junior UI Designer → UI Designer → Senior UI Designer"
            },
            {
                name: "Animator",
                salary: "£23,000–£50,000",
                description: "Creates moving images and visual effects for films, games, advertising and digital media.",
                qualifications: "Animation, Digital Media or Computer Games Art.",
                skills: "Animation software, creativity, storytelling and visual design.",
                progression: "Junior Animator → Animator → Senior Animator → Animation Director"
            }
        ]
    },

    // SOCIAL SCIENCES
    {
        degree: "Law",
        qualification: "LLB Law",
        category: "social-sciences",
        description: "Study legal systems, legislation, justice and the principles that govern society.",
        careers: [
            {
                name: "Lawyer",
                salary: "£30,000–£80,000+",
                description: "Provides legal advice, represents clients and works with laws and legal cases.",
                qualifications: "An LLB or another qualifying academic route, followed by the required professional training for the chosen legal profession.",
                skills: "Communication, research, critical thinking and legal reasoning.",
                progression: "Trainee Solicitor → Solicitor → Senior Solicitor → Partner"
            },
            {
                name: "Legal Researcher",
                salary: "£25,000–£50,000",
                description: "Researches legislation, legal cases and regulations to support legal decisions and advice.",
                qualifications: "Law, Legal Studies or a related subject.",
                skills: "Research, writing, analysis and attention to detail.",
                progression: "Legal Assistant → Legal Researcher → Senior Researcher"
            }
        ]
    },

    // ARCHITECTURE
    {
        degree: "Architecture",
        qualification: "BA / BSc Architecture",
        category: "engineering",
        description: "Explore building design, structures, materials, sustainability and the built environment.",
        careers: [
            {
                name: "Architect",
                salary: "£30,000–£60,000",
                description: "Designs buildings and spaces while considering safety, function, sustainability and appearance.",
                qualifications: "An accredited architecture education and the further professional experience and assessment required for registration.",
                skills: "Design, creativity, CAD, communication and technical drawing.",
                progression: "Architectural Assistant → Architect → Senior Architect → Design Director"
            },
            {
                name: "Urban Planner",
                salary: "£25,000–£50,000",
                description: "Helps plan towns and cities, including housing, transport, public spaces and sustainable development.",
                qualifications: "Urban Planning, Geography or a related degree.",
                skills: "Research, planning, communication and problem-solving.",
                progression: "Planning Assistant → Urban Planner → Senior Planner"
            }
        ]
    }

];


// ==========================================
// ADDITIONAL CAREER PATHWAYS
// Paste this after the existing degreeCareerPaths array.
// ==========================================

const additionalCareerGroups = [
    {
        degree: "Cloud Computing",
        qualification: "BSc Computer Science, Cloud Computing or a related degree",
        category: "technology",
        description: "Explore cloud platforms, distributed systems and modern computing infrastructure.",
        salary: "£30,000–£75,000",
        careers: [
            "Cloud Engineer",
            "Computer Systems Architect"
        ]
    },
    {
        degree: "Game Development",
        qualification: "BSc Computer Science, Games Programming or Software Engineering",
        category: "technology",
        description: "Explore programming, game engines, interactive media and software development.",
        salary: "£25,000–£60,000",
        careers: ["Game Developer"]
    },
    {
        degree: "Network Engineering",
        qualification: "BSc Computer Networks, Computer Science or Cyber Security",
        category: "technology",
        description: "Study computer networks, infrastructure, connectivity and network security.",
        salary: "£28,000–£65,000",
        careers: ["Network Engineer"]
    },
    {
        degree: "DevOps Engineering",
        qualification: "BSc Computer Science, Software Engineering or a related degree",
        category: "technology",
        description: "Learn software delivery, automation, cloud infrastructure and deployment.",
        salary: "£35,000–£80,000",
        careers: ["DevOps Engineer"]
    },
    {
        degree: "Bioinformatics",
        qualification: "BSc Bioinformatics, Biology, Computer Science or a related degree",
        category: "science",
        description: "Combine biology, computing and data analysis to study biological information.",
        salary: "£28,000–£60,000",
        careers: ["Bioinformatics Scientist"]
    },
    {
        degree: "Quantum Computing",
        qualification: "BSc Physics, Mathematics, Computer Science or a related degree",
        category: "technology",
        description: "Explore quantum mechanics, advanced mathematics and emerging computing technologies.",
        salary: "£35,000–£85,000",
        careers: ["Quantum Computing Researcher"]
    },
    {
        degree: "Civil Engineering",
        qualification: "BEng or MEng Civil Engineering",
        category: "engineering",
        description: "Study the design, construction and maintenance of buildings and infrastructure.",
        salary: "£28,000–£65,000",
        careers: ["Civil Engineer", "Structural Engineer"]
    },
    {
        degree: "Chemical Engineering",
        qualification: "BEng or MEng Chemical Engineering",
        category: "engineering",
        description: "Explore chemical processes, materials, manufacturing and industrial systems.",
        salary: "£30,000–£70,000",
        careers: ["Chemical Engineer"]
    },
    {
        degree: "Mechatronics Engineering",
        qualification: "BEng or MEng Mechatronics, Robotics or Mechanical Engineering",
        category: "engineering",
        description: "Combine mechanical engineering, electronics, robotics and computer control.",
        salary: "£28,000–£65,000",
        careers: ["Mechatronics Engineer"]
    },
    {
        degree: "Marine Engineering",
        qualification: "BEng or MEng Marine Engineering",
        category: "engineering",
        description: "Study the engineering systems used in ships, vessels and marine technology.",
        salary: "£28,000–£65,000",
        careers: ["Marine Engineer"]
    },
    {
        degree: "Nuclear Engineering",
        qualification: "BEng or MEng Nuclear Engineering, Physics or a related subject",
        category: "engineering",
        description: "Explore nuclear energy, radiation, reactor systems and safety engineering.",
        salary: "£32,000–£75,000",
        careers: ["Nuclear Engineer"]
    },
    {
        degree: "Physics and Astronomy",
        qualification: "BSc or MSci Physics, Astrophysics or Astronomy",
        category: "science",
        description: "Study matter, energy, space, the universe and the fundamental laws of nature.",
        salary: "£28,000–£65,000",
        careers: ["Astronomer", "Physicist"]
    },
    {
        degree: "Chemistry",
        qualification: "BSc or MChem Chemistry",
        category: "science",
        description: "Explore chemical substances, laboratory research and material development.",
        salary: "£25,000–£55,000",
        careers: ["Chemist"]
    },
    {
        degree: "Marine Biology",
        qualification: "BSc Marine Biology or Marine Science",
        category: "science",
        description: "Study ocean ecosystems, marine organisms and underwater environments.",
        salary: "£24,000–£45,000",
        careers: ["Marine Biologist"]
    },
    {
        degree: "Geology and Earth Science",
        qualification: "BSc Geology, Earth Science or Geoscience",
        category: "science",
        description: "Explore the Earth, rocks, natural resources and geological processes.",
        salary: "£25,000–£55,000",
        careers: ["Geologist", "Palaeontologist"]
    },
    {
        degree: "Environmental and Atmospheric Science",
        qualification: "BSc Environmental Science, Meteorology or Climate Science",
        category: "science",
        description: "Study weather systems, climate patterns and environmental change.",
        salary: "£25,000–£55,000",
        careers: ["Meteorologist", "Climate Scientist"]
    },
    {
        degree: "Neuroscience",
        qualification: "BSc Neuroscience, Biology or Psychology",
        category: "science",
        description: "Explore the brain, nervous system, behaviour and neurological research.",
        salary: "£25,000–£55,000",
        careers: ["Neuroscientist"]
    },
    {
        degree: "Ecology and Conservation",
        qualification: "BSc Ecology, Conservation Biology or Environmental Science",
        category: "science",
        description: "Study ecosystems, biodiversity, wildlife and environmental protection.",
        salary: "£23,000–£45,000",
        careers: ["Ecologist"]
    },
    {
        degree: "Mathematics and Statistics",
        qualification: "BSc Mathematics, Statistics or Applied Mathematics",
        category: "science",
        description: "Develop mathematical, statistical and analytical skills for research and industry.",
        salary: "£28,000–£65,000",
        careers: ["Mathematician", "Statistician"]
    },
    {
        degree: "Forensic Science",
        qualification: "BSc Forensic Science or a related science degree",
        category: "science",
        description: "Apply scientific techniques to investigate evidence and support criminal investigations.",
        salary: "£24,000–£45,000",
        careers: ["Forensic Scientist"]
    },
    {
        degree: "Dentistry",
        qualification: "BDS Dentistry",
        category: "healthcare",
        description: "Study oral health, dental treatment and the prevention of dental disease.",
        salary: "£35,000–£90,000",
        careers: ["Dentist"]
    },
    {
        degree: "Pharmacy",
        qualification: "MPharm Pharmacy",
        category: "healthcare",
        description: "Study medicines, their effects and their safe use in healthcare.",
        salary: "£30,000–£55,000",
        careers: ["Pharmacist"]
    },
    {
        degree: "Nursing",
        qualification: "BSc Nursing",
        category: "healthcare",
        description: "Develop clinical knowledge and practical skills to care for patients.",
        salary: "£29,000–£50,000",
        careers: ["Nurse"]
    },
    {
        degree: "Physiotherapy",
        qualification: "BSc Physiotherapy",
        category: "healthcare",
        description: "Study movement, rehabilitation and treatments that help people recover physically.",
        salary: "£29,000–£50,000",
        careers: ["Physiotherapist"]
    },
    {
        degree: "Optometry",
        qualification: "BSc Optometry",
        category: "healthcare",
        description: "Study vision, eye health and the assessment of visual conditions.",
        salary: "£30,000–£60,000",
        careers: ["Optometrist"]
    },
    {
        degree: "Nutrition and Dietetics",
        qualification: "BSc Dietetics or Nutrition, with an approved route to registration where required",
        category: "healthcare",
        description: "Explore nutrition, food science and the role of diet in health.",
        salary: "£27,000–£50,000",
        careers: ["Dietitian"]
    },
    {
        degree: "Paramedic Science",
        qualification: "BSc Paramedic Science",
        category: "healthcare",
        description: "Learn emergency medical care, patient assessment and pre-hospital treatment.",
        salary: "£29,000–£45,000",
        careers: ["Paramedic"]
    },
    {
        degree: "Veterinary Science",
        qualification: "BVetMed or equivalent veterinary medicine qualification",
        category: "healthcare",
        description: "Study animal health, diagnosis, surgery and veterinary treatment.",
        salary: "£32,000–£65,000",
        careers: ["Veterinarian"]
    },
    {
        degree: "Speech and Language Therapy",
        qualification: "BSc or approved postgraduate qualification in Speech and Language Therapy",
        category: "healthcare",
        description: "Help people with communication, speech, language and swallowing difficulties.",
        salary: "£29,000–£50,000",
        careers: ["Speech Therapist"]
    },
    {
        degree: "Audiology",
        qualification: "BSc Healthcare Science (Audiology) or an approved equivalent route",
        category: "healthcare",
        description: "Study hearing, balance and the assessment and treatment of hearing conditions.",
        salary: "£27,000–£48,000",
        careers: ["Audiologist"]
    },
    {
        degree: "Economics",
        qualification: "BSc Economics or Economics and Finance",
        category: "business",
        description: "Study markets, financial systems, economic policy and decision-making.",
        salary: "£28,000–£70,000",
        careers: ["Economist"]
    },
    {
        degree: "Marketing",
        qualification: "BA or BSc Marketing, Business or Digital Marketing",
        category: "business",
        description: "Explore branding, consumer behaviour, advertising and marketing strategy.",
        salary: "£25,000–£60,000",
        careers: ["Marketing Manager"]
    },
    {
        degree: "Entrepreneurship and Innovation",
        qualification: "BA or BSc Business Management, Entrepreneurship or Innovation",
        category: "business",
        description: "Learn how to develop business ideas, launch ventures and manage organisations.",
        salary: "Varies depending on business success",
        careers: ["Entrepreneur"]
    },
    {
        degree: "Supply Chain Management",
        qualification: "BSc Supply Chain Management, Logistics or Business",
        category: "business",
        description: "Study procurement, logistics, operations and the movement of products.",
        salary: "£28,000–£65,000",
        careers: ["Supply Chain Manager"]
    },
    {
        degree: "Actuarial Science",
        qualification: "BSc Actuarial Science, Mathematics or Statistics",
        category: "business",
        description: "Apply mathematics and statistics to financial risk and uncertainty.",
        salary: "£30,000–£90,000",
        careers: ["Actuary"]
    },
    {
        degree: "Human Resources Management",
        qualification: "BA or BSc Human Resource Management or Business",
        category: "business",
        description: "Study recruitment, employee development, workplace policies and organisational behaviour.",
        salary: "£25,000–£60,000",
        careers: ["Human Resources Manager"]
    },
    {
        degree: "Digital Commerce",
        qualification: "BSc Digital Business, Marketing or Business Management",
        category: "business",
        description: "Explore online businesses, digital sales, e-commerce platforms and customer experience.",
        salary: "£25,000–£60,000",
        careers: ["E-commerce Manager"]
    },
    {
        degree: "Financial Planning",
        qualification: "BSc Finance, Financial Planning or Business",
        category: "business",
        description: "Study personal finance, investments, financial planning and wealth management.",
        salary: "£28,000–£70,000",
        careers: ["Financial Adviser"]
    },
    {
        degree: "Photography and Visual Media",
        qualification: "BA Photography, Visual Arts or Media Production",
        category: "arts",
        description: "Explore visual storytelling, photography, editing and creative media.",
        salary: "Varies depending on experience and projects",
        careers: ["Photographer"]
    },
    {
        degree: "Film and Television Production",
        qualification: "BA Film Production, Television Production or Media",
        category: "arts",
        description: "Study filmmaking, production, directing and visual storytelling.",
        salary: "Varies depending on experience and projects",
        careers: ["Film Director", "Actor", "Broadcaster"]
    },
    {
        degree: "Fashion Design",
        qualification: "BA Fashion Design or Fashion Technology",
        category: "arts",
        description: "Explore clothing design, textiles, fashion illustration and creative production.",
        salary: "£22,000–£55,000",
        careers: ["Fashion Designer"]
    },
    {
        degree: "Interior Design",
        qualification: "BA Interior Design or Interior Architecture",
        category: "arts",
        description: "Study the design and planning of functional and attractive indoor spaces.",
        salary: "£24,000–£50,000",
        careers: ["Interior Designer"]
    },
    {
        degree: "Writing and Publishing",
        qualification: "BA English, Creative Writing or Journalism",
        category: "arts",
        description: "Develop writing, editing, storytelling and publishing skills.",
        salary: "Varies depending on experience and projects",
        careers: ["Writer / Author", "Journalist"]
    },
    {
        degree: "Music Production",
        qualification: "BA Music Production, Sound Engineering or Music Technology",
        category: "arts",
        description: "Explore recording, sound design, music technology and audio production.",
        salary: "Varies depending on experience and projects",
        careers: ["Music Producer"]
    },
    {
        degree: "Digital Art and 3D Design",
        qualification: "BA Digital Art, Animation, Games Art or 3D Design",
        category: "arts",
        description: "Develop digital artwork, 3D modelling, visual effects and creative design.",
        salary: "£24,000–£55,000",
        careers: ["3D Artist", "Animator"]
    },
    {
        degree: "Media and Digital Content",
        qualification: "BA Media, Communications or Digital Marketing",
        category: "arts",
        description: "Study online media, content production, communication and audience engagement.",
        salary: "£23,000–£50,000",
        careers: ["Content Creator"]
    },
    {
        degree: "Education",
        qualification: "BA or BSc Education, or an appropriate degree followed by teacher training",
        category: "social-sciences",
        description: "Study learning, teaching methods, education systems and student development.",
        salary: "£30,000–£55,000",
        careers: ["Teacher", "Education Consultant"]
    },
    {
        degree: "Academic Research",
        qualification: "Relevant bachelor's degree followed by postgraduate study where required",
        category: "social-sciences",
        description: "Develop specialist knowledge and research skills in an academic subject.",
        salary: "£30,000–£60,000",
        careers: ["University Lecturer"]
    },
    {
        degree: "Sociology",
        qualification: "BA or BSc Sociology",
        category: "social-sciences",
        description: "Study society, social relationships, institutions and human behaviour.",
        salary: "£25,000–£50,000",
        careers: ["Sociologist"]
    },
    {
        degree: "Archaeology",
        qualification: "BA or BSc Archaeology",
        category: "social-sciences",
        description: "Explore past societies through historical sites, artefacts and scientific investigation.",
        salary: "£24,000–£45,000",
        careers: ["Archaeologist"]
    },
    {
        degree: "Geography",
        qualification: "BA or BSc Geography",
        category: "social-sciences",
        description: "Study places, landscapes, populations and the relationship between people and environments.",
        salary: "£25,000–£50,000",
        careers: ["Geographer"]
    },
    {
        degree: "Social Work",
        qualification: "BA or BSc Social Work approved for professional registration",
        category: "social-sciences",
        description: "Learn how to support individuals, families and communities through challenging circumstances.",
        salary: "£30,000–£50,000",
        careers: ["Social Worker"]
    },
    {
        degree: "Languages and Translation",
        qualification: "BA Modern Languages, Translation or Linguistics",
        category: "social-sciences",
        description: "Develop language skills and explore translation and cross-cultural communication.",
        salary: "£24,000–£50,000",
        careers: ["Translator"]
    },
    {
        degree: "International Relations",
        qualification: "BA International Relations, Politics or Global Studies",
        category: "social-sciences",
        description: "Study international politics, diplomacy, global organisations and international policy.",
        salary: "£25,000–£60,000",
        careers: ["International Relations Specialist", "Diplomat"]
    },
    {
        degree: "History",
        qualification: "BA History or a related humanities degree",
        category: "social-sciences",
        description: "Explore historical events, societies, cultures and historical research.",
        salary: "£24,000–£50,000",
        careers: ["Historian"]
    },
    {
        degree: "Agricultural Science",
        qualification: "BSc Agriculture, Agricultural Science or a related subject",
        category: "science",
        description: "Study farming, crop production, food systems and agricultural technology.",
        salary: "£24,000–£50,000",
        careers: ["Agricultural Scientist"]
    },
    {
        degree: "Forestry and Wildlife Management",
        qualification: "BSc Forestry, Conservation or Environmental Science",
        category: "science",
        description: "Explore woodland ecosystems, forest management and conservation.",
        salary: "£23,000–£45,000",
        careers: ["Forester", "Wildlife Conservationist"]
    },
    {
        degree: "Fisheries Science",
        qualification: "BSc Marine Science, Fisheries Science or Aquaculture",
        category: "science",
        description: "Study fish populations, aquatic ecosystems and sustainable fisheries.",
        salary: "£24,000–£48,000",
        careers: ["Fisheries Scientist"]
    },
    {
        degree: "Sustainability",
        qualification: "BSc Environmental Science, Sustainability or related subject",
        category: "science",
        description: "Explore sustainable development, environmental policy and responsible resource use.",
        salary: "£27,000–£60,000",
        careers: ["Sustainability Consultant"]
    },
    {
        degree: "Quantity Surveying",
        qualification: "BSc Quantity Surveying or Commercial Management",
        category: "engineering",
        description: "Study construction costs, contracts, budgeting and project financial management.",
        salary: "£28,000–£65,000",
        careers: ["Quantity Surveyor"]
    },
    {
        degree: "Construction Management",
        qualification: "BSc Construction Management or a related degree",
        category: "engineering",
        description: "Learn how to plan, manage and deliver construction projects.",
        salary: "£28,000–£65,000",
        careers: ["Construction Manager"]
    },
    {
        degree: "Property and Real Estate",
        qualification: "BSc Real Estate, Property Management or Business",
        category: "business",
        description: "Explore property development, valuation, investment and management.",
        salary: "£25,000–£65,000",
        careers: ["Property Developer"]
    },
    {
        degree: "Aviation",
        qualification: "Approved pilot training route or an aviation-related degree",
        category: "engineering",
        description: "Explore aircraft operations, aviation systems and flight training.",
        salary: "£30,000–£100,000",
        careers: ["Commercial Pilot", "Air Traffic Controller"]
    },
    {
        degree: "Aerospace and Space Engineering",
        qualification: "BEng or MEng Aerospace Engineering, Space Engineering or Physics",
        category: "engineering",
        description: "Study aircraft, spacecraft, satellites and advanced aerospace systems.",
        salary: "£30,000–£75,000",
        careers: ["Satellite Engineer", "Astronaut"]
    },
    {
        degree: "Maritime Studies",
        qualification: "Approved maritime training or a relevant maritime degree",
        category: "engineering",
        description: "Explore ship operations, navigation, maritime safety and vessel management.",
        salary: "£28,000–£65,000",
        careers: ["Ship Captain"]
    },
    {
        degree: "Defence and Security Studies",
        qualification: "Relevant degree or approved military training route",
        category: "social-sciences",
        description: "Explore defence, security, leadership and strategic operations.",
        salary: "Varies by role and service",
        careers: ["Military Officer"]
    },
    {
        degree: "Sports Science",
        qualification: "BSc Sports Science, Exercise Science or Sport and Exercise Psychology",
        category: "healthcare",
        description: "Study physical performance, exercise, fitness and human movement.",
        salary: "£24,000–£50,000",
        careers: ["Exercise Physiologist", "Sports Analyst"]
    },
    {
        degree: "Sports Coaching and Management",
        qualification: "BA or BSc Sports Coaching, Sports Management or Sports Science",
        category: "business",
        description: "Explore athletic development, coaching, sports organisations and performance.",
        salary: "£23,000–£55,000",
        careers: ["Professional Athlete", "Personal Trainer", "Sports Coach", "Sports Manager"]
    },
    {
        degree: "Hospitality and Tourism",
        qualification: "BA or BSc Hospitality, Tourism or Hotel Management",
        category: "business",
        description: "Study hospitality operations, tourism, customer experience and service management.",
        salary: "£23,000–£55,000",
        careers: ["Hotel Manager", "Travel Consultant", "Tourism Manager"]
    },
    {
        degree: "Culinary Arts",
        qualification: "Professional culinary training or a degree in Culinary Arts",
        category: "arts",
        description: "Explore food preparation, kitchen management, menu design and culinary creativity.",
        salary: "£23,000–£55,000",
        careers: ["Chef"]
    }
];

// Add the additional careers without duplicating existing career titles.
additionalCareerGroups.forEach(group => {
    const existingCareerNames = new Set(
        degreeCareerPaths.flatMap(degree =>
            degree.careers.map(career => career.name.toLowerCase().trim())
        )
    );

    const newCareers = group.careers
        .filter(name => !existingCareerNames.has(name.toLowerCase().trim()))
        .map(name => ({
            name: name,
            salary: group.salary,
            description: `Explore a career as a ${name}, applying specialist knowledge and practical skills in this field.`,
            qualifications: group.qualification,
            skills: "Communication, problem-solving, teamwork, research and specialist subject knowledge.",
            progression: `With experience and further professional development, a ${name} can progress into senior, specialist or leadership positions.`
        }));

    if (newCareers.length > 0) {
        degreeCareerPaths.push({
            degree: group.degree,
            qualification: group.qualification,
            category: group.category,
            description: group.description,
            careers: newCareers
        });
    }
});


// ==========================================
// RENDER DEGREE CARDS
// ==========================================

function renderDegreeCards() {

    const container = document.getElementById("degreeContainer");

    if (!container) return;

    const searchInput = document.getElementById("degreeSearch");
    const countDisplay = document.getElementById("degreeCount");
    const noResults = document.getElementById("noDegreesMessage");

    const searchTerm = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    const activeButton = document.querySelector(".degree-filter.active");

    const selectedCategory = activeButton
        ? activeButton.dataset.category
        : "all";

    const filteredDegrees = degreeCareerPaths.filter(item => {

        const allCareerText = item.careers.map(career =>
            `${career.name} ${career.description} ${career.skills}`
        ).join(" ");

        const searchableText =
            `${item.degree} ${item.qualification} ${item.description} ${allCareerText}`
            .toLowerCase();

        const matchesSearch = searchableText.includes(searchTerm);

        const matchesCategory =
            selectedCategory === "all" ||
            item.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    container.innerHTML = "";

    filteredDegrees.forEach(item => {

        const degreeCard = document.createElement("article");
        degreeCard.className = "degree-card";

        const header = document.createElement("div");
        header.className = "degree-card-header";

        const title = document.createElement("h3");
        title.textContent = item.degree;

        const qualification = document.createElement("p");
        qualification.textContent = item.qualification;

        const description = document.createElement("p");
        description.className = "degree-description";
        description.textContent = item.description;

        const careerCount = document.createElement("span");
        careerCount.className = "degree-career-count";
        careerCount.textContent = `${item.careers.length} related career options`;

        header.appendChild(title);
        header.appendChild(qualification);
        header.appendChild(description);
        header.appendChild(careerCount);

        const careerDetails = document.createElement("details");
        careerDetails.className = "degree-career-details";

        const summary = document.createElement("summary");
        summary.textContent = "Explore related job roles →";

        const jobsContainer = document.createElement("div");
        jobsContainer.className = "related-jobs";

        item.careers.forEach(job => {

            const jobCard = document.createElement("details");
            jobCard.className = "related-job-card";

            const jobSummary = document.createElement("summary");
            jobSummary.textContent = job.name;

            const jobContent = document.createElement("div");
            jobContent.className = "related-job-content";

            const salary = document.createElement("p");
            salary.className = "job-salary";
            salary.textContent = `Estimated UK salary: ${job.salary} per year`;

            const descriptionHeading = document.createElement("h4");
            descriptionHeading.textContent = "Job Description";

            const descriptionText = document.createElement("p");
            descriptionText.textContent = job.description;

            const qualificationHeading = document.createElement("h4");
            qualificationHeading.textContent = "Qualifications";

            const qualificationText = document.createElement("p");
            qualificationText.textContent = job.qualifications;

            const skillsHeading = document.createElement("h4");
            skillsHeading.textContent = "Important Skills";

            const skillsText = document.createElement("p");
            skillsText.textContent = job.skills;

            const progressionHeading = document.createElement("h4");
            progressionHeading.textContent = "Career Progression";

            const progressionText = document.createElement("p");
            progressionText.textContent = job.progression;

            jobContent.append(
                salary,
                descriptionHeading,
                descriptionText,
                qualificationHeading,
                qualificationText,
                skillsHeading,
                skillsText,
                progressionHeading,
                progressionText
            );

            jobCard.appendChild(jobSummary);
            jobCard.appendChild(jobContent);

            jobsContainer.appendChild(jobCard);
        });

        careerDetails.appendChild(summary);
        careerDetails.appendChild(jobsContainer);

        degreeCard.appendChild(header);
        degreeCard.appendChild(careerDetails);

        container.appendChild(degreeCard);
    });

    if (countDisplay) {
        countDisplay.textContent =
            `Showing ${filteredDegrees.length} of ${degreeCareerPaths.length} degrees`;
    }

    if (noResults) {
        noResults.hidden = filteredDegrees.length !== 0;
    }
}


// ==========================================
// SEARCH AND SUBJECT FILTERS
// ==========================================

function initialiseDegreeExplorer() {

    const container = document.getElementById("degreeContainer");

    if (!container) return;

    const searchInput = document.getElementById("degreeSearch");

    if (searchInput) {
        searchInput.addEventListener("input", renderDegreeCards);
    }

    document.querySelectorAll(".degree-filter").forEach(button => {

        button.addEventListener("click", () => {

            document.querySelectorAll(".degree-filter").forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            renderDegreeCards();
        });

    });

    renderDegreeCards();

    // Support direct links from Learn to a related career.
    const params = new URLSearchParams(window.location.search);
    const requestedCareer = params.get("career");

    if (requestedCareer) {

        if (searchInput) {
            searchInput.value = requestedCareer;
        }

        const allButton = document.querySelector(
            '.degree-filter[data-category="all"]'
        );

        if (allButton) {
            document.querySelectorAll(".degree-filter").forEach(btn => {
                btn.classList.remove("active");
            });

            allButton.classList.add("active");
        }

        renderDegreeCards();

        const matchingJob = Array.from(
            document.querySelectorAll(".related-job-card")
        ).find(card =>
            card.querySelector("summary")?.textContent.trim().toLowerCase() ===
            requestedCareer.toLowerCase()
        );

        if (matchingJob) {

            const parentDegree = matchingJob.closest(".degree-card");
            const parentCareerDetails = matchingJob.closest(".degree-career-details");

            if (parentDegree && parentCareerDetails) {
                parentCareerDetails.open = true;
                matchingJob.open = true;

                setTimeout(() => {
                    parentDegree.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }, 200);
            }
        }
    }
}


// ==========================================
// INITIALISE CAREERS PAGE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    initialiseDegreeExplorer();
});


// ==========================================
// RESTORE LEARN PAGE - RELATED DEGREE OPTIONS
// ==========================================


// ==========================================
// LEARN PAGE - COURSE OPTIONS & RELATED JOBS
// ==========================================

function restoreLearnPageDegreeOptions() {

    const careersSection = document.getElementById("careers");
    if (!careersSection) return;

    // Find career cards
    const careerCards = careersSection.querySelectorAll(
        ".cards .card, .career-card"
    );

    // Change this if your Careers page has a different filename
    const careersPageURL = "career.html";

    careerCards.forEach(card => {

        // Avoid duplicate sections
        if (card.querySelector(".learn-career-options")) return;

        const heading = card.querySelector("h2, h3, h4");
        if (!heading) return;

        const careerName = heading.textContent.trim();

        // Find all degrees connected to this job role
        const relatedDegrees = degreeCareerPaths.filter(degree =>
            degree.careers.some(job =>
                job.name.toLowerCase() === careerName.toLowerCase()
            )
        );

        // Create the two options
        const optionsContainer = document.createElement("div");
        optionsContainer.className = "learn-career-options";

        // ======================================
        // OPTION 1: EXPLORE COURSE OPTIONS
        // ======================================

        const courseDetails = document.createElement("details");
        courseDetails.className = "degree-details";

        const courseSummary = document.createElement("summary");
        courseSummary.textContent = "🎓 Explore course options";

        const courseContent = document.createElement("div");
        courseContent.className = "degree-details-content";

        if (relatedDegrees.length > 0) {

            relatedDegrees.forEach(degree => {

                const courseItem = document.createElement("div");
                courseItem.className = "learn-course-item";

                const courseTitle = document.createElement("h4");
                courseTitle.textContent = degree.degree;

                const qualification = document.createElement("p");
                qualification.textContent = degree.qualification;

                const courseDescription = document.createElement("p");
                courseDescription.textContent = degree.description;

                const learnMore = document.createElement("a");

                learnMore.textContent = "Learn more →";

                learnMore.href =
                    "https://www.ucas.com/explore/search/courses?query=" +
                    encodeURIComponent(degree.degree);

                learnMore.target = "_blank";
                learnMore.rel = "noopener noreferrer";
                learnMore.className = "learn-more-course";

                courseItem.append(
                    courseTitle,
                    qualification,
                    courseDescription,
                    learnMore
                );

                courseContent.appendChild(courseItem);
            });

        } else {

            const noCourse = document.createElement("p");
            noCourse.textContent =
                "Course information for this career is being added.";

            courseContent.appendChild(noCourse);
        }

        courseDetails.append(courseSummary, courseContent);


        // ======================================
        // OPTION 2: RELATED JOB ROLES
        // ======================================

        const roleDetails = document.createElement("details");
        roleDetails.className = "degree-details";

        const roleSummary = document.createElement("summary");
        roleSummary.textContent = "💼 Related job roles";

        const roleContent = document.createElement("div");
        roleContent.className = "degree-details-content";

        const roleDescription = document.createElement("p");
        roleDescription.textContent =
            "Explore this career, its salary, qualifications, skills and career progression.";

        const roleLink = document.createElement("a");

        roleLink.textContent = "Explore " + careerName + " →";

        roleLink.href =
            careersPageURL + "?career=" + encodeURIComponent(careerName);

        roleLink.className = "related-career-link";

        roleContent.append(roleDescription, roleLink);

        roleDetails.append(roleSummary, roleContent);


        // Add both options to the career card
        optionsContainer.append(courseDetails, roleDetails);

        card.appendChild(optionsContainer);
    });
}


// Initialise Learn page options
function initialiseLearnCareerOptions() {
    restoreLearnPageDegreeOptions();
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initialiseLearnCareerOptions
    );
} else {
    initialiseLearnCareerOptions();
}


// ==========================================
// GIRLCODE FUTURE - PERSONALITY QUIZ START
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startQuiz");

    if (!startButton) return;

    startButton.addEventListener("click", function () {
        const welcomeScreen = document.getElementById("quizWelcome");
        const quizTop = document.getElementById("quizTop");
        const quizProgress = document.getElementById("quizProgress");
        const questionArea = document.getElementById("quizQuestionArea");
        const navigation = document.getElementById("quizNavigation");

        if (welcomeScreen) welcomeScreen.hidden = true;
        if (quizTop) quizTop.hidden = false;
        if (quizProgress) quizProgress.hidden = false;
        if (questionArea) questionArea.hidden = false;
        if (navigation) navigation.hidden = false;

        // Check whether the quiz question function exists
        if (typeof showQuizQuestion === "function") {
            showQuizQuestion();
        } else {
            console.error("The personality quiz questions have not been implemented yet.");
        }
    });
});


// ==========================================
// GIRLCODE FUTURE - PERSONALITY QUIZ
// ==========================================

(function () {
    const questions = [
        {
            question: "What do you enjoy doing the most?",
            answers: [
                ["Solving problems and puzzles", "technology"],
                ["Designing and creating things", "arts"],
                ["Helping and supporting people", "healthcare"],
                ["Leading projects and making decisions", "business"]
            ]
        },
        {
            question: "Which school subject interests you most?",
            answers: [
                ["Maths and Computer Science", "technology"],
                ["Art and Design", "arts"],
                ["Biology and Chemistry", "science"],
                ["Business and Economics", "business"]
            ]
        },
        {
            question: "What sounds like your ideal project?",
            answers: [
                ["Building an app or website", "technology"],
                ["Designing a building or product", "architecture"],
                ["Discovering something new through research", "science"],
                ["Organising an event or team", "business"]
            ]
        },
        {
            question: "How do you prefer to work?",
            answers: [
                ["Independently, solving challenges", "technology"],
                ["Creatively, expressing ideas", "arts"],
                ["With people, making a difference", "healthcare"],
                ["In a team, working towards goals", "business"]
            ]
        },
        {
            question: "Which problem would you most like to solve?",
            answers: [
                ["Making technology better", "technology"],
                ["Protecting the environment", "environment"],
                ["Improving people's health", "healthcare"],
                ["Making businesses more successful", "business"]
            ]
        },
        {
            question: "What describes your personality best?",
            answers: [
                ["Curious and analytical", "science"],
                ["Imaginative and creative", "arts"],
                ["Caring and understanding", "healthcare"],
                ["Confident and ambitious", "business"]
            ]
        },
        {
            question: "Which activity sounds most exciting?",
            answers: [
                ["Coding or creating technology", "technology"],
                ["Designing and drawing", "arts"],
                ["Conducting experiments", "science"],
                ["Debating and presenting ideas", "law"]
            ]
        },
        {
            question: "What kind of workplace would you prefer?",
            answers: [
                ["A technology company", "technology"],
                ["A hospital or healthcare centre", "healthcare"],
                ["A research laboratory", "science"],
                ["A business or office environment", "business"]
            ]
        },
        {
            question: "What motivates you most?",
            answers: [
                ["Creating something innovative", "technology"],
                ["Making a positive difference", "healthcare"],
                ["Learning and discovering new things", "science"],
                ["Achieving goals and success", "business"]
            ]
        },
        {
            question: "Which skill would you most like to develop?",
            answers: [
                ["Programming and technical skills", "technology"],
                ["Creative and artistic skills", "arts"],
                ["Scientific and research skills", "science"],
                ["Communication and leadership", "business"]
            ]
        },
        {
            question: "If you could spend a day doing anything, what would it be?",
            answers: [
                ["Building a new piece of technology", "technology"],
                ["Creating a design or artwork", "arts"],
                ["Working with animals or nature", "environment"],
                ["Helping people in a community", "healthcare"]
            ]
        },
        {
            question: "Which challenge appeals to you?",
            answers: [
                ["Finding a solution to a complex problem", "technology"],
                ["Creating something original", "arts"],
                ["Understanding how the world works", "science"],
                ["Standing up for what is right", "law"]
            ]
        },
        {
            question: "What would you like your future career to involve?",
            answers: [
                ["Technology and innovation", "technology"],
                ["Design and creativity", "arts"],
                ["Science and discovery", "science"],
                ["Working with and helping people", "healthcare"]
            ]
        },
        {
            question: "Which statement sounds most like you?",
            answers: [
                ["I love figuring out how things work", "technology"],
                ["I enjoy expressing my ideas", "arts"],
                ["I care about the world around me", "environment"],
                ["I enjoy organising and taking responsibility", "business"]
            ]
        },
        {
            question: "What would make you feel proud of your future career?",
            answers: [
                ["Creating technology that changes lives", "technology"],
                ["Making something beautiful or inspiring", "arts"],
                ["Making discoveries that help society", "science"],
                ["Making a real difference to people's lives", "healthcare"]
            ]
        }
    ];

    let currentQuestion = 0;
    let answers = [];

    function getElement(id) {
        return document.getElementById(id);
    }

    function showQuizQuestion() {
        const question = questions[currentQuestion];

        getElement("quizQuestionNumber").textContent =
            `QUESTION ${currentQuestion + 1} OF ${questions.length}`;

        getElement("quizProgressText").textContent =
            `${Math.round(((currentQuestion + 1) / questions.length) * 100)}% complete`;

        getElement("quizProgressBar").style.width =
            `${((currentQuestion + 1) / questions.length) * 100}%`;

        getElement("quizQuestion").textContent = question.question;
        getElement("quizInstruction").textContent =
            "Choose the answer that best describes you.";

        const options = getElement("quizOptions");
        options.innerHTML = "";

        question.answers.forEach(([answer, category], index) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "quiz-answer";
            button.textContent = answer;

            if (answers[currentQuestion] === category) {
                button.classList.add("selected");
            }

            button.addEventListener("click", () => {
                answers[currentQuestion] = category;

                options.querySelectorAll(".quiz-answer").forEach(option => {
                    option.classList.remove("selected");
                });

                button.classList.add("selected");
                getElement("quizNext").disabled = false;
            });

            options.appendChild(button);
        });

        getElement("quizBack").disabled = currentQuestion === 0;
        getElement("quizNext").disabled = !answers[currentQuestion];

        getElement("quizNext").textContent =
            currentQuestion === questions.length - 1
                ? "See My Results"
                : "Next →";
    }

    function showResults() {
        getElement("quizTop").hidden = true;
        getElement("quizProgress").hidden = true;
        getElement("quizQuestionArea").hidden = true;
        getElement("quizNavigation").hidden = true;
        getElement("careerQuizResults").hidden = false;

        const scores = {};

        answers.forEach(category => {
            if (category) {
                scores[category] = (scores[category] || 0) + 1;
            }
        });

        const rankedCategories = Object.keys(scores).sort(
            (a, b) => scores[b] - scores[a]
        );

        const matches = getElement("careerMatches");
        matches.innerHTML = "";

        const careerCards = Array.from(
            document.querySelectorAll("#careers .cards .card")
        );

        let recommended = [];

        rankedCategories.forEach(category => {
            const matchingCards = careerCards.filter(card =>
                card.dataset.category === category
            );

            matchingCards.forEach(card => {
                if (!recommended.includes(card)) {
                    recommended.push(card);
                }
            });
        });

        recommended.slice(0, 5).forEach(card => {
            const resultCard = document.createElement("div");
            resultCard.className = "card";

            const heading = card.querySelector("h3");
            const description = card.querySelector("p");

            if (heading) {
                const title = document.createElement("h3");
                title.textContent = heading.textContent;
                resultCard.appendChild(title);
            }

            if (description) {
                const paragraph = document.createElement("p");
                paragraph.textContent = description.textContent;
                resultCard.appendChild(paragraph);
            }

            matches.appendChild(resultCard);
        });

        if (recommended.length === 0) {
            matches.textContent =
                "Explore the careers below to discover your interests.";
        }
    }

    function startQuiz() {
        currentQuestion = 0;
        answers = [];

        getElement("quizWelcome").hidden = true;
        getElement("quizTop").hidden = false;
        getElement("quizProgress").hidden = false;
        getElement("quizQuestionArea").hidden = false;
        getElement("quizNavigation").hidden = false;
        getElement("careerQuizResults").hidden = true;

        showQuizQuestion();
    }

    document.addEventListener("DOMContentLoaded", function () {
        const start = getElement("startQuiz");
        const next = getElement("quizNext");
        const back = getElement("quizBack");
        const restart = getElement("quizRestart");
        const explore = getElement("exploreAllCareers");

        if (start) start.addEventListener("click", startQuiz);

        if (next) {
            next.addEventListener("click", function () {
                if (!answers[currentQuestion]) return;

                if (currentQuestion < questions.length - 1) {
                    currentQuestion++;
                    showQuizQuestion();
                } else {
                    showResults();
                }
            });
        }

        if (back) {
            back.addEventListener("click", function () {
                if (currentQuestion > 0) {
                    currentQuestion--;
                    showQuizQuestion();
                }
            });
        }

        if (restart) restart.addEventListener("click", startQuiz);

        if (explore) {
            explore.addEventListener("click", function () {
                getElement("careers").scrollIntoView({
                    behavior: "smooth"
                });
            });
        }
    });

    window.showQuizQuestion = showQuizQuestion;
})();



// ==========================================
// CAREER PAGE - SEARCH AND FILTER FIX
// ==========================================

let activeCareerCategory = "all";

function filterCareers() {
    const searchInput = document.getElementById("careerSearch");
    const careerSection = document.getElementById("careers");

    if (!searchInput || !careerSection) return;

    const searchTerm = searchInput.value.toLowerCase().trim();

    const careerCards = careerSection.querySelectorAll(".cards .card");

    let visibleCount = 0;

    careerCards.forEach(card => {
        const category = card.dataset.category;
        const text = card.textContent.toLowerCase();

        const matchesSearch = text.includes(searchTerm);

        const matchesCategory =
            activeCareerCategory === "all" ||
            category === activeCareerCategory;

        const shouldShow = matchesSearch && matchesCategory;

        card.style.display = shouldShow ? "" : "none";

        if (shouldShow) {
            visibleCount++;
        }
    });

    const count = document.getElementById("careerCount");

    if (count) {
        count.textContent = `Showing ${visibleCount} careers`;
    }
}


// ==========================================
// CATEGORY FILTER BUTTONS
// ==========================================

function setCareerFilter(category, button) {
    activeCareerCategory = category;

    const buttons = document.querySelectorAll(
        "#careers .filter-btn"
    );

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    filterCareers();
}


// ==========================================
// INITIALISE CAREER SEARCH
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("careerSearch")) {
        filterCareers();
    }
});
