import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ease = 'easeOut' as const

export default function Hero() {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], [0, 80])
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

    return (
        <section
            ref={ref}
            id="hero"
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-20 overflow-hidden"
        >
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Glow accent */}
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 max-w-4xl"
            >
                {/* Eyebrow */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease, delay: 0.1 }}
                    className="text-white/40 text-sm md:text-base font-medium tracking-widest uppercase mb-6"
                >
                    Gameplay Programmer
                </motion.p>

                {/* Main title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease, delay: 0.25 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8"
                >
                    Thanh
                    <br />
                    <span className="text-white/30">Phung.</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease, delay: 0.4 }}
                    className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed mb-10"
                >
                    A game developer specializing in gameplay and systems, focused on writing
                    clean, efficient code and tackling new challenges in game development.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease, delay: 0.55 }}
                    className="flex items-center gap-6"
                >
                    <button
                        onClick={() => {
                            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="group flex items-center gap-3 text-white text-sm font-medium tracking-wide cursor-pointer hover:opacity-70 transition-opacity"
                    >
                        <span>Xem dự án</span>
                        <motion.span
                            className="inline-block"
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                        >
                            →
                        </motion.span>
                    </button>

                    <span className="w-px h-4 bg-white/20" />

                    <div className="flex items-center gap-4">
                        {[
                            { label: 'LinkedIn', href: '#' },
                            { label: 'GitHub', href: '#' },
                            { label: 'Instagram', href: '#' },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                className="text-xs text-white/40 hover:text-white/80 transition-colors tracking-widest uppercase"
                            >
                                {social.label}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <motion.div
                    className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"
                    animate={{ scaleY: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
            </motion.div>
        </section>
    )
}
