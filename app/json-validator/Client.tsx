"use client";

import { useState } from "react";
import { toolConfig } from "./config";

import ToolLayout from "../components/ToolLayout";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import CodeEditor from "../components/CodeEditor";

/* ===============================
   Helper: Hitung line & column
================================ */
function getLineAndColumn(input: string, position: number) {
    const before = input.slice(0, position);
    const lines = before.split("\n");
    const line = lines.length;
    const column = lines[lines.length - 1].length + 1;

    return { line, column };
}

/* ===============================
   Types
================================ */
type ValidationResult =
    | { valid: true }
    | {
        valid: false;
        message: string;
        line?: number;
        column?: number;
    };

export default function JSONValidatorClient() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState<ValidationResult | null>(null);

    const handleValidate = () => {
        if (!input.trim()) {
            setResult(null);
            return;
        }

        try {
            JSON.parse(input);
            setResult({ valid: true });
        } catch (error: unknown) {
            let message = "Invalid JSON";
            let line: number | undefined;
            let column: number | undefined;

            if (error instanceof Error) {
                message = error.message;

                // Ambil position dari error message
                const match = message.match(/position (\d+)/);
                if (match) {
                    const pos = Number(match[1]);
                    const loc = getLineAndColumn(input, pos);
                    line = loc.line;
                    column = loc.column;
                }
            }

            setResult({
                valid: false,
                message,
                line,
                column,
            });
        }
    };

    const handleClear = () => {
        setInput("");
        setResult(null);
    };

    return (
        <ToolLayout
            title={toolConfig.name}
            description={toolConfig.description}
        >
            {/* Editor */}
            <CodeEditor
                value={input}
                onChange={setInput}
                placeholder="Paste JSON to validate..."
                rows={16}
                errorLine={!result?.valid ? result?.line : undefined}
            />


            {/* Action Bar */}
            <div
                className="
          mt-5 flex gap-3 p-3
          rounded-xl
          bg-white/5 backdrop-blur-md
          border border-white/10
        "
            >
                <Button label="Validate" onClick={handleValidate} />
                <Button
                    label="Clear"
                    onClick={handleClear}
                    variant="secondary"
                />
            </div>

            {/* Result */}
            {result && (
                <div
                    className={`
            mt-4 rounded-xl p-4 text-sm
            backdrop-blur-md border
            ${result.valid
                            ? "bg-green-500/10 border-green-400/30 text-green-300"
                            : "bg-red-500/10 border-red-400/30 text-red-300"
                        }
          `}
                >
                    {result.valid ? (
                        <span>✅ Valid JSON</span>
                    ) : (
                        <>
                            <div>❌ {result.message}</div>

                            {result.line && result.column && (
                                <div className="mt-1 text-xs text-red-400">
                                    Error at line <strong>{result.line}</strong>, column{" "}
                                    <strong>{result.column}</strong>
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}
        </ToolLayout>
    );
}
