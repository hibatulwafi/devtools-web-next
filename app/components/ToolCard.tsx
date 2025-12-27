import Link from "next/link";

type ToolBadge = "new" | "popular";

type ToolCardProps = {
    slug: string;
    name: string;
    description: string;
    badge?: ToolBadge;
};

export default function ToolCard({
    slug,
    name,
    description,
    badge,
}: ToolCardProps) {
    return (
        <Link
            href={`/${slug}`}
            className="
                group relative block rounded-xl p-5
                bg-white/5 backdrop-blur-md
                border border-white/10
                hover:border-white/20
                transition
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

            <h3 className="text-lg font-semibold text-white">
                {name}
            </h3>

            <p className="mt-2 text-sm text-gray-400">
                {description}
            </p>

            <span
                className="
                    mt-4 inline-block text-xs text-blue-400
                    group-hover:underline
                "
            >
                Open tool →
            </span>
        </Link>
    );
}
