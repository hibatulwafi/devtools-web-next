import Link from "next/link";

export const metadata = {
    title: "Privacy Policy – DevTools Hub",
    description:
        "Privacy policy explaining how DevTools Hub handles user data and privacy.",
};

export default function PrivacyPolicyPage() {
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
                Privacy Policy
            </h1>

            <p className="mt-6 text-zinc-400">
                Your privacy is important to us. This Privacy Policy document
                explains how DevTools Hub collects, uses, and protects your
                information when you use this website.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-white">
                Information We Do Not Collect
            </h2>

            <p className="mt-4 text-zinc-400">
                DevTools Hub does not collect, store, or transmit any personal
                data or user input. All tools operate entirely within your
                browser.
            </p>

            <p className="mt-4 text-zinc-400">
                Any data you enter into the tools (such as JSON, tokens, or
                encoded text) is processed locally and never sent to our
                servers.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-white">
                Cookies and Advertising
            </h2>

            <p className="mt-4 text-zinc-400">
                DevTools Hub may display third-party advertisements to support
                the operation of this website. These third-party services may
                use cookies, web beacons, or similar technologies to display
                relevant ads.
            </p>

            <p className="mt-4 text-zinc-400">
                DevTools Hub does not control how third-party advertisers
                collect or use your data. You should review the respective
                privacy policies of these third-party services for more
                information.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-white">
                Third-Party Privacy Policies
            </h2>

            <p className="mt-4 text-zinc-400">
                DevTools Hub&apos;s Privacy Policy does not apply to other
                advertisers or websites. We encourage you to consult the
                privacy policies of third-party ad servers or websites for
                more detailed information about their practices and
                instructions on how to opt out of certain options.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-white">
                Children&apos;s Information
            </h2>

            <p className="mt-4 text-zinc-400">
                DevTools Hub does not knowingly collect any personal
                identifiable information from children under the age of 13.
                If you believe that your child has provided personal
                information on this website, please contact us and we will
                promptly remove such information.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-white">
                Changes to This Privacy Policy
            </h2>

            <p className="mt-4 text-zinc-400">
                We may update this Privacy Policy from time to time. Any
                changes will be posted on this page, and the updated version
                will be effective immediately.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-white">
                Contact Us
            </h2>

            <p className="mt-4 text-zinc-400">
                If you have any questions or concerns about this Privacy
                Policy, please visit our{" "}
                <Link
                    href="/contact"
                    className="text-cyan-400 hover:underline"
                >
                    Contact page
                </Link>.
            </p>
        </main>
    );
}
