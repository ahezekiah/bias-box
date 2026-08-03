import Image from "next/image";

const values = [
    {
        title: 'Creative Collecting',
        description: 'We create products that help fans display their personalities and celebrate their favorite parts of K-pop culture.'
    },
    {
        title: 'Fan Community',
        description: 'BiasBox is designed around the exictement of sharing collections, trading photocards, and meeting other fans.'
    },
    {
        title: 'New Discoveries',
        description: 'Each monthly concept encourages subscribers to explore new styles, sounds, groups, and eras.'
    },
];

export default function AboutPage() {
    return (
        <>
            <section className="bg-linear-to-b from-fuchsia-950 to-black px-6 py-24">
                <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
                    <div>
                        <p className="font-bold uppercase tracking-[0.3em] text-cyan-300">
                            About BiasBox
                        </p>

                        <h1 className="mt-4 text-5xl font-black sm:text-6xl">
                            Created by fans, for fans
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-purple-100">
                            BiasBox started with a group of K-pop fans who loved Collecting
                            photocards, posters, album inclusions, and concert accessories.
                        </p>
                        
                        <p className="mt-5 text-lg leading-8 text-gray-400">
                            We wanted to create an affordable monthly experience that captures the exictement of a comeback.
                            Each box introduces a fresh concept and gives fans new items, to collect, display, trade, and share.
                        </p>
                    </div>

                    <Image src='/images/team.jpg' alt="The creative team behind BiasBox" 
                        className="h-120 w-full rounded-3xl border border-fuchsia-400/30 object-cover shadow-2xl shadow-fuchsia-500/20" 
                        height={1170} width={782} />
                </div>
            </section>  

            <section className="bg-black px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <p className="font-bold uppercase tracking-widest text-fuchsia-400">
                            Our Mission
                        </p>

                        <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                            Make every month feel like a comeback
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
                            Our mission is to give fans a creative and exciting way to celebrate K-pop culture
                            while building a collection that feels personal to them.
                        </p>
                    </div>
                    
                    <div className="mt-14 grid gap-8 md:grid-cols-3">
                        {values.map((value) => (
                            <article key={value.title} className="rounded-3xl border border-purple-500/30 bg-zinc-950 p-8">
                                <div className="mb-6 h-2 w-16 rounded-full bg-linear-to-r from-fuchsia-400 to-cyan-300" />

                                <h3 className="text-2xl font-bold text-cyan-300">{value.title}</h3>

                                <p className="mt-4 leading-7 text-gray-400">{value.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>  

            <section className="bg-linear-to-r from-purple-800 to-fuchsia-700 px-6 py-20">
                <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
                    <Image src='/images/concert.jpg' alt="Colorful K-pop concert lights" className="h-80 w-full rounded-3xl object-cover" height={1280} width={720} />

                    <div>
                        <h2 className="text-4xl font-black">
                            Inspired by fans experiences
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-white/80">
                            From decorating light sticks to trading photocards before concerts,
                            K-pop fans create memorable experiences around music. 
                            BiasBox brings that same energy into a monthly package.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}