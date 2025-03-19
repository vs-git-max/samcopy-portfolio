import React from "react";

const About = () => {
  const frontEndSkills = [
    "React",
    "Javascript",
    "Typescript",
    "TailwindCSS",
    "HTML",
    "CSS",
  ];

  const backendSkills = ["Node", "Python", "Express", "Django", "MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex align-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
          About Me
        </h2>

        <div className=" border border-white/10 rounded-xl hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6 text-center mt-1">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontEndSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="cursor-pointer bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 📚 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>
                <strong>B.Tech Electrical and Electronics Engineering</strong> -
                Technical University of Kenya (2022 - 2026)
              </li>

              <li>Relevan Coursework: Web Development, Data Structures</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">Web Developer - Freelanser </h4>
                <p>Developer and maintained microservises for clients.</p>
              </div>
              <div>
                <h4 className="font-semibold">Intern at Safaricom Company </h4>
                <p>
                  Worked with the Safaricom team to develop and maintain their
                  frontend services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
