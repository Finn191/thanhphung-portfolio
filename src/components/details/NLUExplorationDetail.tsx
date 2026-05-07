import type { Project } from '../../types'
import DetailLayout from './DetailLayout'

interface Props {
    project: Project
    onClose: () => void
}

export default function NLUExplorationDetail({ project, onClose }: Props) {
    return (
        <DetailLayout project={project} onClose={onClose}>
            <div className="mx-auto w-full max-w-[1000px] px-6 py-10">

                {/* TITLE */}
                <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight text-[#FF6B6B] mb-6 leading-none">
                    NLU Exploration
                </h1>

                {/* INFO STRIP */}
                <div className="border-4 border-black shadow-[6px_6px_0px_0px_#000] mb-12 overflow-hidden">
                    <div className="bg-[#FFD93D] border-b-4 border-black px-5 py-2">
                        <p className="font-black text-xs uppercase tracking-widest">Project Info</p>
                    </div>
                    <div className="grid grid-cols-2 bg-white divide-x-2 divide-black">
                        <div className="p-4">
                            <p className="text-black/50 font-black text-xs uppercase tracking-widest mb-1">👤 Role</p>
                            <p className="text-black font-black text-sm">Game Developer</p>
                        </div>
                        <div className="p-4">
                            <p className="text-black/50 font-black text-xs uppercase tracking-widest mb-1">👥 Team</p>
                            <p className="text-black font-black text-sm">2 people</p>
                        </div>
                        <div className="p-4 border-t-2 border-black border-r-2">
                            <p className="text-black/50 font-black text-xs uppercase tracking-widest mb-1">⚙️ Engine</p>
                            <p className="text-black font-black text-sm">Cocos Creator</p>
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
                        <h2 className="font-black text-lg uppercase tracking-tight">🏫 Overview</h2>
                    </div>
                    <div className="p-5 bg-white space-y-3">
                        <p className="font-bold text-base leading-relaxed">
                            NLU Exploration is a multiplayer pixel-art game simulating Nong Lam University's campus, where players take on the role of a first-year student and explore the campus through activities and quests.
                        </p>
                        <p className="font-bold text-base leading-relaxed">Players can:</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Choose one of four professions</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Interact and collaborate with other players in the same world</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Complete quests in real-time</li>
                        </ul>
                        <div className="flex items-start gap-3 border-l-4 border-black bg-[#FFD93D]/40 px-4 py-3">
                            <span className="font-black text-xl leading-none flex-shrink-0">★</span>
                            <p className="font-bold text-base leading-relaxed">The project is currently being used as the university's official campus introduction tool.</p>
                        </div>
                    </div>

                    {/* GAMEPLAY VIDEO */}
                    <div className="border-t-4 border-black overflow-hidden">
                        <div className="bg-black px-3 py-1.5">
                            <span className="text-white font-black text-xs uppercase tracking-widest">▶ Gameplay</span>
                        </div>
                        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/tCFtNMJ_lEo"
                                title="NLU Exploration Gameplay"
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
                                'Proposed and developed the initial game concept',
                                'Designed and implemented gameplay for 2 professions',
                                'Contributed to the architecture of both frontend and backend',
                                'Worked with the real-time multiplayer system',
                                'Collaborated directly with 1 teammate to deliver the full product',
                                'Compiled and finalized the thesis documentation',
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
                    CHALLENGE 1: MULTIPLAYER SYNC
                ══════════════════════════════════════════ */}
                <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                    <div className="px-5 py-3 border-b-4 border-black bg-[#FF9B6A] flex items-center gap-3">
                        <span className="text-xs font-black uppercase tracking-widest border-2 border-black bg-white px-2 py-0.5">Challenge</span>
                        <h2 className="font-black text-lg uppercase tracking-tight">🌐 Multiplayer Synchronization</h2>
                    </div>
                    <div className="p-5 bg-white space-y-3">
                        <div className="border-4 border-black bg-[#FFD93D] p-4 shadow-[4px_4px_0px_0px_#000]">
                            <p className="font-black text-xs uppercase tracking-widest mb-2">⚠ Problem</p>
                            <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2 h-2 bg-black/40"></span>Syncing state between multiple players in the same world</li>
                                <li className="flex items-start gap-2 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2 h-2 bg-black/40"></span>Preventing desync issues</li>
                            </ul>
                        </div>

                        <h4 className="font-black text-base uppercase tracking-tight pt-3 pl-3 border-l-4 border-black">Solution</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Used WebSocket to sync data in real-time</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Server acts as the source of truth</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Client continuously receives and updates state</li>
                        </ul>

                        <div className="border-4 border-black bg-[#A8E6CF] p-4 shadow-[4px_4px_0px_0px_#000]">
                            <p className="font-black text-xs uppercase tracking-widest mb-2">✓ Result</p>
                            <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>Players can interact smoothly in the same environment</li>
                                <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>Minimized errors related to state inconsistency</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ══════════════════════════════════════════
                    CHALLENGE 2: SMALL TEAM
                ══════════════════════════════════════════ */}
                <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                    <div className="px-5 py-3 border-b-4 border-black bg-[#FF9B6A] flex items-center gap-3">
                        <span className="text-xs font-black uppercase tracking-widest border-2 border-black bg-white px-2 py-0.5">Challenge</span>
                        <h2 className="font-black text-lg uppercase tracking-tight">🤝 Working in a Small Team</h2>
                    </div>
                    <div className="p-5 bg-white space-y-3">
                        <div className="border-4 border-black bg-[#FFD93D] p-4 shadow-[4px_4px_0px_0px_#000]">
                            <p className="font-black text-xs uppercase tracking-widest mb-2">⚠ Problem</p>
                            <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2 h-2 bg-black/40"></span>Small team (2 people) → each person had to cover multiple areas</li>
                                <li className="flex items-start gap-2 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2 h-2 bg-black/40"></span>Developing the game while also completing the thesis</li>
                            </ul>
                        </div>

                        <h4 className="font-black text-base uppercase tracking-tight pt-3 pl-3 border-l-4 border-black">Solution</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Clearly divided responsibilities between gameplay and systems</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Proactively communicated to ensure a consistent implementation direction</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Reviewed and refined output before finalizing</li>
                        </ul>

                        <div className="border-4 border-black bg-[#A8E6CF] p-4 shadow-[4px_4px_0px_0px_#000]">
                            <p className="font-black text-xs uppercase tracking-widest mb-2">✓ Result</p>
                            <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>Project delivered on schedule</li>
                                <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>Product can be deployed in production and used long-term</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </DetailLayout>
    )
}
