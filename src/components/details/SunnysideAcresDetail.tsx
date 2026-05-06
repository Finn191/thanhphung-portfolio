import type { Project } from '../../types'
import DetailLayout from './DetailLayout'

interface Props {
    project: Project
    onClose: () => void
}

export default function SunnysideAcresDetail({ project, onClose }: Props) {
    return (
        <DetailLayout project={project} onClose={onClose}>
            <div className="mx-auto w-full max-w-[1000px] px-6 py-10">

                {/* TITLE */}
                <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight text-[#FF6B6B] mb-6 leading-none">
                    Sunnyside Acres
                </h1>

                {/* INFO STRIP */}
                <div className="border-4 border-black shadow-[6px_6px_0px_0px_#000] mb-12 overflow-hidden">
                    <div className="bg-[#A8E6CF] border-b-4 border-black px-5 py-2">
                        <p className="font-black text-xs uppercase tracking-widest">Project Info</p>
                    </div>
                    <div className="grid grid-cols-2 bg-white divide-x-2 divide-black">
                        <div className="p-4">
                            <p className="text-black/50 font-black text-xs uppercase tracking-widest mb-1">👤 Role</p>
                            <p className="text-black font-black text-sm">Unity Developer</p>
                        </div>
                        <div className="p-4">
                            <p className="text-black/50 font-black text-xs uppercase tracking-widest mb-1">👥 Team</p>
                            <p className="text-black font-black text-sm">5 people (2 frontend, 1 backend, 1 contractor, 1 designer/QA)</p>
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
                        <h2 className="font-black text-lg uppercase tracking-tight">🌾 Overview</h2>
                    </div>
                    <div className="p-5 bg-white space-y-3">
                        <p className="font-bold text-base leading-relaxed">
                            An online WebGL game combining multiplayer with instance-based gameplay.
                        </p>
                        <p className="font-bold text-base leading-relaxed">
                            Players can meet and move around in a shared area (home map), while each player has their own private area for farming and developing.
                        </p>
                        <p className="font-bold text-base leading-relaxed">
                            In this project, I was one of two developers, primarily responsible for gameplay with some involvement in UI.
                        </p>
                    </div>

                    {/* GAMEPLAY VIDEO */}
                    <div className="border-t-4 border-black overflow-hidden">
                        <div className="bg-black px-3 py-1.5">
                            <span className="text-white font-black text-xs uppercase tracking-widest">▶ Gameplay</span>
                        </div>
                        <video
                            className="w-full block"
                            src={`${import.meta.env.BASE_URL}images/sunnyside-acres/GamePlay.mp4`}
                            controls
                            loop
                            playsInline
                        />
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
                                'Built the core gameplay loop (planting → growing → harvesting)',
                                'Implemented main world interactions (planting, harvesting, object interactions)',
                                'Managed inventory logic and item state',
                                'Synchronized gameplay state with the backend',
                                'Collaborated with teammates to finalize UI and gameplay integration',
                                'Optimized performance for WebGL',
                                'Fixed bugs and supported QA during testing',
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
                        <p className="font-bold text-base leading-relaxed">Running on WebGL, I focused on several key areas:</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Preloaded assets upfront to ensure uninterrupted gameplay</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Used a CDN to reduce initial load time for WebGL files (WASM, data, assets)</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Minimized allocations in the gameplay loop to avoid GC spikes</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Reduced the number of simultaneously active objects</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Minimized unnecessary processing in Update()</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Capped the target frame rate at 60 FPS for a stable experience</li>
                        </ul>
                        <div className="flex items-start gap-3 border-l-4 border-black bg-black/5 px-4 py-3">
                            <span className="font-black text-xl leading-none flex-shrink-0">→</span>
                            <p className="font-bold text-base leading-relaxed">I also reduced server messages and only synced when necessary.</p>
                        </div>
                    </div>
                </div>

                {/* ══════════════════════════════════════════
                        CHALLENGE 1: MULTIPLAYER
                    ══════════════════════════════════════════ */}
                <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                    <div className="px-5 py-3 border-b-4 border-black bg-[#FF9B6A] flex items-center gap-3">
                        <span className="text-xs font-black uppercase tracking-widest border-2 border-black bg-white px-2 py-0.5">Challenge</span>
                        <h2 className="font-black text-lg uppercase tracking-tight">🌐 Multiplayer & Instance-Based Gameplay</h2>
                    </div>
                    <div className="p-5 bg-white space-y-3">
                        <p className="font-bold text-base leading-relaxed">
                            The game isn't fully multiplayer for all systems — it's split into two parts:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span><span><span className="font-black">Shared area (home map):</span> multiple players appear and move together</span></li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span><span><span className="font-black">Personal area (island):</span> each player has their own instance</span></li>
                        </ul>

                        <div className="border-4 border-black bg-[#FFD93D] p-4 shadow-[4px_4px_0px_0px_#000]">
                            <p className="font-black text-xs uppercase tracking-widest mb-2">⚠ Problem</p>
                            <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2 h-2 bg-black/40"></span>Syncing player positions with multiple players online</li>
                                <li className="flex items-start gap-2 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2 h-2 bg-black/40"></span>Avoiding jitter or delay when updating positions</li>
                                <li className="flex items-start gap-2 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2 h-2 bg-black/40"></span>Keeping multiplayer and personal gameplay states separate</li>
                            </ul>
                        </div>

                        <h4 className="font-black text-base uppercase tracking-tight pt-3 pl-3 border-l-4 border-black">Solution</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Synced positions at intervals instead of every frame</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Client only sends necessary data; server broadcasts it back</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Clearly separated multiplayer logic (movement) from gameplay logic (farming)</li>
                        </ul>

                        <div className="border-4 border-black bg-[#A8E6CF] p-4 shadow-[4px_4px_0px_0px_#000]">
                            <p className="font-black text-xs uppercase tracking-widest mb-2">✓ Result</p>
                            <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>Movement in the shared area is stable</li>
                                <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>Core gameplay is unaffected by network issues</li>
                                <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>Significantly fewer state-related bugs</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ══════════════════════════════════════════
                        CHALLENGE 2: GAMEPLAY SYNC
                    ══════════════════════════════════════════ */}
                <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                    <div className="px-5 py-3 border-b-4 border-black bg-[#FF9B6A] flex items-center gap-3">
                        <span className="text-xs font-black uppercase tracking-widest border-2 border-black bg-white px-2 py-0.5">Challenge</span>
                        <h2 className="font-black text-lg uppercase tracking-tight">🔄 Gameplay Sync with Backend</h2>
                    </div>
                    <div className="p-5 bg-white space-y-3">
                        <div className="border-4 border-black bg-[#FFD93D] p-4 shadow-[4px_4px_0px_0px_#000]">
                            <p className="font-black text-xs uppercase tracking-widest mb-2">⚠ Problem</p>
                            <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2 h-2 bg-black/40"></span>Gameplay state (crops, inventory) changes over time</li>
                                <li className="flex items-start gap-2 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2 h-2 bg-black/40"></span>Mismatches between client and server are easy to occur</li>
                            </ul>
                        </div>

                        <h4 className="font-black text-base uppercase tracking-tight pt-3 pl-3 border-l-4 border-black">Solution</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Server is the source of truth for all state</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Client only sends actions (plant, harvest)</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>UI only updates when valid data is received from the server</li>
                        </ul>
                        <p className="font-bold text-base leading-relaxed">I also clearly separated:</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Input handling (client-side)</li>
                            <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>State updates (server-driven)</li>
                        </ul>

                        <div className="border-4 border-black bg-[#A8E6CF] p-4 shadow-[4px_4px_0px_0px_#000]">
                            <p className="font-black text-xs uppercase tracking-widest mb-2">✓ Result</p>
                            <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>Prevented incorrect display states</li>
                                <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>Easier to debug when errors occur</li>
                                <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>State between client and server stays consistent</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </DetailLayout>
    )
}
