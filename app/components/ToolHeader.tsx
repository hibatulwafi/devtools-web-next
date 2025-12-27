import Link from "next/link";

type ToolHeaderProps = {
    title: string;
    description: string;
};

export default function ToolHeader({
    title,
    description,
}: ToolHeaderProps) {
    return (
        <header className="relative mb-12 px-1">
            {/* Brand + Back */}
            <div className="mb-4 flex items-center gap-3">
                <Link
                    href="/"
                    className="
            inline-flex items-center justify-center
            h-8 w-8 rounded-lg
            bg-white/5 backdrop-blur-md
            border border-white/10
            text-gray-300
            hover:bg-white/10 hover:text-white
            transition
          "
                    aria-label="Back to Home"
                >
                    ←
                </Link>

                <span className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400">
                    DevTools Hub
                </span>
            </div>

            {/* Accent Line */}
            <div className="absolute -top-4 left-0 h-[2px] w-16 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" />

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                {title}
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-sm md:text-base text-gray-600 dark:text-gray-400">
                {description}
            </p>

            {/* Divider */}
            <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
        </header>
    );
}
