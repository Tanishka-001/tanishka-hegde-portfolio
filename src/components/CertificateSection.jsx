import { BookOpen, Send } from "lucide-react";

export const CertificateSection = () => {
return (
    <section id="certificate" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary">Certificates</span>
        </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                
        {/* Certificate 1: HackerRank */}
                    <div className="gradient-border p-5 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                <BookOpen className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">HackerRank Certification</h4>
                                <p className="text-muted-foreground text-xs">HackerRank | 27/03/2026</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Demonstrated proficiency in problem-solving and coding skills through HackerRank challenges.
                                </p>
                                <a
                                    href="https://www.hackerrank.com/certificates/c85c76e21763"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-block text-primary hover:underline text-sm"
                                >
                                    View Certificate
                                </a>
                            </div>
                        </div>
                </div>
                
          {/* Certificate 2 */}
        <div className="gradient-border p-5 card-hover">
            <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10 shrink-0">
                <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
                <h4 className="font-semibold text-lg">Azure Fundamentals: Cloud Computing</h4>
                <p className="text-muted-foreground text-xs">Skillsoft | 12/03/2026</p>
                <p className="text-sm text-muted-foreground mt-2">
                Foundational knowledge of cloud services, deployment models, and Azure infrastructure.
                </p>
                <a
                href="https://skillsoft.digitalbadges.skillsoft.com/44e6fef2-9c57-4c25-9c82-10a70f1e110f#acc.zkpZTjSJ"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-primary hover:underline text-sm"
                >
                View Certificate
                </a>
            </div>
            </div>
        </div>

        {/* Certificate 3*/}
        <div className="gradient-border p-5 card-hover">
            <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10 shrink-0">
                <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
                <h4 className="font-semibold text-lg">Deloitte – Data Analytics Job Simulation</h4>
                <p className="text-muted-foreground text-xs">Forage | 02/02/2026</p>
                <p className="text-sm text-muted-foreground mt-2">
                Simulated end-to-end data analytics workflow and client advisory tasks.
                </p>
                <a
                href="https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_gjngsebQ2ARzv6F8C_1770055097099_completion_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-primary hover:underline text-sm"
                >
                View Certificate
                </a>
            </div>
            </div>
        </div>

          {/* Certificate 4 */}
        <div className="gradient-border p-5 card-hover">
            <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10 shrink-0">
                <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
                <h4 className="font-semibold text-lg">Machine Learning with Python</h4>
                <p className="text-muted-foreground text-xs">IBM | 08/01/2025</p>
                <p className="text-sm text-muted-foreground mt-2">
                    Skills in Python, supervised & unsupervised learning, regression, classification, decision trees, and applied ML.
                </p>
                <a
                    href="https://www.coursera.org/account/accomplishments/certificate/PZF8C4WXZVLW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-primary hover:underline text-sm"
                >
                View Certificate
                </a>
            </div>
            </div>
            </div>
                

                {/* Certificate 4*/}
<div className="gradient-border p-5 card-hover">
    <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10 shrink-0">
            <BookOpen className="h-6 w-6 text-primary" />
        </div>
        <div>
            <h4 className="font-semibold text-lg">
                Data Analytics Internship – CSRBOX 
            </h4>
            <p className="text-muted-foreground text-xs"> IBM SkillBuild | 24/06/2024 – 05/08/2024</p>
            <p className="text-sm text-muted-foreground mt-2">
                Completed end-to-end data analysis including data cleaning, visualization, and insights reporting aligned with UN SDGs.
            </p>
            <a
                href="/CSR BOX/IBM_Data_Analytics_Internship.pdf" // <-- your PDF in public/CV/
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-primary hover:underline text-sm"
            >
                View Certificate
            </a>
        </div>
    </div>
    </div>
            


        </div>
    </div>
    </section>
);
};