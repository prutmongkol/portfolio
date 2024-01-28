import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <div>
          <img
            src="/avatar.png"
            alt="Pete"
          />
          <h1>Prut Mongkol (Pete)</h1>
          <p>Software Engineer</p>
        </div>

        <h2>About</h2>
        <p>
          Hey, I&apos;m Pete. I started my journey as a software engineer in
          2023. Craving learning and focused on developing impactful experiences
          that constantly improve based on user feedback. One percent better
          everyday.
        </p>

        <h2>Experience</h2>
        <article>
          <h3>Junior Software Developer Bootcamp - Generation Thailand</h3>
          <p>Nov 2023 - Feb 2024</p>
          <p>
            Developed technical skills in building web applications. Gained
            essential soft skills and mindsets, and learned about effective
            communication and agile methodologies.
          </p>
          <p>
            React • Node.js • Express.js • MongoDB • CSS • Tailwind CSS • SQL
          </p>
        </article>
        <article>
          <h3>Earlier Experience</h3>
          <p>
            Over ten years of experience in translation (English &lt;-&gt; Thai)
            <p>
              Five years of experience in coal mining industry, including
              logistics and corporate communications.
            </p>
          </p>
        </article>

        <h2>Projects</h2>
        <article>
          <h3>LogLife - Bootcamp Project (Jan - Feb 2024)</h3>
          <p>
            An exercise tracking web app aimed at beginners with no smartwatches
          </p>
          <p>Tailwind CSS • React • Node.js • Express.js • MongoDB</p>
        </article>
        <article>
          <h3>Practice Buddy (Ongoing)</h3>
          <p>
            A web app designed for musicians to keep track of their repertoire.
          </p>
          <p>MUI • React • Node.js • Express.js • MongoDB</p>
        </article>

        <h2>Contact</h2>
        <p>
          <a href="https://github.com/PrutMongkol">GitHub</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/prut-mongkol/">LinkedIn</a>
        </p>
      </main>
    </>
  );
}

export default App;
