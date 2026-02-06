import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import { skillCategories } from "../data/skills";
import AnimatedCounter from "./AnimatedCounter";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const activeSkills = skillCategories[activeCategory].skills;

  return (
    <Section id="skills" bg="bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10">
        Skillset
      </h2>

      {/* CATEGORY COUNTER */}
      <div className="text-center mb-10">
        <p className="text-gray-500">
          {skillCategories[activeCategory].title} ·{" "}
          <span className="font-semibold text-indigo-600">
            <AnimatedCounter value={activeSkills.length} /> skills
          </span>
        </p>
      </div>

      {/* CATEGORY TABS */}
      <div className="flex justify-center gap-6 mb-16 flex-wrap">
        {skillCategories.map((cat, index) => (
          <button
            key={cat.title}
            onClick={() => setActiveCategory(index)}
            className={`
              px-6 py-2 rounded-full font-medium transition
              ${
                activeCategory === index
                  ? "bg-indigo-600 text-white shadow"
                  : "bg-white text-gray-700 hover:bg-indigo-50"
              }
            `}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* SKILL CARDS */}
      <AnimatePresence mode="wait">
        <motion.div
          key={skillCategories[activeCategory].title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12"
        >
          {activeSkills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -10 }}
              className="
                group bg-white rounded-2xl p-8 text-center
                shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                border border-transparent
                hover:border-indigo-500/40
                hover:shadow-[0_30px_60px_rgba(79,70,229,0.15)]
                transition
              "
            >
              <div
                className="
                  w-20 h-20 mx-auto mb-6 rounded-xl
                  flex items-center justify-center
                  bg-gray-50 group-hover:bg-indigo-50 transition
                "
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <p className="font-semibold text-gray-800 tracking-wide">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
