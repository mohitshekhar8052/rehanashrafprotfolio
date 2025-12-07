import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Animated background orbs */}
      <div className="floating-orb w-96 h-96 bg-primary/20 -top-48 -left-48" />
      <div className="floating-orb w-72 h-72 bg-accent/20 -bottom-36 -right-36" style={{ animationDelay: "2s" }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-mono text-primary border border-primary/30 rounded-full bg-primary/5">
            Full Stack Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-xl mb-6"
        >
          Hi, I'm{" "}
          <span className="text-gradient">Rehan Ashraf</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Building robust web applications with the{" "}
          <span className="text-foreground font-medium">MERN Stack</span>. 
          Passionate about competitive programming and clean architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <a
            href="mailto:ashrafrehan243@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 glow-effect"
          >
            <Mail size={18} />
            Get in Touch
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-all duration-300"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://linkedin.com/in/rehan-ashraf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/rehan-ashraf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
          >
            <Github size={22} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
