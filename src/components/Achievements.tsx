import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Medal, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "500+ Problems Solved",
    description: "LeetCode (200+), CodeChef (260+), GFG (70+)",
    color: "primary"
  },
  {
    icon: Medal,
    title: "LeetCode Contest Rank 2,814",
    description: "Out of 27,890 participants in Biweekly Contest 169 | Max Rating: 1608",
    color: "accent"
  },
  {
    icon: Star,
    title: "CodeChef Rank 97",
    description: "Starters 170 (Rated) | Max Rating: 1569",
    color: "primary"
  },
  {
    icon: Award,
    title: "Build With India Hackathon",
    description: "Participated and earned certification",
    color: "accent"
  },
  {
    icon: Award,
    title: "Adobe India Hackathon'25",
    description: "Selected participant",
    color: "primary"
  },
  {
    icon: Star,
    title: "Graph Algorithms Camp",
    description: "AlgoUniversity: BFS, DFS, Topological Sort",
    color: "accent"
  },
];

const Achievements = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="achievements" className="section-padding bg-secondary/20 relative overflow-hidden" ref={ref}>
      <motion.div 
        style={{ y }}
        className="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">Achievements</span>
          <h2 className="heading-lg">
            Certifications & <span className="text-gradient">Awards</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 40px hsl(0 0% 0% / 0.3)",
              }}
              className="glass-card rounded-xl p-5 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className={`p-2.5 rounded-lg flex-shrink-0 ${
                    achievement.color === "accent" 
                      ? "bg-accent/10 text-accent group-hover:bg-accent/20" 
                      : "bg-primary/10 text-primary group-hover:bg-primary/20"
                  } transition-colors`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <achievement.icon size={22} />
                </motion.div>
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
