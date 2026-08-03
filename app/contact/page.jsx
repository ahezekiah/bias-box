export default function ContactPage() {
    return (
        <>
            <section className="bg-linear-to-br from-black via-purple-950 to-fuchsia-950 px-6 py-24 text-center">
                <div className="mx-auto max-w-4xl">
                    <p className="font-bold uppercase tracking-[0.3em] text-cyan-300">
                        Contact Us
                    </p>

                    <h1 className="mt-4 text-5xl font-black sm:text-6xl">
                        Talk to the BiasBox Team
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-purple-100">
                        Have a question about subscriptions, shipping, box items, 
                        or future themes? Send us a message.
                    </p>
                </div>
            </section>
            
            <section className="bg-black px-6 py-24">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.4fr_0.8fr]">
                    <form className="space-y-6 rounded-3xl border border-fuchsia-400/30 bg-zinc-950 p-8 shadow-xl shadow-fuchsia-500/10">
                        <div>
                            <label htmlFor="name" className="mb-2 block font-bold text-fuchsia-300">Name</label>
                            <input id="name" name="name" type="text" placeholder="Enter your name"
                                className="w-full rounded-xl border border-purple-500/40 bg-black px-4 py-3 text-white 
                                outline-none transition placeholder:text-gray-600 focus:border-cyan-300"/>
                        </div> 
                        
                        <div>
                            <label htmlFor="email" className="mb-2 block font-bold text-fuchsia-300">Email</label>
                            <input id="email" name="email" type="email" placeholder="you@example.com"
                                className="w-full rounded-xl border border-purple-500/40 bg-black px-4 py-3 text-white 
                                outline-none transition placeholder:text-gray-600 focus:border-cyan-300"/>
                        </div>    
                        
                        <div>
                            <label htmlFor="group" className="mb-2 block font-bold text-fuchsia-300">Favorite K-pop Group</label>
                            <input id="group" name="group" type="text" placeholder="Enter your favorite group"
                                className="w-full rounded-xl border border-purple-500/40 bg-black px-4 py-3 text-white 
                                outline-none transition placeholder:text-gray-600 focus:border-cyan-300"/>
                        </div> 
                        
                        <div>
                            <label htmlFor="subject" className="mb-2 block font-bold text-fuchsia-300">Subject</label>
                            <select id="select" name="subject" 
                                className="w-full rounded-xl border border-purple-500/40 bg-black 
                                px-4 py-3 text-white outline-none focus:border-cyan-300">
                                    <option>Subscription Question</option>
                                    <option>Shipping Question</option>
                                    <option>Missing or Damaged Item</option>
                                    <option>Theme Suggestion</option>
                                    <option>Other</option>
                            </select>
                        </div> 
                        
                        <div>
                            <label htmlFor="message" className="mb-2 block font-bold text-fuchsia-300">Message</label>
                            <textarea id="message" name="message" rows={7} placeholder="How can we help?"
                                className="w-full resize-none rounded-xl border border-purple-500/40 bg-black px-4 py-3 
                                text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-300"/>
                        </div>

                        <button type="button" 
                            className="w-full rounded-full bg-linear-to-r from-fuchsia-500 to bg-purple-600 px-6 py-4 font-black transition hover:scale-[1.02]">
                            Send Message
                        </button>
                    </form>

                    <aside className="space-y-6">
                        <div className="rounded-3xl border border-cyan-300/30 bg-cyan-400/10 p-8">
                            <h2 className="text-2xl font-black text-cyan-300">
                                Customer Support
                            </h2>

                            <p className="mt-4 leading-7 text-gray-300">
                                Our customer support team normally responds within one to two business days.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-purple-500/30 bg-zinc-950 p-8">
                            <h2 className="text-2xl font-black text-fuchsia-300">
                                Contact Information
                            </h2>

                            <div className="mt-8 space-y-5 text-gray-300">
                                <div>
                                    <p className="font-bold text-white">Email</p>
                                    <p>hello@biasbox.com</p>
                                </div>
                                
                                <div>
                                    <p className="font-bold text-white">Social Media</p>
                                    <p>@biasboxofficial</p>
                                </div>

                                <div>
                                    <p className="font-bold text-white">Support Hours</p>
                                    <p>Monday-Friday</p>
                                    <p>9:00 AM-5:00 PM MST</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-fuchsia-400/30 bg-linear-to-br from-fuchsia-700 to-purple-800 p-8">
                            <h2 className="text-2xl font-black">
                                Theme Suggestions
                            </h2>

                            <p className="mt-4 leading-7 text-white/80">
                                Have an idea for a future BiasBox concept?
                                Tell us your theme, color, palette, and dream collectible.
                            </p>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    );
}