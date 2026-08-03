import { Dot } from "lucide-react"; 

const plans = [
    {
        name: 'Trainee',
        price: '$19',
        description: 'A smaller monthly box for fans beginning their collection.',
        features: [
            '3 themed photocards',
            'Sticker pack',
            'Mini poster',
            'Digital phone wallpaper',
        ]
    },
    {
        name: 'Idol',
        price: '$39',
        description: 'The complete monthly BiasBox experience for dedicated fans.',
        features: [
            '8 themed photocards',
            'Full-size poster',
            'Fan accessory',
            'Collector ticket',
            'Mystery collectible',
            'Digital bonus content',
        ],
        featured: true
    },
    {
        name: 'All-Star',
        price: '$59',
        description: 'A premium collection with more items and member-exclusive bonuses.',
        features: [
            '12 premium photocards',
            'Two full-size posters',
            'Two fan accessories',
            'Premium mystery collectible',
            'Exclusive member pin',
            'Early access to future boxes',
        ]
    },
];

export default function PlansPage(){
    return (
        <>
            <section className="bg-linear-to-br from-black via-fuchsia-950 to-purple-950 px-6 py-24 text-center">
                <div className="mx-auto max-w-4xl">
                    <p className="font-bold uppercase tracking-[0.3em] text-cyan-300">
                        Subscription Plans
                    </p>

                    <h1 className="mt-4 text-5xl font-black sm:text-6xl">
                        Choose your fan level
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-purple-100">
                        Select the box that matcthes your collection goals. Plans can
                        be paused or canceled at any time.
                    </p>
                </div>
            </section>

            <section className="bg-black px-6 py-24">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <article key={plan.name}
                            className={`relative rounded-3xl p-8 transition hover:-translate-y-2 ${plan.featured
                                ? 'border-2 border-cyan-300 bg-linear-to-br from-fuchsia-600 to-purple-800 shadow-2xl shadow-fuchsia-500/30' 
                                : 'border border-purple-500/40 bg-zinc-950'
                            }`}>
                                {plan.featured && (
                                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-300 px-5 py-2 text-sm font-black uppercase tracking-widest text-black">
                                        Fan Favorite
                                    </span>
                                )}

                                <h2 className="text-3xl font-black">{plan.name}</h2>

                                <div className="mt-5">
                                    <span className="text-5xl font-black">{plan.price}</span>
                                    <span className="text-gray-300"> / month</span>
                                </div>

                                <p className="mt-5 leading-7 text-gray-300">{plan.description}</p>

                                <ul className="mt-8 space-y-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <span className="text-cyan-300"><Dot /></span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button type="button"
                                className={`mt-10 w-full rounded-full px-6 py-4 font-bold transition hover:scale-105 cursor-pointer ${plan.featured
                                    ? 'bg-white text-purple-900 hover:bg-cyan-200' 
                                    : 'bg-fuchsia-500 text-white hover:bg-fuchsia-400'
                                }`}>
                                    Select {plan.name}
                                </button>
                        </article>
                    ))}
                </div>
            </section>

            <section className="bg-zinc-950 px-6 py-20">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-center text-4xl font-black">
                        Subscription Questions
                    </h2>

                    <div className="mt-10 space-y-5">
                        <article className="rounded-2xl border border-purple-500/30 bg-black p-6">
                            <h3 className="text-xl font-bold text-fuchsia-300">
                                When will my box ship?
                            </h3>
                            <p className="mt-3 text-gray-400">
                                Monthly boxes ship during the first week of the month.
                            </p>
                        </article>
                        
                        <article className="rounded-2xl border border-purple-500/30 bg-black p-6">
                            <h3 className="text-xl font-bold text-fuchsia-300">
                                Can I cancel my subscription?
                            </h3>
                            <p className="mt-3 text-gray-400">
                                Yes. You can pause or cancel your plan before your next billing date.
                            </p>
                        </article>
                        
                        <article className="rounded-2xl border border-purple-500/30 bg-black p-6">
                            <h3 className="text-xl font-bold text-fuchsia-300">
                                Are the items official artist merchandise?
                            </h3>
                            <p className="mt-3 text-gray-400">
                                BiasBox contains original fna-made products and is not officially conntected
                                to any entertainment comapany or artist.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}