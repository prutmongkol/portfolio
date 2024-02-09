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

function SectionItem({ title, date, description, skills, link = null, image = null }) {
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
            <span className="material-symbols-outlined">north_east</span>
          </a>
        ) : (
          <h3>{title}</h3>
        )}
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
        skills="React • Tailwind CSS • daisyUI • Node.js • Express.js • MongoDB"
        link="https://frontend-jsd6-group-8.vercel.app/"
        image="/LogLife.png"
      />
    </>
  );
}

function SideProjects() {
  return (
    <>
      <h2 className="col-span-full">Side Projects</h2>

      <SectionItem
        title="React CRUD - One-day Project"
        date="Jan 2024"
        description="A one-day assessment project to build a CRUD app for Generation Thailand JSD6 coding bootcamp. Connecting with a pre-built API."
        skills="React"
        link="https://github.com/PrutMongkol/20-pete-career-changer-react-assessment"
      />

      <SectionItem
        title="Find Your Hat - One-day Project"
        date="Dec 2023"
        description="A one-day assessment project to build a terminal game for Generation Thailand JSD6 coding bootcamp."
        skills="JavaScript • Node.js"
        link="https://github.com/PrutMongkol/find-your-hat"
      />

      <SectionItem
        title="Colmar Academy - One-day Project"
        date="Nov 2023"
        description="A one-day assessment project to build a landing page for Generation Thailand JSD6 coding bootcamp."
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
        <SideProjects />
        <Contact />
      </main>
    </>
  );
}

export default App;
