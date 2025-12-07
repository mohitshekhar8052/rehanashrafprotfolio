import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Trophy, Users } from "lucide-react";

const stats = [
  { icon: Code2, value: "500+", label: "Problems Solved" },
  { icon: Trophy, value: "2,814", label: "LeetCode Rank" },
  { icon: Users, value: "President", label: "Hack With India" },
  { icon: GraduationCap, value: "8.29", label: "CGPA" },
];

const skills = {
  "Core CS": ["Data Structures & Algorithms", "OOPS", "DBMS", "OS", "Computer Networks"],
  "Languages": ["C++", "C", "JavaScript", "HTML5", "CSS3", "SQL"],
  "Frameworks": ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  "Tools": ["VS Code", "Git", "GitHub", "Postman", "RESTful APIs"],
};

const About = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <motion.div 
        style={{ y }}
        className="absolute -right-32 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
      />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">About Me</span>
          <h2 className="heading-lg">
            Education & <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="glass-card rounded-2xl p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <motion.div 
              className="p-3 rounded-lg bg-primary/10 text-primary"
              whileHover={{ rotate: 10 }}
            >
              <GraduationCap size={28} />
            </motion.div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Madan Mohan Malaviya University of Technology</h3>
              <p className="text-muted-foreground mb-2">Bachelor of Technology in Computer Science and Engineering</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-primary font-mono">CGPA: 8.29/10.0</span>
                <span className="text-muted-foreground">Sep 2023 – May 2027</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid with stagger animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px hsl(0 0% 0% / 0.3)",
              }}
              className="glass-card rounded-xl p-6 text-center cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className="mx-auto mb-3 text-primary" size={28} />
              </motion.div>
              <motion.div 
                className="text-2xl md:text-3xl font-bold text-gradient mb-1"
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid with parallax */}
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "hsl(174 72% 50% / 0.2)",
                      color: "hsl(174 72% 50%)"
                    }}
                    className="px-3 py-1.5 text-sm bg-secondary rounded-lg text-foreground/80 border border-border/50 cursor-pointer transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
