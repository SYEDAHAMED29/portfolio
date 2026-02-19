import { siteData } from "@/data/site";

const CodeCard = () => {
  const lines = siteData.codeCard.object.split("\n");

  const renderLine = (line: string, index: number) => {
    // Keyword: const
    if (line.startsWith("const ")) {
      const parts = line.match(/^(const )(\w+)( = \{)$/);
      if (parts) {
        return (
          <span>
            <span className="text-code-keyword">{parts[1]}</span>
            <span className="text-foreground">{parts[2]}</span>
            <span className="text-code-bracket">{parts[3]}</span>
          </span>
        );
      }
    }

    // Closing bracket
    if (line.trim() === "}") {
      return <span className="text-code-bracket">{"}"}</span>;
    }

    // Property with string value
    const propString = line.match(/^(\s+)(\w+): "(.*)"(,?)$/);
    if (propString) {
      return (
        <span>
          {propString[1]}
          <span className="text-code-property">{propString[2]}</span>
          <span className="text-code-bracket">{": "}</span>
          <span className="text-code-string">"{propString[3]}"</span>
          <span className="text-code-bracket">{propString[4]}</span>
        </span>
      );
    }

    // Property with array start
    const propArray = line.match(/^(\s+)(\w+): \[$/);
    if (propArray) {
      return (
        <span>
          {propArray[1]}
          <span className="text-code-property">{propArray[2]}</span>
          <span className="text-code-bracket">{": ["}</span>
        </span>
      );
    }

    // Array string item
    const arrItem = line.match(/^(\s+)"(.*)"(,?)$/);
    if (arrItem) {
      return (
        <span>
          {arrItem[1]}
          <span className="text-code-string">"{arrItem[2]}"</span>
          <span className="text-code-bracket">{arrItem[3]}</span>
        </span>
      );
    }

    // Closing bracket ]
    if (line.trim() === "],") {
      return <span className="text-code-bracket">{line}</span>;
    }

    return <span className="text-code-bracket">{line}</span>;
  };

  return (
    <div className="rounded-lg border border-code-border bg-code-bg overflow-hidden glow-sm">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-code-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-primary/40" />
          <div className="w-3 h-3 rounded-full bg-code-string/40" />
        </div>
        <span className="text-xs text-muted-foreground font-mono ml-2">{siteData.codeCard.filename}</span>
      </div>

      {/* Code */}
      <pre className="p-4 text-sm leading-relaxed font-mono overflow-x-auto">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="text-code-comment w-8 text-right mr-4 select-none text-xs leading-relaxed">
                {i + 1}
              </span>
              {renderLine(line, i)}
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

export default CodeCard;
