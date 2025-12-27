"use client";

import { useState } from "react";
import { toolConfig } from "./config";

import ToolLayout from "../components/ToolLayout";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

export default function JSONMinifierClient() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleMinify = () => {
        if (!input.trim()) {
            setOutput("");
            return;
        }

        try {
            const parsed = JSON.parse(input);
            const minified = JSON.stringify(parsed);
            setOutput(minified);
        } catch (error: unknown) {
            let message = "Invalid JSON";

            if (error instanceof Error) {
                message = error.message;
            }

            setOutput(`❌ ${message}`);
        }
    };

    const handleClear = () => {
        setInput("");
        setOutput("");
    };

    return (
        <ToolLayout
            title={toolConfig.name}
            description={toolConfig.description}
        >
            {/* Editors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextArea
                    value={input}
                    onChange={setInput}
                    placeholder="Paste JSON to minify..."
                    rows={14}
                />

                <TextArea
                    value={output}
                    onChange={() => { }}
                    placeholder="Minified JSON will appear here..."
                    rows={14}
                    readOnly
                    enableCopy
                />
            </div>

            {/* Action Bar */}
            <div
                className="
          mt-5 flex gap-3 p-3
          rounded-xl
          bg-white/5 backdrop-blur-md
          border border-white/10
        "
            >
                <Button label="Minify" onClick={handleMinify} />
                <Button
                    label="Clear"
                    onClick={handleClear}
                    variant="secondary"
                />
            </div>
        </ToolLayout>
    );
}
