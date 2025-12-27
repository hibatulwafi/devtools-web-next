"use client";

import { useState } from "react";
import { toolConfig } from "./config";

import ToolLayout from "../components/ToolLayout";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

export default function JSONBeautifierClient() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleBeautify = () => {
        if (!input.trim()) {
            setOutput("");
            return;
        }

        try {
            const parsed = JSON.parse(input);
            setOutput(JSON.stringify(parsed, null, 2));
        } catch {
            setOutput("❌ Invalid JSON");
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
                    placeholder="Paste your JSON here..."
                    rows={14}
                />

                <TextArea
                    value={output}
                    onChange={() => { }}
                    placeholder="Beautified JSON will appear here..."
                    rows={14}
                    readOnly
                    enableCopy
                />
            </div>

            {/* Action Bar */}
            <div className="mt-5 flex gap-3">
                <Button label="Beautify" onClick={handleBeautify} />
                <Button label="Clear" onClick={handleClear} variant="secondary" />
            </div>
        </ToolLayout>
    );
}
