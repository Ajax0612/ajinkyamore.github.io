import Section from "./Section";
import { education } from "../data/education";
import { experience } from "../data/experience";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Qualification() {
  return (
    <Section id="qualification" bg="bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-20">
        Qualification
      </h2>

      <div className="grid md:grid-cols-2 gap-20">

        {/* EDUCATION */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-10">
            <GraduationCap className="text-indigo-600" />
            Education
          </h3>

          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 h-full w-[2px] bg-indigo-200" />

            <div className="space-y-10">
              {education.map((e, index) => (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative"
                >
                  {/* Dot */}
                  <span className="absolute -left-[6px] top-4 w-3 h-3 rounded-full bg-indigo-600" />

                  {/* Card */}
                  <div className="bg-white p-6 rounded-xl shadow-[var(--shadow)]">
                    <h4 className="font-semibold">{e.title}</h4>
                    <p className="text-sm text-gray-500">{e.place}</p>
                    <p className="text-sm font-medium mt-1">{e.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-10">
            <Briefcase className="text-indigo-600" />
            Experience
          </h3>

          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 h-full w-[2px] bg-indigo-200" />

            <div className="space-y-10">
              {experience.map((e, index) => (
                <motion.div
                  key={e.role}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative"
                >
                  {/* Dot */}
                  <span className="absolute -left-[6px] top-4 w-3 h-3 rounded-full bg-indigo-600" />

                  {/* Card */}
                  <div className="bg-white p-6 rounded-xl shadow-[var(--shadow)]">
                    <h4 className="font-semibold">{e.role}</h4>
                    <p className="text-sm text-gray-500">{e.company}</p>
                    <p className="text-sm font-medium mt-1">{e.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
