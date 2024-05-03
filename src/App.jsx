/* eslint-disable react/prop-types */
import { useState } from "react";

function Avatar() {
    return (
        <img
            className="rounded-full place-self-center hover:animate-wiggle"
            src="/avatar.png"
            alt="Pete"
        />
    );
}

function About() {
    return (
        <div className="col-span-full">
            <h2 className="mb-0">About</h2>
            <p className="mt-0">
                Hey, I&apos;m Pete. I started my journey as a software engineer
                in 2023. I&apos;m keenly interested in back-end development.
                Powered by caffeine.
            </p>
            <p className="mt-0">One percent better everyday.</p>
        </div>
    );
}

function SectionItem({
    title,
    date,
    description,
    skills,
    link = null,
    image = null,
    github = null,
}) {
    return (
        <>
            <span className="col-span-full sm:col-span-1">{date}</span>
            <div className="col-span-full sm:col-span-1 flex flex-col mb-4 sm:mb-0">
                {image && <img className="w-12 h-12 mb-2" src={image} alt="" />}
                {link ? (
                    <a
                        className="col-span-full sm:col-span-1 mb-4 sm:mb-0"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {title}
                        <span className="material-symbols-outlined">
                            north_east
                        </span>
                    </a>
                ) : (
                    <h3>{title}</h3>
                )}
                <p>{description}</p>
                {github && (
                    <a href={github} target="_blank" rel="noreferrer">
                        GitHub
                        <span className="material-symbols-outlined">
                            north_east
                        </span>
                    </a>
                )}
                <span>{skills}</span>
            </div>
        </>
    );
}

function Experience() {
    return (
        <>
            <h2 className="col-span-full">Experience</h2>

            <SectionItem
                title="Junior Software Developer Bootcamp - Generation Thailand"
                date="Nov 2023 - Feb 2024"
                description="Developed technical skills in building web applications. Gained essential soft skills and mindsets, and learned about effective communication and agile methodologies."
                skills="React • Node.js • Express.js • MongoDB • CSS • Tailwind CSS • SQL"
            />

            <span className="col-span-full sm:col-span-1">
                Earlier Experience
            </span>
            <div className="col-span-full sm:col-span-1 flex flex-col mb-4 sm:mb-0">
                <p>
                    Over ten years of experience in translation (English
                    &lt;-&gt; Thai). Five years of experience in coal mining
                    industry, including logistics and corporate communications.
                </p>
            </div>
        </>
    );
}

function Certification() {
    return (
        <>
            <h2 className="col-span-full">Certification</h2>

            <SectionItem 
                title="Foundational C# with Microsoft"
                date="May 2024"
                description="From freecodecamp.org and Microsoft"
                skills="C#"
                link="https://www.freecodecamp.org/certification/Elfaron/foundational-c-sharp-with-microsoft"
            />

            <SectionItem 
                title="Junior Software Developer Program (Cohort 6)"
                date="Feb 2024"
                description="A 15-week full-time bootcamp, supported by The Ministry of Higher Education,
                Science, Research and Innovation, Microsoft Thailand and Bank of America Foundation"
                skills="HTML • CSS • JavaScript • React • Node.js • Express.js • MongoDB • SQL"
            />
        </>
    )
}

function Projects() {
    return (
        <>
            <h2 className="col-span-full">Group Projects</h2>

            <SectionItem
                title="LogLife - Bootcamp Project"
                date="Jan - Feb 2024"
                description="An exercise tracking web app aimed at beginners with no smartwatches"
                skills="React • Tailwind CSS • daisyUI • Node.js • Express.js • MongoDB"
                link="https://loglife.guru/"
                image="/LogLife.png"
                github={"https://github.com/JSD6G8/frontend"}
            />
        </>
    );
}

function SideProjects() {
    return (
        <>
            <h2 className="col-span-full">Side Projects</h2>

            <SectionItem
                title="Static Site Generator"
                date="May 2024"
                description="A mini-project converting markdown files to HTML."
                skills="python"
                link="https://github.com/prutmongkol/static-site-gen"
            />

            <SectionItem 
                title="LogLife - .NET Backend"
                date="Apr 2024"
                description="Lite version of LogLife backend with .NET Core"
                skills=".NET Core • C#"
                link="https://github.com/prutmongkol/loglife-dotnet-backend"
            />

            <SectionItem
                title="LogLife - Angular Frontend"
                date="Apr 2024"
                description="Lite version of LogLife frontend with Angular framework"
                skills="Angular • TypeScript • Tailwind CSS"
                link="https://loglife-angular-frontend.vercel.app/"
                github="https://github.com/prutmongkol/loglife-angular-frontend"
            />

            <SectionItem
                title="React CRUD - One-day Project"
                date="Jan 2024"
                description="A one-day assessment project to build a CRUD app, connecting with a pre-built API. For Generation Thailand JSD6 coding bootcamp."
                skills="React • Tailwind CSS"
                link="https://github.com/PrutMongkol/20-pete-career-changer-react-assessment"
            />

            <SectionItem
                title="Find Your Hat - One-day Project"
                date="Dec 2023"
                description="A one-day assessment project to build a terminal game. For Generation Thailand JSD6 coding bootcamp."
                skills="JavaScript • Node.js"
                link="https://github.com/PrutMongkol/find-your-hat"
            />

            <SectionItem
                title="Colmar Academy - One-day Project"
                date="Nov 2023"
                description="A one-day assessment project to build a landing page. For Generation Thailand JSD6 coding bootcamp."
                skills="HTML • Vanilla CSS"
                link="https://github.com/PrutMongkol/20-pete-colmar"
            />
        </>
    );
}

function Contact() {
    return (
        <>
            <h2 className="col-span-full">Contact</h2>

            <span className="col-span-full sm:col-span-1">GitHub</span>
            <a
                className="col-span-full sm:col-span-1 mb-4 sm:mb-0"
                href="https://github.com/PrutMongkol"
                target="_blank"
                rel="noreferrer"
            >
                github.com/PrutMongkol
                <span className="material-symbols-outlined">north_east</span>
            </a>

            <span className="col-span-full sm:col-span-1">LinkedIn</span>
            <a
                className="col-span-full sm:col-span-1 mb-4 sm:mb-0"
                href="https://www.linkedin.com/in/prut-mongkol/"
                target="_blank"
                rel="noreferrer"
            >
                linkedin.com/in/prut-mongkol
                <span className="material-symbols-outlined">north_east</span>
            </a>
        </>
    );
}

function App() {
    const [theme, setTheme] = useState("dark_mode");

    const handleThemeChange = () => {
        const html = document.querySelector("html");
        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            setTheme("light_mode");
        } else {
            html.classList.add("dark");
            setTheme("dark_mode");
        }
    };
    return (
        <>
            <main className="max-w-xl mx-auto px-4 py-6 sm:py-20 grid grid-cols-[150px_1fr] sm:gap-4">
                <button
                    className="material-symbols-outlined col-span-2 place-self-end sticky top-5 select-none hover:animate-wiggle"
                    style={{ fontSize: "2rem" }}
                    onClick={handleThemeChange}
                >
                    {theme}
                </button>
                <Avatar />
                <div className="flex flex-col justify-center">
                    <h1>Prut Mongkol (Pete)</h1>
                    <p>Software Engineer</p>
                </div>

                <About />
                <Experience />
                <Certification />
                <Projects />
                <SideProjects />
                <Contact />
            </main>
        </>
    );
}

export default App;
