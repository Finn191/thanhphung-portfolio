import type { Project } from '../../types'
import DetailLayout from './DetailLayout'

interface Props {
    project: Project
    onClose: () => void
}

export default function StarkmineDetail({ project, onClose }: Props) {
    return (
        <DetailLayout project={project} onClose={onClose}>
            <div className="mx-auto w-full max-w-[1000px] px-6 py-10">

                {/* TITLE */}
                <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight text-[#FF6B6B] mb-6 leading-none">
                    Starkmine
                </h1>

                {/* INFO STRIP */}
                <div className="border-4 border-black shadow-[6px_6px_0px_0px_#000] mb-12 overflow-hidden">
                    <div className="bg-[#C4B5FD] border-b-4 border-black px-5 py-2">
                        <p className="font-black text-xs uppercase tracking-widest">Project Info</p>
                    </div>
                    <div className="grid grid-cols-2 bg-white divide-x-2 divide-black">
                        <div className="p-4">
                            <p className="text-black/50 font-black text-xs uppercase tracking-widest mb-1">👤 Role</p>
                            <p className="text-black font-black text-sm">Unity Developer</p>
                        </div>
                        <div className="p-4">
                            <p className="text-black/50 font-black text-xs uppercase tracking-widest mb-1">👥 Team</p>
                            <p className="text-black font-black text-sm">2 people (1 game developer, 1 backend)</p>
                        </div>
                        <div className="p-4 border-t-2 border-black border-r-2">
                            <p className="text-black/50 font-black text-xs uppercase tracking-widest mb-1">⚙️ Engine</p>
                            <p className="text-black font-black text-sm">Unity · C#</p>
                        </div>
                        <div className="p-4 border-t-2 border-black">
                            <p className="text-black/50 font-black text-xs uppercase tracking-widest mb-1">📱 Platform</p>
                            <p className="text-black font-black text-sm">WebGL</p>
                        </div>
                    </div>
                </div>

                {/* ══════════════════════════════════════════
                    MÔ TẢ
                ══════════════════════════════════════════ */}
                <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                    <div className="px-5 py-3 border-b-4 border-black bg-[#A8E6CF]">
                        <h2 className="font-black text-lg uppercase tracking-tight">🪐 Overview</h2>
                    </div>
                    <div className="p-5 bg-white space-y-3">
                        <p className="font-bold text-base leading-relaxed">
                            An idle WebGL game where players open orbs to receive spacecraft and use them to mine resources from planets.
                        </p>
                        <p className="font-bold text-base leading-relaxed">Core game loop:</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Open orbs to receive random spacecraft</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Use spacecraft to attack and collect resources</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Spend resources to upgrade and unlock stronger spacecraft</li>
                        </ul>
                        <p className="font-bold text-base leading-relaxed">
                            In this project, I was responsible for all gameplay and client systems.
                        </p>
                    </div>

                    {/* SCREENSHOT + VIDEO */}
                    <div className="border-t-0 overflow-hidden">
                        <div className="bg-black px-3 py-1.5">
                            <span className="text-white font-black text-xs uppercase tracking-widest">▶ Gameplay</span>
                        </div>
                        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/zWaUuntcsak"
                                title="Starkmine Gameplay"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>

                {/* ══════════════════════════════════════════
                    RESPONSIBILITIES
                ══════════════════════════════════════════ */}
                <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                    <div className="px-5 py-3 border-b-4 border-black bg-[#FFD93D]">
                        <h2 className="font-black text-lg uppercase tracking-tight">📋 Responsibilities</h2>
                    </div>
                    <div className="p-5 bg-white">
                        <ul className="space-y-2">
                            {[
                                'Built the core gameplay loop (gacha → combat → resource → upgrade)',
                                'Implemented the gacha system (random spacecraft from orbs)',
                                'Designed and implemented the progression system (upgrades, power scaling)',
                                'Built the auto-combat logic (spacecraft attacking planets)',
                                'Managed resource state and idle growth over time',
                                'Integrated gameplay with the backend system',
                                'Optimized performance for WebGL',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 font-bold text-base">
                                    <span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* ══════════════════════════════════════════
                    CHALLENGE 3: PERFORMANCE
                ══════════════════════════════════════════ */}
                <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                    <div className="px-5 py-3 border-b-4 border-black bg-[#C4B5FD] flex items-center gap-3">
                        <span className="text-xs font-black uppercase tracking-widest border-2 border-black bg-white px-2 py-0.5">Technical</span>
                        <h2 className="font-black text-lg uppercase tracking-tight">⚡ Performance (WebGL)</h2>
                    </div>
                    <div className="p-5 bg-white space-y-3">
                        <p className="font-bold text-base leading-relaxed">Since the game runs on WebGL, I focused on:</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Preloaded assets upfront to avoid runtime stutters</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Used a CDN to reduce initial load time</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Minimized allocations in the gameplay loop to avoid GC spikes</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Reduced the number of simultaneously active objects</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Minimized unnecessary processing in Update()</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Maintained a stable 60 FPS</li>
                        </ul>
                    </div>
                </div>
                {/* ══════════════════════════════════════════
                    CHALLENGE 1: PROGRESSION
                ══════════════════════════════════════════ */}
                <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                    <div className="px-5 py-3 border-b-4 border-black bg-[#FF9B6A] flex items-center gap-3">
                        <span className="text-xs font-black uppercase tracking-widest border-2 border-black bg-white px-2 py-0.5">Challenge</span>
                        <h2 className="font-black text-lg uppercase tracking-tight">📈 Gameplay Loop & Progression</h2>
                    </div>
                    <div className="p-5 bg-white space-y-3">
                        <div className="border-4 border-black bg-[#FFD93D] p-4 shadow-[4px_4px_0px_0px_#000]">
                            <p className="font-black text-xs uppercase tracking-widest mb-2">⚠ Problem</p>
                            <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2 h-2 bg-black/40"></span>If progression is too fast → the game loses motivation</li>
                                <li className="flex items-start gap-2 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2 h-2 bg-black/40"></span>If too slow → players are likely to drop off</li>
                            </ul>
                        </div>

                        <h4 className="font-black text-base uppercase tracking-tight pt-3 pl-3 border-l-4 border-black">Solution</h4>
                        <p className="font-bold text-base">Tuned the scaling between:</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Spacecraft power</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Resource yield</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Upgrade cost</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Ran multiple test rounds to find the right pacing</li>
                        </ul>

                        <div className="border-4 border-black bg-[#A8E6CF] p-4 shadow-[4px_4px_0px_0px_#000]">
                            <p className="font-black text-xs uppercase tracking-widest mb-2">✓ Result</p>
                            <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>Gameplay has a stable rhythm</li>
                                <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>Players always have a next goal</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ══════════════════════════════════════════
                    CHALLENGE 2: GACHA
                ══════════════════════════════════════════ */}
                <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                    <div className="px-5 py-3 border-b-4 border-black bg-[#FF9B6A] flex items-center gap-3">
                        <span className="text-xs font-black uppercase tracking-widest border-2 border-black bg-white px-2 py-0.5">Challenge</span>
                        <h2 className="font-black text-lg uppercase tracking-tight">🎲 Gacha System (Server-side Random)</h2>
                    </div>
                    <div className="p-5 bg-white space-y-3">
                        <div className="border-4 border-black bg-[#FFD93D] p-4 shadow-[4px_4px_0px_0px_#000]">
                            <p className="font-black text-xs uppercase tracking-widest mb-2">⚠ Problem</p>
                            <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2 h-2 bg-black/40"></span>Need to ensure random results can't be manipulated by the client</li>
                                <li className="flex items-start gap-2 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2 h-2 bg-black/40"></span>While still maintaining a smooth experience</li>
                            </ul>
                        </div>

                        <h4 className="font-black text-base uppercase tracking-tight pt-3 pl-3 border-l-4 border-black">Solution</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Random logic is handled server-side</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Client only sends an open-orb request and receives the result</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Used weighted distribution to control spacecraft rarity rates</li>
                        </ul>

                        <div className="border-4 border-black bg-[#A8E6CF] p-4 shadow-[4px_4px_0px_0px_#000]">
                            <p className="font-black text-xs uppercase tracking-widest mb-2">✓ Result</p>
                            <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>Reliable gacha system</li>
                                <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>Prevents client-side manipulation of results</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </DetailLayout>
    )
}
