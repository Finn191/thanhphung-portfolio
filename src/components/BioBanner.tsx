export default function BioBanner() {
    return (
        <section className="px-10 py-10 flex items-start gap-8">
            {/* Circular avatar */}
            <div className="flex-shrink-0">
                <div className="w-28 h-28 md:w-36 md:h-36 border-4 border-black shadow-[6px_6px_0px_0px_#000] overflow-hidden">
                    <img
                        src="images/1769962215418.jpg"
                        alt="Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Description */}
            <p className="text-black text-2xl md:text-3xl leading-snug font-bold pt-2">
                Unity Developer with nearly 1.5 years of experience in <span className="bg-[#FFD93D] px-1">WebGL game development</span>, focusing on gameplay systems and performance. Experienced in client–server gameplay and iterative feature development. Currently exploring <span className="bg-[#FFD93D] px-1">mobile puzzle/casual games</span> with a focus on game feel and player experience.
            </p>
        </section>
    )
}
