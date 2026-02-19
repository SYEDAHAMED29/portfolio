import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Writing = () => {
  return (
    <section id="writing" className="section-padding bg-card/50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground">Writing</h2>
            <span className="text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 rounded-full px-2.5 py-0.5 uppercase tracking-wider">
              WIP
            </span>
          </div>
        </motion.div>

        <div className="space-y-3 mb-8">
          {siteData.writing.posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-border rounded-lg p-5 bg-background hover:border-primary/20 transition-colors"
            >
              <div className="flex items-start gap-3">
                <FileText size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-display font-medium text-foreground text-sm">{post.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{post.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          View all posts <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
};

export default Writing;
