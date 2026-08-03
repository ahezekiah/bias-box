import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: "BiasBox",
  description: "Monthly K-pop subscription boxes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-black text-white">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
