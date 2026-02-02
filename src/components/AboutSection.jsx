import { Briefcase, Code, BarChart, BookOpen, Send } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Education + Skills */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold"> Education </h3>

                        {/* Education Card */}
                        <div className="gradient-border p-5 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <BookOpen className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="text-left">
                                            <h4 className="font-semibold text-lg leading-snug">
                                                <a href="https://www.gitam.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                                    GITAM Deemed to be University, Hyderabad
                                                </a>
                                            </h4>
                                            <p className="text-sm text-muted-foreground font-medium mt-1">
                                                Bachelor of Technology in Computer Science (Data Science)
                                            </p>
                                        </div>
                                        <div className="text-right text-xs text-muted-foreground whitespace-nowrap">
                                            <p>Jun 2021 – Apr 2025</p>
                                            <p className="font-medium">CGPA: 7.58</p>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-left">
                                        <p className="text-xs font-bold mb-1">Key Coursework:</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Programming, DSA, DBMS, Computer Networks, Deep Learning, Big Data Analytics.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Data Analysis */}
                        <div className="gradient-border p-5 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Data Analysis</h4>
                                    <p className="text-sm text-muted-foreground">Statistical and computational analysis to extract insights.</p>
                                </div>
                            </div>
                        </div>

                        {/* Data Visualization */}
                        <div className="gradient-border p-5 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <BarChart className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Data Visualization</h4>
                                    <p className="text-sm text-muted-foreground">Dashboards and storytelling for effective interpretation.</p>
                                </div>
                            </div>
                        </div>

                        {/* Projects & Internships */}
                        <div className="gradient-border p-5 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Projects & Internships</h4>
                                    <p className="text-sm text-muted-foreground">Hands-on experience with Python, SQL, Power BI, and analytics.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Work Experience */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold"> Work Experience </h3>

                        <div className="gradient-border p-5 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Data Analytics Intern – CSRBOX</h4>
                                    <p className="text-muted-foreground text-xs">Jun 2024 – Aug 2024</p>
                                    <p className="text-muted-foreground mt-2 text-sm">Led team coordination as SPOC and analyzed gender inequality datasets.</p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-5 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Data Analytics Trainee – Exel Rubber</h4>
                                    <p className="text-muted-foreground text-xs">May 2024 – Jul 2024</p>
                                    <p className="text-muted-foreground mt-2 text-sm">Conducted SQL analysis and built Power BI dashboards.</p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-5 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Python Intern – Oasis Infobyte</h4>
                                    <p className="text-muted-foreground text-xs">Mar 2024 – Apr 2024</p>
                                    <p className="text-muted-foreground mt-2 text-sm">Developed Python applications and integrated external APIs.</p>
                                </div>
                            </div>
                        </div>

                        {/* CENTERED BUTTONS: Changed to justify-center */}
                        <div className="flex justify-center gap-4 pt-4">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a 
                                href="/Tanishka_Hegde_CV.pdf" 
                                target="_blank" 
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors text-sm font-medium"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};