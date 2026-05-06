import { education } from '../data/projects'

export default function Education() {
    return (
        <section id="education" className="px-10 py-10 border-t-4 border-black">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#FF6B6B] mb-6 pb-4 border-b-4 border-black">
                EDUCATION
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu) => (
                    <div key={edu.school} className="border-4 border-black shadow-[6px_6px_0px_0px_#000]">
                        <div className="bg-[#C4B5FD] border-b-4 border-black px-4 py-3">
                            <p className="text-black font-black text-base uppercase tracking-tight">{edu.school}</p>
                        </div>
                        <div className="bg-white px-4 py-3">
                            <p className="text-black font-bold text-base">{edu.degree}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
