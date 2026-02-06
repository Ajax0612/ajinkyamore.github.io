import Section from "./Section";
import { motion } from "framer-motion";
import { Briefcase, BarChart3, Building2 } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const highlights = [
  {
    icon: <Briefcase className="text-indigo-600" />,
    value: 10,
    suffix: "+",
    label: "Years Experience",
    description: "Performance & Automation Engineering",
  },
  {
    icon: <BarChart3 className="text-indigo-600" />,
    value: 12,
    suffix: "+",
    label: "Projects Delivered",
    description: "Automation & Performance Initiatives",
  },
  {
    icon: <Building2 className="text-indigo-600" />,
    value: 5,
    suffix: "",
    label: "Companies Worked",
    description: "Enterprise & Product-based",
  },
];

export default function About() {
  return (
    <Section id="about" bg="bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-6">
        Highlights
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-20">
        A snapshot of my professional journey, impact, and experience
        across performance engineering and test automation.
      </p>

      <div className="grid md:grid-cols-3 gap-12">
        {highlights.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="
              bg-white rounded-2xl p-10 text-center
              shadow-[var(--shadow)]
              border border-transparent
              hover:border-amber-300/50
              transition
            "
          >
            {/* ICON */}
            <div
              className="
                w-14 h-14 mx-auto mb-6 rounded-xl
                flex items-center justify-center
                bg-amber-200/30
              "
            >
              {item.icon}
            </div>

            {/* NUMBER */}
            <h3 className="text-4xl font-bold text-gray-900 mb-2">
              <AnimatedCounter value={item.value} />
              {item.suffix}
            </h3>

            {/* LABEL */}
            <p className="font-semibold text-gray-800">
              {item.label}
            </p>

            {/* MICRO COPY */}
            <p className="text-sm text-gray-500 mt-2">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
