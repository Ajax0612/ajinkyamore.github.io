import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../data/projects";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white max-w-2xl w-full rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-6">
              {project.description}
            </p>

            <h4 className="font-semibold mb-2">Key Contributions</h4>
            <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-1">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 justify-end">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 border rounded-lg"
                >
                  GitHub
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2 bg-indigo-600 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
