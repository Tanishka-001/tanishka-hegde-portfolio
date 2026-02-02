import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
    { name: "HTML", level: 80, category: "frontend" },
    { name: "CSS", level: 80, category: "frontend" },
    { name: "JavaScript", level: 75, category: "frontend" },
    { name: "BootStrap", level: 75, category: "frontend" },

    // Programming Languages
    { name: "Python", level: 92, category: "languages" },
    { name: "SQL", level: 85, category: "languages" },
    { name: "Java", level: 70, category: "languages" },
    { name: "R", level: 80, category: "languages" },

  // Data Science/ML
    { name: "Machine Learning", level: 75, category: "datascience" },
    { name: "Deep Learning", level: 75, category: "datascience" },
    { name: "Artificial Neural Network", level: 75, category: "datascience" }, 

  // Libraries
    { name: "Pandas", level: 90, category: "libraries" },
    { name: "NumPy", level: 90, category: "libraries" },
    { name: "Scikit-learn", level: 85, category: "libraries" },

// Databases
{ name: "PostgreSQL", level: 80, category: "databases" },
{ name: "MySQL", level: 80, category: "databases" },

// Version Control
    { name: "GitHub", level: 90, category: "versioncontrol" },
    { name: "Git", level: 85, category: "versioncontrol" },

// IDEs
    { name: "VS Code", level: 95, category: "IDE" },
    { name: "Colab", level: 95, category: "IDE" },
    { name: "Jupyter Notebook", level: 95, category: "IDE" },

// Visualization (NEW - Power BI + Matplotlib belong here)
{ name: "Power BI", level: 80, category: "visualization" },
{ name: "Matplotlib", level: 85, category: "visualization" },
];

const categories = ["all", "frontend", "languages", "datascience", "libraries", "visualization", "databases", "versioncontrol", "IDE"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
);

    return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, key) => (
            <button
            key={key}
            onClick={() => setActiveCategory(category)}
            className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondary"
            )}
            >
            {category}
            </button>
        ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, key) => (
            <div
            key={key}
            className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
            <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                style={{ width: skill.level + "%" }}
                />
            </div>
            <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                {skill.level}%
                </span>
            </div>
            </div>
        ))}
        </div>
    </div>
    </section>
);
};