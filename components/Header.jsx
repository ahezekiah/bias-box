import Link from "next/link";

export default function Header(){
    return (
        <header className="sticky top-0 z-50 border-b border-fuchsia-400/20 bg-black/90 text-white backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <Link href='/' className="text-2xl font-black tracking-wider text-fuchsia-400">
                        BIASBOX                
                </Link>

                <div className="flex items-center gap-4 text-sm font-semibold sm:gap-8 sm:text-base">
                    <Link href='/' className="transition hover:text-fuchsia-400">
                        Home
                    </Link>
                    <Link href='/products' className="transition hover:text-cyan-300">
                        What&apos;s Inside
                    </Link>
                    <Link href='/plans' className="transition hover:text-fuchsia-400">
                        Plans
                    </Link>
                </div>
            </nav>
        </header>
    );
}