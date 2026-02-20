import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { Mail, Github, Linkedin, FileDown } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>

          <p className="text-muted-foreground text-base lg:text-lg mb-8">
            {siteData.contact.closingLine}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${siteData.email}`}
              className="inline-flex items-center gap-2 text-base font-medium bg-primary text-primary-foreground px-4 py-2.5 rounded-md hover:opacity-90 transition-opacity"
            >
              <Mail size={16} /> Email me
            </a>

            <a
              href={siteData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-medium border border-border text-foreground px-4 py-2.5 rounded-md hover:bg-secondary transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>

            <a
              href={siteData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-medium border border-border text-foreground px-4 py-2.5 rounded-md hover:bg-secondary transition-colors"
            >
              <Github size={16} /> GitHub
            </a>

            <a
              href={siteData.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-medium border border-border text-foreground px-4 py-2.5 rounded-md hover:bg-secondary transition-colors"
            >
              <FileDown size={16} /> Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
