import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">Experience</span>
          <h2 className="heading-lg">
            Leadership & <span className="text-gradient">Impact</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {/* Experience Card */}
          <div className="relative pl-16 md:pl-20">
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-6 top-8 w-4 h-4 rounded-full bg-primary animate-pulse-glow" />

            <div className="glass-card rounded-2xl p-6 md:p-8 hover-lift">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">President</h3>
                    <p className="text-primary">Hack With India Chapter, MMMUT</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
                  <Calendar size={16} />
                  Jan 2025 – Present
                </div>
              </div>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Led the society's overall operations, guiding multiple teams and ensuring smooth execution of all yearly initiatives and activities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Oversaw strategic planning, collaborations, and community engagement while successfully organizing <span className="text-foreground font-medium">2 pan-India hackathons</span> and <span className="text-foreground font-medium">3 major college-level events</span>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Represented the society in official meetings, guided leadership coordination, and drove impactful projects that enhanced campus visibility and participation.</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {["Leadership", "Event Management", "Strategic Planning", "Community Building"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
