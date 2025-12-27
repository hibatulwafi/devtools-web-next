import Link from "next/link";

export const metadata = {
    title: "Contact – DevTools Hub",
    description:
        "Get in touch with DevTools Hub for feedback, suggestions, or bug reports.",
};

export default function ContactPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-24">
            {/* Back Button */}
            <Link
                href="/"
                className="
          inline-flex items-center gap-2
          mb-6 text-sm text-zinc-400
          hover:text-white transition
        "
            >
                ← Back to Home
            </Link>

            <h1 className="text-3xl font-bold text-white">
                Contact
            </h1>

            <p className="mt-6 text-zinc-400">
                Have feedback, suggestions, or found a bug?
                We’d love to hear from you.
            </p>

            <p className="mt-4 text-zinc-400">
                You can reach us through the following channels:
            </p>

            <ul className="mt-6 space-y-3 text-zinc-300">
                <li>
                    📧 Email:{" "}
                    <a
                        href="mailto:hello@devtoolshub.web.id"
                        className="text-cyan-400 hover:underline"
                    >
                        hello@devtoolshub.web.id
                    </a>
                </li>

                <li>
                    💬 GitHub:{" "}
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                    >
                        github.com/yourusername
                    </a>
                </li>
            </ul>
        </main>
    );
}
