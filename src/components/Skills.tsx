import { skills } from '../data/projects'

const COLORS = [
    'bg-white',
    'bg-[#FFD93D]',
    'bg-[#C4B5FD]',
    'bg-[#FF6B6B]',
]

export default function Skills() {
    return (
        <section id="skills" className="px-10 py-10 border-t-4 border-black">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#FF6B6B] mb-6 pb-4 border-b-4 border-black">
                SKILLS
            </h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                    <span
                        key={skill}
                        className={`text-base font-black uppercase tracking-wide border-4 border-black px-3 py-1.5 shadow-[4px_4px_0px_0px_#000] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-100 cursor-default text-black ${COLORS[i % COLORS.length]}`}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    )
}
