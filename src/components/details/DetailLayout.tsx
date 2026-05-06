import { useEffect } from 'react'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { Project } from '../../types'

interface Props {
    project: Project
    onClose: () => void
    children: ReactNode
}

export default function DetailLayout({ project, onClose, children }: Props) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [onClose])

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-[#EDE8D5] overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            <div className="sticky top-0 z-10 bg-[#FFD93D] border-b-4 border-black px-6 py-3 flex items-center gap-4">
                <button
                    onClick={onClose}
                    className="font-black text-sm uppercase tracking-wide border-4 border-black px-3 py-1.5 bg-white shadow-[4px_4px_0px_0px_#000] hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 cursor-pointer text-black flex-shrink-0"
                >
                    ← Back
                </button>
                <span className="font-black text-base uppercase tracking-tight text-black truncate">
                    {project.title}
                </span>
            </div>

            {children}
        </motion.div>
    )
}