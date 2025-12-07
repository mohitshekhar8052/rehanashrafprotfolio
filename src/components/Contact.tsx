import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
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
            <a
              href="mailto:ashrafrehan243@gmail.com"
              className="group glass-card rounded-xl p-5 flex items-center gap-4 hover-lift"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium group-hover:text-primary transition-colors">ashrafrehan243@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+918429258530"
              className="group glass-card rounded-xl p-5 flex items-center gap-4 hover-lift"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium group-hover:text-primary transition-colors">+91 8429258530</p>
              </div>
            </a>

            <div className="glass-card rounded-xl p-5 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Gorakhpur, India</p>
              </div>
            </div>
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
              <a
                href="https://linkedin.com/in/rehan-ashraf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 glow-effect"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://github.com/rehan-ashraf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 glow-effect"
              >
                <Github size={28} />
              </a>
            </div>

            <a
              href="mailto:ashrafrehan243@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 glow-effect"
            >
              <Send size={18} />
              Send Message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
