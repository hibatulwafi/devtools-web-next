export default function Footer() {
    return (
        <footer
            className="
        mt-16 border-t border-white/10
        bg-black/40 backdrop-blur
      "
        >
            <div
                className="
          max-w-5xl mx-auto px-6 py-6
          flex flex-col md:flex-row
          items-center justify-between
          gap-4 text-sm text-gray-400
        "
            >
                {/* Left */}
                <span>
                    © {new Date().getFullYear()} DevTools Hub
                </span>

                {/* Center */}
                <span className="text-xs text-gray-500 text-center">
                    Built for developers · No data is sent to servers
                </span>

                {/* Right */}
                <nav className="flex gap-4 text-xs">
                    <a href="/about" className="hover:text-gray-300">
                        About
                    </a>
                    <a href="/contact" className="hover:text-gray-300">
                        Contact
                    </a>
                    <a href="/privacy" className="hover:text-gray-300">
                        Privacy
                    </a>
                    <a href="/terms" className="hover:text-gray-300">
                        Terms
                    </a>
                </nav>
            </div>
        </footer>
    );
}