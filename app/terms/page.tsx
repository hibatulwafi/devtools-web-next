import Link from "next/link";

export const metadata = {
    title: "Terms of Service – DevTools Hub",
    description:
        "Terms and conditions for using DevTools Hub online developer tools.",
};

export default function TermsPage() {
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
                Terms of Service
            </h1>

            <p className="mt-6 text-zinc-400">
                By accessing and using DevTools Hub, you agree to the following
                terms and conditions. If you do not agree with these terms,
                please do not use this website.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-white">
                Use of the Service
            </h2>

            <p className="mt-4 text-zinc-400">
                DevTools Hub provides online developer tools for informational
                and productivity purposes only. All tools are provided “as is”
                without any guarantees of accuracy or reliability.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-white">
                No Data Storage
            </h2>

            <p className="mt-4 text-zinc-400">
                All tools on DevTools Hub run entirely in your browser. We do
                not collect, store, or transmit any user input or generated
                data to our servers.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-white">
                Limitation of Liability
            </h2>

            <p className="mt-4 text-zinc-400">
                DevTools Hub shall not be held liable for any damages or losses
                arising from the use or inability to use the tools provided on
                this website.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-white">
                Third-Party Services
            </h2>

            <p className="mt-4 text-zinc-400">
                This website may display third-party advertisements or links.
                DevTools Hub is not responsible for the content, policies, or
                practices of any third-party services.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-white">
                Changes to These Terms
            </h2>

            <p className="mt-4 text-zinc-400">
                We reserve the right to update or modify these Terms of Service
                at any time without prior notice. Continued use of the website
                constitutes acceptance of the updated terms.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-white">
                Contact
            </h2>

            <p className="mt-4 text-zinc-400">
                If you have any questions regarding these Terms of Service,
                please visit our{" "}
                <Link href="/contact" className="text-cyan-400 hover:underline">
                    Contact page
                </Link>.
            </p>
        </main>
    );
}
