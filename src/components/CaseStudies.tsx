import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const caseStudies = [
  {
    id: "asmakam",
    title: "Asmakam Ayurveda Hospital",
    description:
      "Rebranding their digital presence with modern Ayurveda visuals, high-performing reels, and an improved engagement strategy.",
    image: "public/Tier list.png",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "truassist",
    title: "TruAssist Tech",
    description:
      "Showcasing mobility-assist wheelchair technology with emotional storytelling and powerful themed visual design.",
    image: "https://images.unsplash.com/photo-1706700373769-de65812e7b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd2hlZWxjaGFpcnxlbnwxfHx8fDE3NjM0NjIxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "mothersuperiormedia",
    title: "Mother Superior Media (Internal Branding)",
    description:
      "Building a signature brand voice, reel style, and trending content strategy that improved brand recall.",
    image: "https://images.unsplash.com/photo-1666698809123-44e998e93f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMG9mZmljZXxlbnwxfHx8fDE3NjMzNjMxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "businessfortune",
    title: "Business Fortune Magazine",
    description:
      "Designing premium magazine layouts, editorials, and digital assets that elevated reader experience.",
    image: "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhemluZSUyMGVkaXRvcmlhbCUyMGRlc2lnbnxlbnwxfHx8fDE3NjMzOTg0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-orange-500 to-red-500",
  },
];

interface CaseStudiesProps {
  onNavigate: (page: string) => void;
}

export function CaseStudies({ onNavigate }: CaseStudiesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-b from-white to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-purple-600 tracking-wider uppercase text-sm">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl text-slate-900 mt-4 mb-4">
            Our Case Studies
          </h2>
          <p className="text-xl text-slate-600">
            Real brands. Real growth. Real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => onNavigate(`case-study-${study.id}`)}
            >
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${study.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl text-slate-900 mb-3">
                  {study.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {study.description}
                </p>
                <Button
                  variant="ghost"
                  className="group/btn text-purple-600 hover:text-purple-700 p-0"
                >
                  View Full Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}