import { useState } from "react";

type TextAreaProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    rows?: number;
    readOnly?: boolean;
    enableCopy?: boolean;
};

export default function TextArea({
    value,
    onChange,
    placeholder = "",
    rows = 12,
    readOnly = false,
    enableCopy = false,
}: TextAreaProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (!value) return;
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
    };

    return (
        <div className="relative w-full">
            {/* COPY BUTTON */}
            {enableCopy && (
                <button
                    type="button"
                    onClick={handleCopy}
                    className="
            absolute top-3 right-3 z-20
            px-2 py-1 text-xs rounded-md
            bg-black/60 backdrop-blur
            border border-white/20
            text-white
            hover:bg-black/80
            transition
          "
                >
                    {copied ? "Copied" : "Copy"}
                </button>
            )}

            {/* TEXTAREA */}
            <textarea
                value={value}
                rows={rows}
                readOnly={readOnly}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className="
          w-full rounded-xl
          bg-white/5 backdrop-blur-md
          border border-white/10
          p-4 resize-none

          font-mono text-sm leading-relaxed
          text-gray-100 placeholder:text-gray-400

          focus:outline-none
          focus:ring-2 focus:ring-blue-500/40
          focus:border-blue-400/40

          shadow-inner shadow-black/40
          transition
        "
            />
        </div>
    );
}
