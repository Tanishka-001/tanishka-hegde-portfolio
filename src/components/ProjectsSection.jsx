import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Bankruptcy Prediction using Neural Network",
        description:"Implemented a neural network from scratch to predict company bankruptcy using a real-world dataset, addressing class imbalance with SMOTE.",
        image: "/projects/project1.png",
        tags: ["Python", "Machine Learning", "Neural Networks"],
        demoUrl: "#",
        githubUrl:"https://github.com/Tanishka-001/bankruptcy-prediction-neural-network-from-scratch",
    },

    {
    id: 2,
    title: "Breast Cancer Detection using CNN",
    description:"Developed a CNN-based image classification model to detect invasive ductal carcinoma from histopathology images, achieving strong recall.",
    image: "/projects/project2.png",
    tags: ["Python", "Deep Learning", "CNN"],
    demoUrl: "#",
    githubUrl:"https://github.com/Tanishka-001/Breast-Cancer-Detection-Using-CNN",
    },

    {
    id: 3,
    title: "Data Quality & KPI Monitoring System",
    description:"Built a data quality and business KPI monitoring system using SQL, Python, and Power BI to track metrics and identify anomalies in datasets.",
    image: "/projects/project3.png",
    tags: ["Python", "SQL", "Power BI"],
    demoUrl: "#",
    githubUrl: "https://github.com/Tanishka-001/data-quality-kpi-monitoring-system",
    },
    
    {
    id: 4,
    title: "Spotify Data Analysis Using R",
    description:"Performed exploratory data analysis and visualization on Spotify music data to identify trends and patterns in listening behavior.",
    image: "/projects/project4.png",
    tags: ["R", "EDA", "Data Visualization"],
    demoUrl: "#",
    githubUrl: "https://github.com/Tanishka-001/spotify-data-analysis-using-R",
    },

    {
    id: 5,
    title: "Telco Churn Analysis using Survival Models",
    description:"Analyzed telecom customer churn data using survival analysis techniques to study retention patterns and customer lifetime behavior.",
    image: "/projects/project5.jpg",
    tags: ["Python", "Statistics", "Survival Analysis"],
    demoUrl: "#",
    githubUrl:"https://github.com/Tanishka-001/telco_churn_survival_analysis",
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully
                crafted with attention to detail and performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
            <div
            key={key}
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
            <div className="h-48 overflow-hidden">
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                    </span>
                ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                {project.description}
                </p>
                <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                    <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                    <ExternalLink size={20} />
                    </a>
                    
                    <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    
                    >
                    <Github size={20} />
                    </a>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>

        <div className="text-center mt-12">
        <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Tanishka-001"
        >
            Check My Github <ArrowRight size={16} />
        </a>
        </div>
        </div>
    </section>
    );
};