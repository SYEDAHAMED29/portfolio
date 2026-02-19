import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import { ArrowLeft, FileText, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="min-h-screen">
      {/* Simple nav */}
      <nav className="border-b border-border">
        <div className="container-narrow px-6 h-16 flex items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={16} /> Back to portfolio
          </Link>
        </div>
      </nav>

      <main className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <h1 className="font-display text-3xl font-bold text-foreground">Blog</h1>
              <span className="text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 rounded-full px-2.5 py-0.5 uppercase tracking-wider">
                Launching soon
              </span>
            </div>
            <p className="text-muted-foreground mb-12 max-w-lg">
              Writing about frontend systems, migrations, and lessons from production. First posts dropping soon.
            </p>
          </motion.div>

          <div className="space-y-4">
            {siteData.writing.posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="border border-border rounded-lg p-6 bg-card"
              >
                <div className="flex items-start gap-3">
                  <FileText size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <h2 className="font-display font-semibold text-foreground mb-1">{post.title}</h2>
                    <p className="text-sm text-muted-foreground mb-3">{post.description}</p>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock size={12} />
                      <span className="font-mono">Coming soon</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
