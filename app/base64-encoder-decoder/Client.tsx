"use client";

import { useState } from "react";
import { toolConfig } from "./config";

import ToolLayout from "../components/ToolLayout";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

/* ===============================
   Base64 helpers (SAFE)
================================ */

// Encode UTF-8 → Base64
function encodeBase64(input: string): string {
    const bytes = new TextEncoder().encode(input);
    let binary = "";
    for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

// Decode Base64 → UTF-8
function decodeBase64(input: string): string {
    const binary = atob(input);
    const bytes = new Uint8Array(binary.length);

    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }

    return new TextDecoder().decode(bytes);
}

/* ===============================
   Component
================================ */

export default function Base64EncoderDecoderClient() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleEncode = () => {
        if (!input) {
            setOutput("");
            return;
        }

        try {
            setOutput(encodeBase64(input));
        } catch {
            setOutput("❌ Failed to encode Base64");
        }
    };

    const handleDecode = () => {
        if (!input) {
            setOutput("");
            return;
        }

        try {
            setOutput(decodeBase64(input));
        } catch {
            setOutput("❌ Invalid Base64 string");
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
                    placeholder="Paste text or Base64 here..."
                    rows={14}
                />

                <TextArea
                    value={output}
                    onChange={() => { }}
                    placeholder="Result will appear here..."
                    rows={14}
                    readOnly
                    enableCopy
                />
            </div>

            {/* Action Bar */}
            <div
                className="
          mt-5 flex flex-wrap gap-3 p-3
          rounded-xl
          bg-white/5 backdrop-blur-md
          border border-white/10
        "
            >
                <Button label="Encode" onClick={handleEncode} />
                <Button
                    label="Decode"
                    onClick={handleDecode}
                    variant="ghost"
                />
                <Button
                    label="Clear"
                    onClick={handleClear}
                    variant="secondary"
                />
            </div>
        </ToolLayout>
    );
}
