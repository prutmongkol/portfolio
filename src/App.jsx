/* eslint-disable react/prop-types */
import "./App.css";

function Avatar() {
  return (
    <img
      className="rounded-full transition duration-500 ease-in-out hover:scale-110 place-self-center"
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
        Hey, I&apos;m Pete. I started my journey as a software engineer in 2023.
        Craving learning and focused on developing impactful experiences that
        constantly improve based on user feedback. One percent better everyday.
      </p>
    </div>
  );
}

function SectionItem({ title, date, description, skills }) {
  return (
    <>
      <span className="col-span-full sm:col-span-1">{date}</span>
      <div className="col-span-full sm:col-span-1 flex flex-col mb-4 sm:mb-0">
        <h3>{title}</h3>
        <p>{description}</p>
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

      <span className="col-span-full sm:col-span-1">Earlier Experience</span>
      <div className="col-span-full sm:col-span-1 flex flex-col mb-4 sm:mb-0">
        <p>
          Over ten years of experience in translation (English &lt;-&gt; Thai).
          Five years of experience in coal mining industry, including logistics
          and corporate communications.
        </p>
      </div>
    </>
  );
}

function Projects() {
  return (
    <>
      <h2 className="col-span-full">Projects</h2>

      <SectionItem
        title="Practice Buddy"
        date="Ongoing"
        description="A web app designed for musicians to keep track of their repertoire"
        skills="TS • MUI • React • Node.js • Express.js • MongoDB"
      />
      
      <SectionItem
        title="LogLife - Bootcamp Project"
        date="Jan - Feb 2024"
        description="An exercise tracking web app aimed at beginners with no smartwatches"
        skills="Tailwind CSS • React • Node.js • Express.js • MongoDB"
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
  return (
    <>
      <main className="max-w-xl mx-auto px-4 py-6 sm:py-20 grid grid-cols-[150px_1fr] sm:gap-4">
        <Avatar />
        <div className="flex flex-col justify-center">
          <h1>Prut Mongkol (Pete)</h1>
          <p>Software Engineer</p>
        </div>

        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
