import { siteData } from "@/data/site";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteData.name}
        </p>
        <p className="text-xs text-muted-foreground font-mono">
          Built with React + TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;
