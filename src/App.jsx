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
    <>
      <h2 className="col-span-full">About</h2>
      <p className="col-span-full">
        Hey, I&apos;m Pete. I started my journey as a software engineer in
        2023. Craving learning and focused on developing impactful experiences
        that constantly improve based on user feedback. One percent better
        everyday.
      </p>
    </>
  );
}

function Experience() {
  return (
    <>
      <h2 className="col-span-full">Experience</h2>

      <span className="col-span-full sm:col-span-1">Nov 2023 - Feb 2024</span>
      <div className="col-span-full sm:col-span-1 flex flex-col mb-4 sm:mb-0">
        <h3>Junior Software Developer Bootcamp - Generation Thailand</h3>
        <p>
          Developed technical skills in building web applications. Gained
          essential soft skills and mindsets, and learned about effective
          communication and agile methodologies.
        </p>
        <span>
          React • Node.js • Express.js • MongoDB • CSS • Tailwind CSS • SQL
        </span>
      </div>

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

      <span className="col-span-full sm:col-span-1">Ongoing</span>
      <div className="col-span-full sm:col-span-1 flex flex-col mb-4 sm:mb-0">
        <h3>Practice Buddy</h3>
        <p>A web app designed for musicians to keep track of their repertoire</p>
        <span>MUI • React • Node.js • Express.js • MongoDB</span>
      </div>

      <span className="col-span-full sm:col-span-1">Jan - Feb 2024</span>
      <div className="col-span-full sm:col-span-1 flex flex-col mb-4 sm:mb-0">
        <h3>LogLife - Bootcamp Project</h3>
        <p>
          An exercise tracking web app aimed at beginners with no smartwatches
        </p>
        <span>Tailwind CSS • React • Node.js • Express.js • MongoDB</span>
      </div>
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
      >
        github.com/PrutMongkol
        <span className="material-symbols-outlined">north_east</span>
      </a>

      <span className="col-span-full sm:col-span-1">LinkedIn</span>
      <a
        className="col-span-full sm:col-span-1 mb-4 sm:mb-0"
        href="https://www.linkedin.com/in/prut-mongkol/"
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
      <main className="max-w-xl mx-auto px-4 py-8 grid grid-cols-[150px_1fr] sm:gap-4">
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
