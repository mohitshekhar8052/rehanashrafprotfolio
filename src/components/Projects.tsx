import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Database, Layout, CheckSquare } from "lucide-react";

const projects = [
  {
    title: "MERN Admin Panel",
    description: "A full-stack Admin Dashboard with secure authentication, user and product management, and complete CRUD operations for streamlined admin workflows.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    icon: Database,
    color: "primary",
    features: [
      "Secure JWT Authentication",
      "RESTful API Integration",
      "Clean Modular Architecture",
      "Real-time Data Handling"
    ]
  },
  {
    title: "Blog Application",
    description: "A full-stack blog platform with secure user authentication, CRUD operations, and a clean editor interface for seamless content creation.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Appwrite"],
    icon: Layout,
    color: "accent",
    features: [
      "User Authentication",
      "Rich Text Editor",
      "Media Management",
      "Scalable Backend APIs"
    ]
  },
  {
    title: "To-Do Application",
    description: "A task management application with Redux for centralized state management and persistent storage to retain tasks across sessions.",
    tech: ["React", "Redux", "CSS", "JavaScript"],
    icon: CheckSquare,
    color: "primary",
    features: [
      "Redux State Management",
      "Persistent Storage",
      "Intuitive Interface",
      "Task Organization"
    ]
  },
];

const Projects = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <motion.div 
        style={{ y }}
        className="absolute -left-32 top-1/3 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
      />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">Projects</span>
          <h2 className="heading-lg">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 30px 60px hsl(0 0% 0% / 0.4), 0 0 40px hsl(174 72% 50% / 0.15)",
              }}
              className="group glass-card rounded-2xl p-6 flex flex-col cursor-pointer"
            >
              <motion.div 
                className={`inline-flex p-3 rounded-xl mb-4 w-fit ${
                  project.color === "accent" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                }`}
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <project.icon size={28} />
              </motion.div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6">
                {project.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * featureIndex }}
                  >
                    <motion.div 
                      className={`w-1.5 h-1.5 rounded-full ${
                        project.color === "accent" ? "bg-accent" : "bg-primary"
                      }`}
                      whileHover={{ scale: 2 }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-secondary rounded text-muted-foreground"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * techIndex }}
                    whileHover={{ scale: 1.1, color: "hsl(174 72% 50%)" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto pt-4 border-t border-border/50">
                <motion.a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 3 }}
                >
                  <Github size={18} />
                  Code
                </motion.a>
                <motion.a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 3 }}
                >
                  <ExternalLink size={18} />
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
