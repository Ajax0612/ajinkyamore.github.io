import { motion } from "framer-motion";
import Section from "./Section";
import profilePic from "../assets/profile.jpg";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Home() {

 const { displayed: typedName, done } = useTypewriter("Ajinkya More", 120);
  return (
    <Section id="home">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 mb-4 font-semibold">
  Senior Performance & Test Automation Engineer
</p>

        <h1 className="text-5xl font-bold mb-6">
  Hey I’m{" "}
  <span className="text-indigo-600">
    {typedName}
    {!done && <span className="animate-pulse">|</span>}
  </span>
</h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Senior Performance & Test Automation Engineer with 10+ years of experience in designing,
           implementing, and optimizing performance and automation testing frameworks across microservices
           and monolithic architectures. Passionate about integrating testing into CI/CD pipelines and
          applying AI-driven tools{" "}
  <span className="font-semibold text-gray-800">
    (ChatGPT, Cursor.AI, GitHub Copilot)
  </span>{" "}
  for test case generation, predictive monitoring, and performance analytics.
</p>


          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-indigo-600 text-white px-8 py-3 rounded-full shadow"
            >
              View Projects
            </a>
            <a
  href="Resume.pdf"
  download
  className="border px-8 py-3 rounded-full"
>
  Download CV
</a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={profilePic}
            alt="Ajinkya More"
            className="
              w-72 h-72 object-cover rounded-full
              shadow-[var(--shadow)]
              border-4 border-white
            "
          />
        </motion.div>

      </div>
    </Section>
  );
}
