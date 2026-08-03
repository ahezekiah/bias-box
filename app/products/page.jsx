import { Camera, FileImage, Sparkles, Gem, Ticket, Gift  } from "lucide-react"; 
import Image from "next/image";

const boxItems = [
    {
        icon: <Camera />,
        title: 'Photocard Pack',
        description: "Each box includes a collection of original photocard'\s theme."
    },
    {
        icon: <FileImage />,
        title: 'Exclusive Poster',
        description: 'Decorate your room with a full-color poster created especially got BiasBox members.'
    },
    {
        icon: <Sparkles />,
        title: 'Sticker Collection',
        description: 'Use holographic and themed stickers to decorate your laptop, journal, or photocard binder.'
    },
    {
        icon: <Gem />,
        title: 'Fan Accessory',
        description: 'Receive wearable accessories such as braclets, pins, necklaces, or phone charms.'
    },
    {
        icon: <Ticket />,
        title: 'Collector Ticket',
        description: "Every box contains a decorative concert-style ticket featuring that month'\s concept."
    },
    {
        icon: <Gift />,
        title: 'Mystery Item',
        description: 'Open one surprise collectible that could include a keychain, standee, mini album, or plush.'
    },
];

export default function ProductsPage() {
    return (
        <>
            <section className="bg-linear-to-b from-purple-950 to-black px-6 py-24 text-center">
                <div className="mx-auto max-w-4xl">
                    <p className="font-bold uppercase tracking-[0.3em] text-cyan-300">Inside BiasBox</p>

                    <h1 className="mt-4 text-5xl font-black sm:text-6xl">Your monthly fandom collection</h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-purple-100">
                        Every BiasBox contains a curated collection of K-pop-inspired
                        items built around one unique concept, color palette, and era.
                    </p>
                </div>
            </section>

            <section className="bg-black px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <Image 
                            height={794} width={781} loading="eager"
                            src='/images/photocards.jpg' alt="K-pop-inspired photocards and collectibles"
                            className="h-145 w-full rounded-3xl border border-fuchsia-400/30 object-cover shadow-xl shadow-fuchsia-500/10"/>

                        <div>
                            <p className="font-bold uppercase tracking-widest text-fuchsia-400">Monthly concept</p>

                            <h2 className="mt-3 text-4xl font-bold">Different theme. Different experience.</h2>

                            <p className="mt-6 text-lg leading-8 text-gray-400">
                                One month might feature a bright summer comeback, while
                                the next could use a dark cyperpunk or elegant royal
                                concept. The items inside your box are designed to match
                                the theme.
                            </p>

                            <div className="mt-8 rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-6">
                                <h3 className="text-xl font-black text-cyan-300">Example Theme: Neon Midnight</h3>

                                <p className="mt-3 text-gray-300">
                                    A futuristic concept featuring metallic photocards,
                                    holographic stickers, a neon phone charm, and a 
                                    cyberpunk-inspired poster.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {boxItems.map((item) => (
                            <article key={item.title} 
                                className="rounded-3xl border border-purple-500/30 bg-zinc-950 p-8 transition hover:-translate-y-2 hover:border-fuchsia-400">
                                    <span className="text-5xl">{item.icon}</span>

                                    <h2 className="mt-5 text-2xl font-bold text-fuchsia-300">{item.title}</h2>

                                    <p className="mt-3 leading-7 text-gray-400">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}