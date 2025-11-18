import { motion } from "motion/react";
import { ArrowRight, Play, TrendingUp, Users, Heart, Eye } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Multiple Animated Background Glows */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Professional Floating UI Elements */}
      
      {/* Analytics Card */}
      <motion.div
        className="absolute top-24 right-16 bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl"
        initial={{ opacity: 0, y: 20, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: -5 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        whileHover={{ y: -10, scale: 1.05, rotate: 0 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <TrendingUp className="w-8 h-8 text-emerald-400" />
          <div>
            <div className="text-white/70 text-xs">Growth Rate</div>
            <div className="text-white text-xl">+247%</div>
          </div>
        </div>
        <div className="flex gap-1 h-12 items-end">
          {[40, 60, 45, 80, 65, 95, 100].map((height, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-t from-emerald-500 to-cyan-400 w-4 rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Engagement Card */}
      <motion.div
        className="absolute top-1/3 left-12 bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl"
        initial={{ opacity: 0, x: -20, rotate: 5 }}
        animate={{ opacity: 1, x: 0, rotate: 5 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        whileHover={{ x: 10, scale: 1.05, rotate: 0 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" fill="currentColor" />
          </div>
          <div>
            <div className="text-white/70 text-xs">Engagement</div>
            <div className="text-white text-xl">+156%</div>
          </div>
        </div>
        <div className="text-pink-300 text-sm">↑ 12.4K interactions</div>
      </motion.div>

      {/* Video Performance Card */}
      <motion.div
        className="absolute bottom-32 left-24 bg-white/10 backdrop-blur-lg rounded-3xl p-5 border border-white/20 shadow-2xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        whileHover={{ x: 10, scale: 1.05 }}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center">
              <Play className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-900"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div>
            <div className="text-white text-lg">1.2M Views</div>
            <div className="text-white/70 text-xs">Latest Reel</div>
          </div>
        </div>
      </motion.div>

      {/* Audience Card */}
      <motion.div
        className="absolute bottom-40 right-20 bg-white/10 backdrop-blur-lg rounded-3xl p-5 border border-white/20 shadow-2xl"
        initial={{ opacity: 0, y: 20, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        whileHover={{ y: -10, scale: 1.05, rotate: 0 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-white text-lg">50K+</div>
            <div className="text-white/70 text-xs">New Followers</div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-purple-300">🚀 Mother Superior Media</span>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl text-white mb-6 max-w-5xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Turning Social Presence Into{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Powerful Brand Influence
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            We help businesses grow through data-driven strategies, creative
            storytelling, and content that converts.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-full text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg backdrop-blur-sm hover:border-white/50 transition-all duration-300"
            >
              View Our Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Decorative Floating Elements */}
        <motion.div
          className="absolute top-1/3 left-4 md:left-10"
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{ delay: 0.9, duration: 1.5 }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl blur-sm opacity-50" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-8 md:right-32"
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: -360 }}
          transition={{ delay: 1.1, duration: 1.5 }}
        >
          <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-sm opacity-50" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl blur-sm opacity-40" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div 
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
