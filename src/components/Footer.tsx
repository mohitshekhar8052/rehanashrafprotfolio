import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1 text-muted-foreground text-sm">
          <span>Designed & Built with</span>
          <Heart size={14} className="text-primary fill-primary" />
          <span>by Rehan Ashraf</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/rehan-ashraf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/rehan-ashraf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:ashrafrehan243@gmail.com"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
