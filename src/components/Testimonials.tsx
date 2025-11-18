import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    quote:
      "Working with Mother Superior Media transformed our brand visibility. Their creative direction and analytics-driven approach helped us grow faster than we imagined.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "SJ",
  },
  {
    quote:
      "The team's dedication to understanding our brand and delivering exceptional content has been outstanding. Our engagement rates have never been higher.",
    author: "Michael Chen",
    role: "Marketing Director, GrowthLabs",
    image: "MC",
  },
  {
    quote:
      "Mother Superior Media doesn't just create content—they create experiences. Their strategic approach has elevated our entire digital presence.",
    author: "Priya Sharma",
    role: "Founder, Wellness Co.",
    image: "PS",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-5xl md:text-6xl text-white mt-4">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/10 shadow-2xl"
            >
              <Quote className="w-16 h-16 text-purple-400 mb-8" />
              <p className="text-2xl md:text-3xl text-white mb-12 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl">
                  {testimonials[currentIndex].image}
                </div>
                <div>
                  <div className="text-white text-xl">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-slate-400">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="icon"
              className="rounded-full border-white/20 text-white hover:bg-white/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-purple-500 w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="rounded-full border-white/20 text-white hover:bg-white/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
