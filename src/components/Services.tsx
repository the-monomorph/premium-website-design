import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  MessageSquare,
  Video,
  BarChart3,
  Palette,
  LineChart,
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Social Media Management",
    description:
      "Crafting engaging posts, daily interactions, and long-term brand growth strategies.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Video,
    title: "Content Creation & Reels",
    description:
      "Premium design, video editing, motion graphics, and storytelling that stands out.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description:
      "Targeted ads on Meta, Google, and YouTube to maximize leads and conversions.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Palette,
    title: "Branding & Creative Direction",
    description:
      "Brand identity, logo creation, moodboards, brand guidelines, and storytelling.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: LineChart,
    title: "Digital Strategy & Analytics",
    description:
      "Data-driven insights, audience behavior tracking, and campaign optimization.",
    color: "from-violet-500 to-purple-500",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-purple-600 tracking-wider uppercase text-sm">
            Our Services
          </span>
          <h2 className="text-5xl md:text-6xl text-slate-900 mt-4">
            What We Do Best
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
              >
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
