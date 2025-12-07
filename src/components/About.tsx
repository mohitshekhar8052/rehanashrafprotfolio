import { motion } from "framer-motion";
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
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
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
          className="glass-card rounded-2xl p-8 mb-12 hover-lift"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <GraduationCap size={28} />
            </div>
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

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 text-center hover-lift"
            >
              <stat.icon className="mx-auto mb-3 text-primary" size={28} />
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 hover-lift"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary rounded-lg text-foreground/80 border border-border/50"
                  >
                    {skill}
                  </span>
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
