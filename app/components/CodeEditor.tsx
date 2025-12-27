import { useEffect, useRef } from "react";

type CodeEditorProps = {
    value: string;
    onChange: (value: string) => void;
    rows?: number;
    placeholder?: string;
    errorLine?: number;
};

export default function CodeEditor({
    value,
    onChange,
    rows = 14,
    placeholder = "",
    errorLine,
}: CodeEditorProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const linesRef = useRef<HTMLDivElement>(null);

    const lines = value.split("\n").length || 1;

    // Sync scroll
    useEffect(() => {
        const textarea = textareaRef.current;
        const linesDiv = linesRef.current;

        if (!textarea || !linesDiv) return;

        const handleScroll = () => {
            linesDiv.scrollTop = textarea.scrollTop;
        };

        textarea.addEventListener("scroll", handleScroll);
        return () => textarea.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="
        relative flex rounded-xl overflow-hidden
        bg-white/5 backdrop-blur-md
        border border-white/10
      "
        >
            {/* Line Numbers */}
            <div
                ref={linesRef}
                className="
          select-none text-right
          px-3 py-4 text-xs
          text-gray-500
          bg-black/30
          overflow-hidden
        "
            >
                {Array.from({ length: lines }).map((_, i) => {
                    const lineNumber = i + 1;
                    const isError = errorLine === lineNumber;

                    return (
                        <div
                            key={i}
                            className={`
                leading-relaxed
                ${isError ? "text-red-400 font-semibold" : ""}
              `}
                        >
                            {lineNumber}
                        </div>
                    );
                })}
            </div>

            {/* Textarea */}
            <textarea
                ref={textareaRef}
                value={value}
                rows={rows}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className="
          flex-1 bg-transparent
          p-4 resize-none
          font-mono text-sm leading-relaxed
          text-gray-100 placeholder:text-gray-400
          focus:outline-none
        "
            />
        </div>
    );
}
