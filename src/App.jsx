import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <main className="max-w-xl mx-auto px-4 py-8 grid grid-cols-[150px_1fr] gap-4">
        <img
          className="rounded-full transition duration-500 ease-in-out hover:scale-110 place-self-center"
          src="/avatar.png"
          alt="Pete"
        />
        <div className="flex flex-col justify-center">
          <h1>Prut Mongkol (Pete)</h1>
          <p>Software Engineer</p>
        </div>

        <h2 className="col-span-full">About</h2>
        <p className="col-span-full">
          Hey, I&apos;m Pete. I started my journey as a software engineer in
          2023. Craving learning and focused on developing impactful experiences
          that constantly improve based on user feedback. One percent better
          everyday.
        </p>

        <h2 className="col-span-full">Experience</h2>

        <p>Nov 2023 - Feb 2024</p>
        <div className="flex flex-col">
          <h3>Junior Software Developer Bootcamp - Generation Thailand</h3>
          <p>
            Developed technical skills in building web applications. Gained
            essential soft skills and mindsets, and learned about effective
            communication and agile methodologies.
          </p>
          <p>
            React • Node.js • Express.js • MongoDB • CSS • Tailwind CSS • SQL
          </p>
        </div>

        <p>Earlier Experience</p>
        <div className="flex flex-col">
          <p>
            Over ten years of experience in translation (English &lt;-&gt; Thai)
          </p>
          <p>
            Five years of experience in coal mining industry, including
            logistics and corporate communications.
          </p>
        </div>

        <h2 className="col-span-full">Projects</h2>

        <p>Ongoing</p>
        <div className="flex flex-col">
          <h3>Practice Buddy</h3>
          <p>
            A web app designed for musicians to keep track of their repertoire.
          </p>
          <p>MUI • React • Node.js • Express.js • MongoDB</p>
        </div>

        <p>Jan - Feb 2024</p>
        <div className="flex flex-col">
          <h3>LogLife - Bootcamp Project</h3>
          <p>
            An exercise tracking web app aimed at beginners with no smartwatches
          </p>
          <p>Tailwind CSS • React • Node.js • Express.js • MongoDB</p>
        </div>

        <h2 className="col-span-full">Contact</h2>

        <p>GitHub</p>
        <p>
          <a href="https://github.com/PrutMongkol">github.com/PrutMongkol</a>
        </p>

        <p>LinkedIn</p>
        <p>
          <a href="https://www.linkedin.com/in/prut-mongkol/">
            linkedin.com/in/prut-mongkol
          </a>
        </p>
      </main>
    </>
  );
}

export default App;
