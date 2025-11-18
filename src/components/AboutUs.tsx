import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Users, Award, TrendingUp, Target } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "5+",
    label: "Years of Expertise",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    value: "200+",
    label: "Campaigns Delivered",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    value: "50+",
    label: "Trusted Clients",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: TrendingUp,
    value: "1M+",
    label: "Audiences Reached",
    color: "from-emerald-500 to-teal-500",
  },
];

export function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 tracking-wider uppercase text-sm">
            About Us
          </span>
          <h2 className="text-5xl md:text-6xl text-slate-900 mt-4 mb-8">
            Who We Are
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Mother Superior Media is a results-focused digital branding and
            social media marketing agency. We blend creativity, design,
            strategy, and analytics to help brands build a powerful voice
            online. From startups to enterprises, we craft campaigns that
            connect, engage, and scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
