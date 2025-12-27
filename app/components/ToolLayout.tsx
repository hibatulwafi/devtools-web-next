import React from "react";
import ToolHeader from "./ToolHeader";

type ToolLayoutProps = {
    title: string;
    description: string;
    children: React.ReactNode;
};

export default function ToolLayout({
    title,
    description,
    children,
}: ToolLayoutProps) {
    return (
        <main className="max-w-5xl mx-auto p-6">
            <ToolHeader title={title} description={description} />
            {children}
        </main>
    );
}
