"use client";

import { useMemo, useState } from "react";
import { TOOLS } from "./lib/tools";

export default function HomeClient() {
    const [query, setQuery] = useState("");

    const filteredTools = useMemo(() => {
        const q = query.toLowerCase().trim();
        if (!q) return TOOLS;

        return TOOLS.filter(
            (tool) =>
                tool.title.toLowerCase().includes(q) ||
                tool.description.toLowerCase().includes(q)
        );
    }, [query]);

    return (
        <main className="mx-auto max-w-6xl px-6 py-32">
            {/* HERO */}
            <section className="text-center">
                <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-zinc-300">
                    ⚡ Modern Developer Tools
                </span>

                <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
                    Build Faster with{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        DevTools Hub
                    </span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
                    A collection of fast, privacy-friendly tools for developers.
                    No uploads. No tracking. Just tools.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href="/json-beautifier"
                        className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
                    >
                        Try JSON Beautifier →
                    </a>

                    <a
                        href="#tools"
                        className="
              group relative rounded-full border border-white/15 px-6 py-3
              text-sm text-zinc-300 transition
              hover:bg-white/5
              active:scale-95
            "
                    >
                        <span className="relative z-10">Explore Tools</span>

                        <span
                            className="
                absolute inset-0 rounded-full opacity-0
                bg-gradient-to-r from-cyan-400/20 to-purple-500/20
                blur-lg transition
                group-hover:opacity-100
              "
                        />
                    </a>
                </div>
            </section>

            {/* SEARCH */}
            <section className="mt-20">
                <div className="mx-auto max-w-md">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search tools (JSON, JWT, Base64...)"
                        className="
              w-full rounded-xl
              bg-white/5 backdrop-blur-md
              border border-white/10
              px-4 py-3 text-sm text-white
              placeholder:text-zinc-500
              focus:outline-none focus:border-cyan-400/50
            "
                    />
                </div>
            </section>

            {/* TOOLS */}
            <section
                id="tools"
                className="
          mt-16 scroll-mt-32 grid gap-6
          sm:grid-cols-2 lg:grid-cols-3
          animate-in fade-in slide-in-from-bottom-6 duration-700
        "
            >
                {filteredTools.length > 0 ? (
                    filteredTools.map((tool) => (
                        <ToolCard
                            key={tool.href}
                            title={tool.title}
                            description={tool.description}
                            href={tool.href}
                            badge={tool.badge}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center text-sm text-zinc-500">
                        No tools found.
                    </div>
                )}
            </section>
        </main>
    );
}

/* ===============================
   Tool Card
================================ */

type ToolCardProps = {
    title: string;
    description: string;
    href: string;
    badge?: "new" | "popular";
};


function ToolCard({
    title,
    description,
    href,
    badge,
}: ToolCardProps) {
    return (
        <a
            href={href}
            aria-label={`Open ${title} tool`}
            className="
        group relative rounded-2xl
        border border-white/10 bg-white/5 p-6
        transition hover:border-white/20 hover:bg-white/10
      "
        >
            {/* BADGE */}
            {badge && (
                <span
                    className={`
            absolute top-4 right-4
            rounded-full px-2 py-0.5
            text-[10px] font-semibold tracking-wide
            backdrop-blur-md border
            ${badge === "new"
                            ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20"
                            : "bg-amber-400/10 text-amber-400 border-amber-400/20"
                        }
          `}
                >
                    {badge === "new" ? "NEW" : "POPULAR"}
                </span>
            )}

            <h2 className="text-lg font-semibold text-white transition group-hover:text-cyan-400">
                {title}
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
                {description}
            </p>

            <span className="mt-4 inline-block text-sm text-cyan-400">
                Open tool →
            </span>
        </a>
    );
}

