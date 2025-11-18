import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="text-3xl mb-4">
              Mother Superior <span className="text-purple-400">Media</span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              A results-focused digital branding and social media marketing
              agency crafting campaigns that connect, engage, and scale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Case Studies", "Pricing", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <motion.a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-slate-400 hover:text-purple-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg mb-4">Connect</h4>
            <ul className="space-y-3">
              {["Instagram", "LinkedIn", "Twitter", "Facebook"].map((social) => (
                <li key={social}>
                  <motion.a
                    href="#"
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {social}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © 2025 Mother Superior Media. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-slate-400 hover:text-purple-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-purple-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
