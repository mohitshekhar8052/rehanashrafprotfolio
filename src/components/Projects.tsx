import { motion } from "framer-motion";
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
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass-card rounded-2xl p-6 hover-lift flex flex-col"
            >
              <div className={`inline-flex p-3 rounded-xl mb-4 w-fit ${
                project.color === "accent" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
              }`}>
                <project.icon size={28} />
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      project.color === "accent" ? "bg-accent" : "bg-primary"
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-secondary rounded text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto pt-4 border-t border-border/50">
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} />
                  Code
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
