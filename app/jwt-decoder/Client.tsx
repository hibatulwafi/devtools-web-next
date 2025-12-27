"use client";

import { useState } from "react";
import { toolConfig } from "./config";

import ToolLayout from "../components/ToolLayout";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

/* ===============================
   Helpers
================================ */

// Base64URL → JSON (Turbopack safe)
function decodeBase64Url(input: string): string {
    const base64 = input.replace(/-/g, "+").replace(/_/g, "/");
    const padded =
        base64 + "=".repeat((4 - (base64.length % 4)) % 4);

    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (c) =>
        c.charCodeAt(0)
    );

    return new TextDecoder().decode(bytes);
}

function parseJWT(token: string) {
    const parts = token.split(".");
    if (parts.length !== 3) {
        throw new Error("Invalid JWT format");
    }

    const header = JSON.parse(decodeBase64Url(parts[0]));
    const payload = JSON.parse(decodeBase64Url(parts[1]));
    const signature = parts[2];

    return { header, payload, signature };
}

/* ===============================
   Component
================================ */

export default function JWTDecoderClient() {
    const [input, setInput] = useState("");
    const [header, setHeader] = useState("");
    const [payload, setPayload] = useState("");
    const [error, setError] = useState("");

    const handleDecode = () => {
        if (!input.trim()) {
            setHeader("");
            setPayload("");
            setError("");
            return;
        }

        try {
            const result = parseJWT(input.trim());

            setHeader(JSON.stringify(result.header, null, 2));
            setPayload(JSON.stringify(result.payload, null, 2));
            setError("");
        } catch (err: unknown) {
            let message = "Failed to decode JWT";
            if (err instanceof Error) {
                message = err.message;
            }

            setHeader("");
            setPayload("");
            setError(`❌ ${message}`);
        }
    };

    const handleClear = () => {
        setInput("");
        setHeader("");
        setPayload("");
        setError("");
    };

    return (
        <ToolLayout
            title={toolConfig.name}
            description={toolConfig.description}
        >
            {/* Input */}
            <TextArea
                value={input}
                onChange={setInput}
                placeholder="Paste JWT token here..."
                rows={6}
            />

            {/* Action Bar */}
            <div
                className="
          mt-4 flex gap-3 p-3
          rounded-xl
          bg-white/5 backdrop-blur-md
          border border-white/10
        "
            >
                <Button label="Decode" onClick={handleDecode} />
                <Button
                    label="Clear"
                    onClick={handleClear}
                    variant="secondary"
                />
            </div>

            {/* Error */}
            {error && (
                <div className="mt-4 text-sm text-red-400">
                    {error}
                </div>
            )}

            {/* Output */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextArea
                    value={header}
                    onChange={() => { }}
                    placeholder="JWT Header"
                    rows={12}
                    readOnly
                    enableCopy
                />

                <TextArea
                    value={payload}
                    onChange={() => { }}
                    placeholder="JWT Payload"
                    rows={12}
                    readOnly
                    enableCopy
                />

                <div className="mt-6 text-xs text-gray-400 leading-relaxed">
                    <strong className="text-gray-300">Security Notice (Important)</strong>
                    <p className="mt-1">
                        This tool does <strong>not</strong> verify the JWT signature.
                    </p>
                    <p>
                        This is normal and expected behavior for online JWT decoders.
                    </p>
                    <p>
                        It is intended for debugging and inspection only, not for authentication
                        or security validation.
                    </p>
                </div>

            </div>
        </ToolLayout>
    );
}
