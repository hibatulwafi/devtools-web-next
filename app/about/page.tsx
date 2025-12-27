import Link from "next/link";

export const metadata = {
    title: "About – DevTools Hub",
    description:
        "Learn more about DevTools Hub, a collection of fast, privacy-friendly online developer tools.",
};

export default function AboutPage() {
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
                About DevTools Hub
            </h1>

            <p className="mt-6 text-zinc-400">
                DevTools Hub is a collection of fast, lightweight, and
                privacy-friendly online tools built for developers.
            </p>

            <p className="mt-4 text-zinc-400">
                All tools run entirely in your browser. No data is uploaded
                to any server, and no user input is stored.
            </p>

            <p className="mt-4 text-zinc-400">
                The goal of DevTools Hub is to provide simple utilities that
                help developers work faster without unnecessary complexity.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-white">
                Privacy & Data
            </h2>

            <p className="mt-4 text-zinc-400">
                DevTools Hub does not collect or store any user data. Inputs
                are processed locally in your browser.
            </p>

            <p className="mt-4 text-zinc-400">
                Ads may be displayed to support the development and hosting
                of this site.
            </p>
        </main>
    );
}
