import "./globals.css";
import Footer from "./components/Footer";
import BackgroundProvider from "./components/ClientBackground";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-black text-white">
        {/* Page Content */}
        <BackgroundProvider />

        <main className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
