import Link from "next/link";
import Image from "next/image";
import { Camera, MicVocal, Gift } from "lucide-react";


const highlights = [
  {
    icon: <Camera />,
    title: 'Exclusive Photocards',
    description: 'Collect original BiasBox photcards inspired by different K-pop concepts and eras.'
  },
  {
    icon: <MicVocal />,
    title: 'Concert-Ready Accessories',
    description: 'Receive bracelets, phone charms, pins, keychains, and other fan accessories.'
  },
  {
    icon: <Gift />,
    title: 'Monthly Surprises',
    description: 'Every monthly box includes a suprise collectible chosen around a new theme.'
  },
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-linear-to-br from-black via-purple-950 to-fuchsia-950 px-6 py-24">
        <div className="absolute left-10 top-20 h-52 w-52 rounded-full bg-fuchsia-500/20 blur-3xl"/>
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"/>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-bold uppercase tracking-[0.3em] text-cyan-300">A new era every month</p>

            <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Unbox your next
              <span className="block bg-linear-to-r from-fuchsia-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
                K-pop obsession
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-purple-100">
              BiasBox is a monthly subscription box filled with photocards, posters,
              stickers, accessories, and exclusive collectibles created for K-pop fans.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href='/plans' className="rounded-full bg-fuchsia-500 px-8 py-4 text-center font-bold transition hover:scale-105 hover:bg-fuchsia-400">
                  Choose Your Box
                </Link>
                <Link href='/products' className="rounded-full border border-cyan-300 px-8 py-4 text-center font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-black">
                  See What&apos;s Inside
                </Link>
            </div>
          </div>

          <div className="rounded-4xl border border-fuchsia-400/40 bg-white/10 p-4 shadow-2xl shadow-fuchsia-500/20 backdrop-blur-md">
            <Image src='/images/bias-box.jpg' alt="A K-pop themed BiasBox filled with collectibles" loading="eager" className="h-145 w-full rounded-3xl object-cover" width={300} height={300}/>
          </div>
        </div>
      </section>
      
      <section className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-fuchsia-400">
              Made for fans
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Everything you need for your collection
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
              Each box follows a different visual concept, giving you something to collect and display every month.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {highlights.map((highlight) => (
              <article key={highlight.title} 
                className="rounded-3xl border border-purple-500/30 bg-black p-8 transition hover:-translate-y-2 hover:border-fuchsia-400
                    hover:shadow-xl hover:shadow-fuchsia-500/10">
                <span className="text-5xl">{highlight.icon}</span>

                <h3 className="mt-6 text-2xl font-bold text-cyan-300">{highlight.title}</h3>

                <p className="mt-4 leading-7 text-gray-400">{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-linear-to-r from-fuchsia-700 via-purple-700 to-cyan-700 px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-black">Ready to enter your BiasBox era?</h2>

            <p className="mt-5 text-lg text-white/80">
              Pick a subscription plan and receive your first themed box next month.
            </p>

            <Link href='/plans' className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-purple-900 transition hover:scale-105">
              View Subscription Plans
            </Link>
          </div>
      </section>
    </>
  );
}
