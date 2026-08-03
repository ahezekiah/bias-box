import Link from "next/link";

export default function Footer(){
    return (
        <footer className="border-t border-fuchsia-400/20 bg-black text-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-black text-fuchsia-400">BIASBOX</h2>
                    <p className="mt-2 text-sm text-gray-400">Bringing a new K-pop era to your door every month.</p>
                </div>

                <div className="flex gap-8 font-semibold">
                    <Link href='/contact' className="transition hover:text-cyan-300">
                        Contact Us
                    </Link>
                    <Link href='/about' className="transition hover:text-fuchsia-400">
                        About Us
                    </Link>
                </div>

                <p className="text-sm text-gray-500">
                    &copy; 2026 BiasBox
                </p>
            </div>
        </footer>
    );
}