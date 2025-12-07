import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <motion.div 
        style={{ y }}
        className="absolute -left-32 bottom-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
      />
      
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">Contact</span>
          <h2 className="heading-lg mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.a
              href="mailto:ashrafrehan243@gmail.com"
              className="group glass-card rounded-xl p-5 flex items-center gap-4 block"
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <motion.div 
                className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 15 }}
              >
                <Mail size={22} />
              </motion.div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium group-hover:text-primary transition-colors">ashrafrehan243@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+918429258530"
              className="group glass-card rounded-xl p-5 flex items-center gap-4 block"
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <motion.div 
                className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 15 }}
              >
                <Phone size={22} />
              </motion.div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium group-hover:text-primary transition-colors">+91 8429258530</p>
              </div>
            </motion.a>

            <motion.div 
              className="glass-card rounded-xl p-5 flex items-center gap-4"
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <motion.div 
                className="p-3 rounded-lg bg-accent/10 text-accent"
                whileHover={{ rotate: 15 }}
              >
                <MapPin size={22} />
              </motion.div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Gorakhpur, India</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8 flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
            
            <div className="flex gap-4 mb-8">
              {[
                { href: "https://linkedin.com/in/rehan-ashraf", icon: Linkedin },
                { href: "https://github.com/rehan-ashraf", icon: Github },
              ].map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.15, 
                    y: -5,
                    boxShadow: "0 0 30px hsl(174 72% 50% / 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </div>

            <motion.a
              href="mailto:ashrafrehan243@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 40px hsl(174 72% 50% / 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={18} />
              Send Message
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
