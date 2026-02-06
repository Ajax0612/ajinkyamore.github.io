import { useState } from "react";
import Section from "./Section";
import ProjectModal from "./ProjectModal";
import { projects, type Project } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <Section id="projects">
      <h2 className="text-4xl font-bold text-center mb-20">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -6 }}
            className="
              group bg-white rounded-2xl p-8
              shadow-[var(--shadow)]
              flex flex-col justify-between
              transition
            "
          >
            {/* CONTENT */}
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {project.shortDesc}
              </p>

              {/* Tech preview */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-gray-100 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* BUTTON (BOTTOM) */}
            <div className="mt-auto pt-4">
              <button
                onClick={() => setActiveProject(project)}
                className="
                 w-full text-center
    py-2 rounded-lg
    text-sm font-semibold
    text-gray-900
    bg-amber-300/80
    hover:bg-amber-400
    transition
    shadow-sm
    opacity-100 md:opacity-0 md:group-hover:opacity-100
                "
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </Section>
  );
}
