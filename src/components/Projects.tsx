import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { detailComponents } from './details'
import type { Project } from '../types'

export default function Projects() {
    const [selected, setSelected] = useState<Project | null>(null)
    const DetailComponent = selected ? detailComponents[selected.id] : undefined

    useEffect(() => {
        document.body.style.overflow = selected ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [selected])

    return (
        <section id="projects" className="px-10 py-10 border-t-4 border-black">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#FF6B6B] mb-6 pb-4 border-b-4 border-black">
                Games
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onOpen={setSelected}
                    />
                ))}
            </div>

            <ProjectModal
                project={selected && !DetailComponent ? selected : null}
                onClose={() => setSelected(null)}
            />

            <AnimatePresence>
                {DetailComponent && selected && (
                    <DetailComponent
                        key={selected.id}
                        project={selected}
                        onClose={() => setSelected(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    )
}
