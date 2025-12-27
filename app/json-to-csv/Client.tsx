"use client";

import { useState } from "react";
import { toolConfig } from "./config";

import ToolLayout from "../components/ToolLayout";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

/* ===============================
   Helpers
================================ */

// Flatten nested object using dot notation
function flattenObject(
    obj: Record<string, unknown>,
    prefix = "",
    res: Record<string, unknown> = {}
): Record<string, unknown> {
    for (const key in obj) {
        const value = obj[key];
        const newKey = prefix ? `${prefix}.${key}` : key;

        if (
            typeof value === "object" &&
            value !== null &&
            !Array.isArray(value)
        ) {
            flattenObject(value as Record<string, unknown>, newKey, res);
        } else {
            res[newKey] = value;
        }
    }
    return res;
}

function jsonToCSV(data: unknown[]): string {
    const flattened = data.map((item) =>
        flattenObject(item as Record<string, unknown>)
    );

    const headers = Array.from(
        new Set(flattened.flatMap((obj) => Object.keys(obj)))
    );

    const escapeCSV = (value: unknown) => {
        if (value === null || value === undefined) return "";
        const str = String(value);
        return `"${str.replace(/"/g, '""')}"`;
    };

    const rows = flattened.map((obj) =>
        headers.map((h) => escapeCSV(obj[h])).join(",")
    );

    return [headers.join(","), ...rows].join("\n");
}

/* ===============================
   Component
================================ */

export default function JSONToCSVClient() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    /* ===== Convert JSON → CSV ===== */
    const handleConvert = () => {
        if (!input.trim()) {
            setOutput("");
            return;
        }

        try {
            const parsed: unknown = JSON.parse(input);

            if (!Array.isArray(parsed)) {
                throw new Error("JSON must be an array of objects");
            }

            const csv = jsonToCSV(parsed);
            setOutput(csv);
        } catch (error: unknown) {
            let message = "Invalid JSON";

            if (error instanceof Error) {
                message = error.message;
            }

            setOutput(`❌ ${message}`);
        }
    };

    /* ===== Download CSV ===== */
    const handleDownload = () => {
        if (!output || output.startsWith("❌")) return;

        const blob = new Blob([output], {
            type: "text/csv;charset=utf-8;",
        });

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = "data.csv";

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    /* ===== Clear ===== */
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
                    placeholder="Paste JSON array here..."
                    rows={14}
                />

                <TextArea
                    value={output}
                    onChange={() => { }}
                    placeholder="CSV output will appear here..."
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
                <Button label="Convert to CSV" onClick={handleConvert} />
                <Button
                    label="Download CSV"
                    onClick={handleDownload}
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
