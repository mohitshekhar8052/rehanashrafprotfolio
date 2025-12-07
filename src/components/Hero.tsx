import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import TypingText from "./TypingText";
import AnimatedBorder from "./AnimatedBorder";
import profileImage from "@/assets/profile-avatar.png";

const roles = [
  "Full Stack Developer",
  "MERN Stack Expert",
  "Competitive Programmer",
  "Problem Solver",
];

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Parallax animated background orbs */}
      <motion.div 
        style={{ y: y1 }}
        className="floating-orb w-96 h-96 bg-primary/20 -top-48 -left-48" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="floating-orb w-72 h-72 bg-accent/20 -bottom-36 -right-36" 
      />
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 500], [0, 80]) }}
        className="floating-orb w-48 h-48 bg-primary/10 top-1/4 right-1/4" 
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Profile Image with Animated Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="flex justify-center mb-8"
        >
          <AnimatedBorder className="w-32 h-32 md:w-40 md:h-40">
            <img
              src={profileImage}
              alt="Rehan Ashraf"
              className="w-full h-full rounded-full object-cover"
            />
          </AnimatedBorder>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-mono text-primary border border-primary/30 rounded-full bg-primary/5">
            <TypingText texts={roles} />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="heading-xl mb-6"
        >
          Hi, I'm{" "}
          <motion.span 
            className="text-gradient inline-block"
            animate={{ 
              textShadow: [
                "0 0 20px hsl(174 72% 50% / 0.3)",
                "0 0 40px hsl(174 72% 50% / 0.5)",
                "0 0 20px hsl(174 72% 50% / 0.3)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Rehan Ashraf
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Building robust web applications with the{" "}
          <span className="text-foreground font-medium">MERN Stack</span>. 
          Passionate about competitive programming and clean architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="mailto:ashrafrehan243@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(174 72% 50% / 0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={18} />
            Get in Touch
          </motion.a>
          <motion.a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05, borderColor: "hsl(174 72% 50%)" }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { href: "https://linkedin.com/in/rehan-ashraf", icon: Linkedin },
            { href: "https://github.com/rehan-ashraf", icon: Github },
          ].map((social, index) => (
            <motion.a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ opacity }}
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
