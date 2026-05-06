import type { Project } from '../../types'
import DetailLayout from './DetailLayout'

interface Props {
    project: Project
    onClose: () => void
}

export default function CozyMarketDetail({ project, onClose }: Props) {
    return (
        <DetailLayout project={project} onClose={onClose}>
            {/* ── TWO-COLUMN WRAPPER ── */}
            <div className="mx-auto w-full max-w-[1420px] flex flex-col md:flex-row gap-0 min-h-screen">

                {/* ══ LEFT: scrollable content ══ */}
                <div className="flex-1 min-w-0 max-w-[1000px] px-6 py-10">

                    {/* TITLE */}
                    <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight text-[#FF6B6B] mb-6 leading-none">
                        Cozy Market
                    </h1>

                    {/* GITHUB LINK */}
                    {/* <div className="flex gap-3 flex-wrap mb-10">
                        <a href="#" target="_blank" rel="noopener noreferrer"
                            className="text-sm border-4 border-black px-5 py-2 font-bold uppercase tracking-wide bg-white shadow-[4px_4px_0px_0px_#000] hover:-translate-y-0.5 hover:bg-[#FFD93D] hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-100">
                            GitHub ↗
                        </a>
                    </div> */}

                    {/* INFO STRIP */}
                    <div className="border-4 border-black shadow-[6px_6px_0px_0px_#000] mb-12 overflow-hidden">
                        <div className="bg-[#C4B5FD] border-b-4 border-black px-5 py-2">
                            <p className="font-black text-xs uppercase tracking-widest">Project Info</p>
                        </div>
                        <div className="grid grid-cols-2 bg-white divide-x-2 divide-black">
                            <div className="p-4">
                                <p className="text-black/50 font-black text-xs uppercase tracking-widest mb-1">👤 Role</p>
                                <p className="text-black font-black text-sm">Solo Developer</p>
                            </div>
                            <div className="p-4">
                                <p className="text-black/50 font-black text-xs uppercase tracking-widest mb-1">⏱️ Duration</p>
                                <p className="text-black font-black text-sm">~2 weeks</p>
                            </div>
                            <div className="p-4 border-t-2 border-black border-r-2">
                                <p className="text-black/50 font-black text-xs uppercase tracking-widest mb-1">⚙️ Engine</p>
                                <p className="text-black font-black text-sm">Unity · C#</p>
                            </div>
                            <div className="p-4 border-t-2 border-black">
                                <p className="text-black/50 font-black text-xs uppercase tracking-widest mb-1">📱 Platform</p>
                                <p className="text-black font-black text-sm">Mobile (iOS/Android)</p>
                            </div>
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════
                    VỀ DỰ ÁN
                ══════════════════════════════════════════ */}
                    <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                        <div className="px-5 py-3 border-b-4 border-black bg-[#A8E6CF]">
                            <h2 className="font-black text-lg uppercase tracking-tight">📦 About the Project</h2>
                        </div>
                        <div className="p-5 bg-white space-y-3">
                            <p className="font-bold text-base leading-relaxed">
                                Cozy Market is a personal project I built to better understand how a mobile Puzzle/Casual game is designed and operates.
                            </p>
                            <p className="font-bold text-base leading-relaxed">
                                Players take on the role of a warehouse worker, clearing shelves by matching 3 identical products. Obstacles like webs add an extra layer of difficulty.
                            </p>
                        </div>

                        {/* ── SCREENSHOT SCROLL ── */}
                        <div className="border-t-4 border-black overflow-x-auto">
                            <div className="flex gap-3 p-4" style={{ width: 'max-content' }}>
                                {[
                                    'Screenshot_20260505-210301.png',
                                    'Screenshot_20260505-210308.png',
                                    'Screenshot_20260505-210313.png',
                                    'Screenshot_20260505-210320.png',
                                    'Screenshot_20260505-210331.png',
                                ].map((filename, i) => (
                                    <div key={filename} className="border-4 border-black shadow-[4px_4px_0px_0px_#000] overflow-hidden flex-shrink-0">
                                        <img
                                            src={`/images/cozy-market/${filename}`}
                                            alt={`Screenshot ${i + 1}`}
                                            className="w-[200px] h-auto object-cover block"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════
                    GIỚI THIỆU
                ══════════════════════════════════════════ */}
                    <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                        <div className="px-5 py-3 border-b-4 border-black bg-[#A8E6CF]">
                            <h2 className="font-black text-lg uppercase tracking-tight">📋 Overview</h2>
                        </div>
                        <div className="p-5 bg-white">
                            <p className="font-bold text-base leading-relaxed mb-4">
                                This project wasn't meant to be a complex puzzle game — it was a practical exercise focused on 3 things:
                            </p>
                            <ul className="space-y-2">
                                {['Developing a better mindset for casual game design', 'Improving optimization and system architecture for mobile', 'Experimenting with AI-assisted development'].map((item) => (
                                    <li key={item} className="flex items-start gap-3 font-bold text-base">
                                        <span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════
                    MINDSET
                ══════════════════════════════════════════ */}
                    <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                        <div className="px-5 py-3 border-b-4 border-black bg-[#FFD93D]">
                            <h2 className="font-black text-lg uppercase tracking-tight">🧠 Mindset for Puzzle/Casual Games</h2>
                        </div>
                        <div className="p-5 bg-white space-y-3">
                            <p className="font-bold text-base leading-relaxed">
                                I previously worked on simulation-style games (Stardew Valley-type), so switching to puzzle/casual was a noticeable shift.
                            </p>
                            <p className="font-bold text-base leading-relaxed">
                                After playing and analyzing similar games, I found that Puzzle/Casual games aren't hard to build logically — the challenge is in game feel. Things like animation speed, match timing, and clear effects have a huge impact on player experience.
                            </p>
                            <p className="font-bold text-base leading-relaxed">
                                Sometimes just tweaking an animation slightly changed the whole feel. I also spent time play-testing levels repeatedly to avoid frustrating or unsolvable situations.
                            </p>
                            {/* <p className="font-bold text-base leading-relaxed">Sau khi chơi và phân tích một số game cùng thể loại, tôi thấy:</p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Puzzle/casual không khó ở logic</li>
                                <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Mà khó ở cảm giác chơi (game feel)</li>
                            </ul>
                            <p className="font-bold text-base leading-relaxed">Những thứ như animation nhanh hay chậm, timing khi match, hiệu ứng khi clear:</p>
                            <div className="flex items-start gap-3 border-l-4 border-black bg-black/5 px-4 py-3">
                                <span className="font-black text-xl leading-none flex-shrink-0">→</span>
                                <p className="font-bold text-base leading-relaxed">ảnh hưởng rất lớn đến trải nghiệm</p>
                            </div>
                            <p className="font-bold text-base leading-relaxed">
                                Có những lúc tôi chỉ chỉnh lại một chút animation thôi, nhưng cảm giác game đã khác hẳn. Ngoài ra, tôi cũng dành thời gian test level nhiều lần để tránh những tình huống gây khó chịu hoặc "bí vô lý".
                            </p> */}
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════
                    TỐI ƯU CHO MOBILE
                ══════════════════════════════════════════ */}
                    <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                        <div className="px-5 py-3 border-b-4 border-black bg-[#C4B5FD] flex items-center gap-3">
                            <span className="text-xs font-black uppercase tracking-widest border-2 border-black bg-white px-2 py-0.5">Technical</span>
                            <h2 className="font-black text-lg uppercase tracking-tight">📱 Mobile Optimization</h2>
                        </div>
                        <div className="p-5 bg-white space-y-3">
                            <p className="font-bold text-base leading-relaxed">My goal was to maintain a stable ~60 FPS.</p>

                            <div className="border-4 border-black bg-[#FFD93D] p-4 shadow-[4px_4px_0px_0px_#000]">
                                <p className="font-black text-xs uppercase tracking-widest mb-2">⚠ Problem</p>
                                <p className="font-bold text-base leading-relaxed">When many effects trigger in quick succession (chain match), FPS would drop slightly.</p>
                            </div>

                            <p className="font-bold text-base leading-relaxed">
                                After profiling with Unity Profiler, the main cause was too many instantiate/destroy calls within a short period.
                            </p>

                            <h4 className="font-black text-base uppercase tracking-tight pt-3 pl-3 border-l-4 border-black">Solution</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Used Object Pooling for particle effects (match effect) and UI effects (coin fly effect)</li>
                                <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Minimized Update() usage, switched to event-based logic</li>
                            </ul>

                            <div className="border-4 border-black bg-[#A8E6CF] p-4 shadow-[4px_4px_0px_0px_#000]">
                                <p className="font-black text-xs uppercase tracking-widest mb-2">✓ Result</p>
                                <ul className="space-y-1.5">
                                    <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>Stable FPS</li>
                                    <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>No more spikes when multiple effects trigger simultaneously</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════
                    KIẾN TRÚC HỆ THỐNG
                ══════════════════════════════════════════ */}
                    <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                        <div className="px-5 py-3 border-b-4 border-black bg-[#C4B5FD] flex items-center gap-3">
                            <span className="text-xs font-black uppercase tracking-widest border-2 border-black bg-white px-2 py-0.5">Technical</span>
                            <h2 className="font-black text-lg uppercase tracking-tight">🏗️ System Architecture</h2>
                        </div>
                        <div className="p-5 bg-white space-y-3">
                            <p className="font-bold text-base leading-relaxed">I didn't use anything heavyweight here, but I explored a few patterns:</p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Events to reduce coupling between systems</li>
                                <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Service Locator to avoid cross-references</li>
                            </ul>
                            <p className="font-bold text-base leading-relaxed">
                                This was my first time using a Service Locator combined with the Adapter pattern instead of Singletons. The main goal was to reduce coupling between UI, gameplay, and data — making it easier to modify and extend.
                            </p>
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════
                    SỬ DỤNG AI
                ══════════════════════════════════════════ */}
                    <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                        <div className="px-5 py-3 border-b-4 border-black bg-[#FFD93D]">
                            <h2 className="font-black text-lg uppercase tracking-tight">🤖 AI-Assisted Development</h2>
                        </div>
                        <div className="p-5 bg-white space-y-3">
                            <p className="font-bold text-base leading-relaxed">In this project I tried: GitHub Copilot, Cursor, and Antigravity.</p>
                            <p className="font-bold text-base leading-relaxed">I mainly used AI for solution suggestions and handling repetitive code — but always defined requirements clearly first and reviewed all generated code afterward.</p>
                            <div className="flex items-start gap-3 border-l-4 border-black bg-black/5 px-4 py-3">
                                <span className="font-black text-xl leading-none flex-shrink-0">→</span>
                                <p className="font-bold text-base leading-relaxed">Because without fully understanding the code, debugging and extending it later becomes much harder.</p>
                            </div>
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════
                    DEEP DIVE: COIN SYSTEM
                ══════════════════════════════════════════ */}
                    <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                        <div className="px-5 py-3 border-b-4 border-black bg-[#FF9B6A] flex items-center gap-3">
                            <span className="text-xs font-black uppercase tracking-widest border-2 border-black bg-white px-2 py-0.5">Challenge</span>
                            <h2 className="font-black text-lg uppercase tracking-tight">🪙 Session-Based Coin System</h2>
                        </div>
                        <div className="p-5 bg-white space-y-3">
                            <div className="border-4 border-black bg-[#FFD93D] p-4 shadow-[4px_4px_0px_0px_#000]">
                                <p className="font-black text-xs uppercase tracking-widest mb-2">⚠ Problem</p>
                                <p className="font-bold text-base leading-relaxed">Initially, matching items added coins directly to the total. It worked, but felt flat — there was no sense of accumulation within a session.</p>
                            </div>

                            <h4 className="font-black text-base uppercase tracking-tight pt-3 pl-3 border-l-4 border-black">Insight</h4>
                            <p className="font-bold text-base leading-relaxed">Players don't just need rewards — they need the feeling of building up toward a reward.</p>

                            <h4 className="font-black text-base uppercase tracking-tight pt-3 pl-3 border-l-4 border-black">My Solution</h4>
                            <p className="font-bold text-base">Split coins into 2 types:</p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Session coin: used during gameplay</li>
                                <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Persistent coin: saved as the total</li>
                            </ul>
                            <p className="font-bold text-base">Flow: accumulate session coins in-game → commit to total at session end → trigger coin fly animation.</p>

                            <div className="border-4 border-black bg-[#A8E6CF] p-4 shadow-[4px_4px_0px_0px_#000]">
                                <p className="font-black text-xs uppercase tracking-widest mb-2">✓ Result</p>
                                <ul className="space-y-1.5">
                                    <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>Clearer gameplay feel</li>
                                    <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>Rewards have a distinct payoff moment</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════
                    DEEP DIVE: BOARD GENERATION
                ══════════════════════════════════════════ */}
                    <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                        <div className="px-5 py-3 border-b-4 border-black bg-[#FF9B6A] flex items-center gap-3">
                            <span className="text-xs font-black uppercase tracking-widest border-2 border-black bg-white px-2 py-0.5">Challenge</span>
                            <h2 className="font-black text-lg uppercase tracking-tight">🎲 Board Generation & Unsolvable Cases</h2>
                        </div>
                        <div className="p-5 bg-white space-y-3">
                            <div className="border-4 border-black bg-[#FFD93D] p-4 shadow-[4px_4px_0px_0px_#000]">
                                <p className="font-black text-xs uppercase tracking-widest mb-2">⚠ Problem</p>
                                <p className="font-bold text-base leading-relaxed">The board could end up in an unsolvable state. Pure random generation easily creates boards with no valid moves or fully locked items.</p>
                            </div>

                            <h4 className="font-black text-base uppercase tracking-tight pt-3 pl-3 border-l-4 border-black">Approach</h4>
                            <p className="font-bold text-base leading-relaxed">Instead of generating once, I generate multiple candidates → evaluate → pick the best board.</p>

                            <h4 className="font-black text-base uppercase tracking-tight pt-3 pl-3 border-l-4 border-black">Validated Shuffle</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>At least 1 empty slot</li>
                                <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>No group ready to match from the start</li>
                                <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>Player has at least 1 valid move immediately</li>
                            </ul>
                            <div className="flex items-start gap-3 border-l-4 border-black bg-black/5 px-4 py-3">
                                <span className="font-black text-xl leading-none flex-shrink-0">→</span>
                                <p className="font-bold text-base leading-relaxed">Shuffle up to 64 times; if no perfect board is found, pick the best one by score</p>
                            </div>
                            <h4 className="font-black text-base uppercase tracking-tight pt-3 pl-3 border-l-4 border-black">Level Validation</h4>
                            <p className="font-bold text-base leading-relaxed">I wrote a validator to check level configs directly in the editor: whether item counts are divisible by 3, whether any items are unmatchable, and whether the config is valid.</p>
                            <div className="flex items-start gap-3 border-l-4 border-black bg-black/5 px-4 py-3">
                                <span className="font-black text-xl leading-none flex-shrink-0">→</span>
                                <p className="font-bold text-base leading-relaxed">This catches errors early without needing to run the game.</p>
                            </div>

                            <div className="border-4 border-black bg-[#A8E6CF] p-4 shadow-[4px_4px_0px_0px_#000]">
                                <p className="font-black text-xs uppercase tracking-widest mb-2">✓ Result</p>
                                <ul className="space-y-1.5">
                                    <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>No more stuck boards</li>
                                    <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>More stable experience</li>
                                    <li className="flex items-start gap-2 font-bold text-base"><span className="font-black">✓</span>Fewer level-related bugs</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════
                    NHỮNG ĐIỀU RÚT RA
                ══════════════════════════════════════════ */}
                    <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                        <div className="px-5 py-3 border-b-4 border-black bg-[#C4B5FD]">
                            <h2 className="font-black text-lg uppercase tracking-tight">💡 What I Learned</h2>
                        </div>
                        <div className="p-5 bg-white space-y-3">
                            {[
                                { n: '01', title: "Don't over-engineer too early", note: 'build just enough first, refactor later' },
                                { n: '02', title: 'Game feel matters more than logic', note: "correct doesn't always mean satisfying" },
                                { n: '03', title: 'Small details matter a lot', note: 'UI, feedback, and edge cases have a big impact' },
                            ].map(({ n, title, note }) => (
                                <div key={n} className="flex items-start gap-4 border-4 border-black bg-white p-4 shadow-[4px_4px_0px_0px_#000]">
                                    <span className="font-black text-4xl text-black/15 leading-none flex-shrink-0 w-12 text-right select-none">{n}</span>
                                    <div>
                                        <p className="font-black text-base uppercase tracking-tight">{title}</p>
                                        <p className="font-bold text-sm text-black/60 mt-1">→ {note}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════
                    KẾT
                ══════════════════════════════════════════ */}
                    <div className="border-4 border-black mb-6 shadow-[6px_6px_0px_0px_#000]">
                        <div className="px-5 py-3 border-b-4 border-black bg-[#A8E6CF]">
                            <h2 className="font-black text-lg uppercase tracking-tight">🏁 Conclusion</h2>
                        </div>
                        <div className="p-5 bg-white space-y-3">
                            <p className="font-bold text-base leading-relaxed">Cozy Market wasn't a large project, but it helped me better understand:</p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>How to build a complete puzzle/casual game</li>
                                <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>How to balance technical decisions with player experience</li>
                                <li className="flex items-start gap-3 font-bold text-base"><span className="mt-2 flex-shrink-0 w-2.5 h-2.5 bg-black"></span>And the importance of polish</li>
                            </ul>
                        </div>
                    </div>

                </div>{/* end left column */}

                {/* ══ RIGHT: sticky video + itch.io ══ */}
                <div className="hidden md:block w-[420px] flex-shrink-0 border-l-4 border-black">
                    <div className="sticky top-[57px] p-5 flex flex-col gap-4">

                        {/* itch.io button */}
                        <a
                            href="https://thphung.itch.io/cozy-market"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center text-sm border-4 border-black px-5 py-3 font-black uppercase tracking-wide bg-[#FF6B6B] shadow-[4px_4px_0px_0px_#000] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-100 block"
                        >
                            🎮 Play on itch.io ↗
                        </a>

                        {/* YouTube embed (9:16 Shorts) */}
                        <div className="border-4 border-black shadow-[4px_4px_0px_0px_#000] overflow-hidden">
                            <div className="bg-black px-3 py-1.5">
                                <span className="text-white font-black text-xs uppercase tracking-widest">▶ Gameplay</span>
                            </div>
                            <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/GPIzUuanFRM"
                                    title="Cozy Market Demo Gameplay"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                    </div>
                </div>

                {/* ══ MOBILE: video below content ══ */}
                <div className="md:hidden px-6 pb-10 flex flex-col gap-4">
                    <a
                        href="https://thphung.itch.io/cozy-market"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center text-sm border-4 border-black px-5 py-3 font-black uppercase tracking-wide bg-[#FF6B6B] shadow-[4px_4px_0px_0px_#000] block"
                    >
                        🎮 Play on itch.io ↗
                    </a>
                    <div className="border-4 border-black shadow-[4px_4px_0px_0px_#000] overflow-hidden">
                        <div className="bg-black px-3 py-1.5">
                            <span className="text-white font-black text-xs uppercase tracking-widest">▶ Gameplay</span>
                        </div>
                        <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/GPIzUuanFRM"
                                title="Cozy Market Demo Gameplay"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>

            </div>{/* end two-column wrapper */}
        </DetailLayout>
    )
}