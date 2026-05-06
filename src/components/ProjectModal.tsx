import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '../types'

interface ProjectModalProps {
    project: Project | null
    onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const [activeImg, setActiveImg] = useState(0)

    useEffect(() => {
        if (project) {
            setActiveImg(0)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [project])

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [onClose])

    return (
        <AnimatePresence>
            {project && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/80 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        onClick={onClose}
                    />
                    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-8 pb-8 px-4">
                        <motion.div
                            className="relative w-full max-w-2xl bg-[#EDE8D5] border-4 border-black shadow-[12px_12px_0px_0px_#000] pointer-events-auto"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.15, ease: 'easeOut' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="border-b-4 border-black px-5 py-3 flex items-center justify-between bg-[#FFD93D]">
                                <button
                                    onClick={onClose}
                                    className="font-black text-sm uppercase tracking-wide border-4 border-black px-3 py-1.5 bg-white shadow-[4px_4px_0px_0px_#000] hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 cursor-pointer text-black"
                                >
                                    Back
                                </button>
                                <h2 className="font-black text-base uppercase tracking-tight text-black text-right ml-4 truncate">
                                    {project.title}
                                </h2>
                            </div>

                            <div className="relative aspect-[16/9] overflow-hidden border-b-4 border-black">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeImg}
                                        src={project.media[activeImg]?.src ?? project.thumbnail}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                    />
                                </AnimatePresence>
                            </div>

                            {project.media.length > 1 && (
                                <div className="flex gap-2 px-5 py-3 overflow-x-auto border-b-4 border-black bg-[#EDE8D5]">
                                    {project.media.map((m, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveImg(i)}
                                            className={`flex-shrink-0 w-16 h-11 overflow-hidden border-4 cursor-pointer transition-all duration-100 ${i === activeImg ? 'border-black shadow-[4px_4px_0px_0px_#000]' : 'border-black/30 hover:border-black'
                                                }`}
                                        >
                                            <img src={m.src} alt="" className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            )}

                            <div className="grid md:grid-cols-3">
                                <div className="md:col-span-2 p-5 border-b-4 md:border-b-0 md:border-r-4 border-black bg-white">
                                    {project.fullDescription.split('\n\n').map((para, i) => (
                                        <p key={i} className="text-black font-bold text-base leading-relaxed mb-3">
                                            {para}
                                        </p>
                                    ))}
                                    {project.links && project.links.length > 0 && (
                                        <div className="flex gap-2 mt-4 flex-wrap">
                                            {project.links.map((link) => (
                                                <a
                                                    key={link.label}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm border-4 border-black px-4 py-2 font-bold uppercase tracking-wide bg-[#FFD93D] shadow-[4px_4px_0px_0px_#000] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-100 text-black"
                                                >
                                                    {link.label} &#8599;
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="bg-[#C4B5FD] p-5">
                                    <p className="text-black font-black text-sm uppercase tracking-widest mb-3">Info</p>
                                    <div className="space-y-2 mb-5">
                                        <div className="bg-white border-2 border-black px-3 py-1.5">
                                            <p className="text-black font-bold text-sm">{project.role}</p>
                                        </div>
                                        <div className="bg-white border-2 border-black px-3 py-1.5">
                                            <p className="text-black font-bold text-sm">{project.teamSize} members</p>
                                        </div>
                                        <div className="bg-white border-2 border-black px-3 py-1.5">
                                            <p className="text-black font-bold text-sm">{project.duration}</p>
                                        </div>
                                    </div>
                                    <p className="text-black font-black text-sm uppercase tracking-widest mb-3">Tools</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tools.map((tool) => (
                                            <span key={tool} className="text-sm font-black uppercase border-4 border-black px-2 py-1 bg-[#FFD93D] shadow-[2px_2px_0px_0px_#000] text-black">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
