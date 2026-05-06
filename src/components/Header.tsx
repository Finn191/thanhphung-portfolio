'use client'
import { useState } from 'react'

export default function Header() {
    const [copied, setCopied] = useState(false)

    function copyEmail() {
        navigator.clipboard.writeText('phungthanhwork@gmail.com')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <header className="px-10 pt-8 pb-6 border-b-4 border-black flex items-start justify-between flex-wrap gap-4">
            {/* Logo/Name */}
            <div>
                <div className="inline-block bg-[#FFD93D] border-4 border-black shadow-[4px_4px_0px_0px_#000] px-4 py-2 -rotate-1">
                    <h1 className="text-2xl font-black uppercase tracking-tight text-black">
                        Thanh Phung
                    </h1>
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-black mt-3">
                    Game Developer
                </p>
            </div>

            {/* Right: socials + email */}
            <div className="flex flex-col items-end gap-2">
                {/* Icon buttons row */}
                <div className="flex items-center gap-3">
                    <a href="https://www.linkedin.com/in/thanh-ph%E1%BB%A5ng-9a184327b/" aria-label="LinkedIn" className="w-10 h-10 border-4 border-black bg-white shadow-[4px_4px_0px_0px_#000] flex items-center justify-center hover:-translate-y-0.5 hover:bg-[#C4B5FD] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 text-black">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                    <a href="https://github.com/Finn191" aria-label="GitHub" className="w-10 h-10 border-4 border-black bg-white shadow-[4px_4px_0px_0px_#000] flex items-center justify-center hover:-translate-y-0.5 hover:bg-[#C4B5FD] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 text-black">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                    </a>
                    <a href="mailto:thphung2@gmail.com" aria-label="Email" className="w-10 h-10 border-4 border-black bg-white shadow-[4px_4px_0px_0px_#000] flex items-center justify-center hover:-translate-y-0.5 hover:bg-[#C4B5FD] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 text-black">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                    </a>
                </div>

                {/* Email + copy row */}
                <div className="flex items-center border-4 border-black shadow-[4px_4px_0px_0px_#000] overflow-hidden">
                    <span className="px-3 py-1.5 font-bold text-sm bg-white text-black select-all">
                        thphung2@gmail.com
                    </span>
                    <button
                        onClick={copyEmail}
                        className={`px-3 py-1.5 border-l-4 border-black font-black text-xs uppercase tracking-wide transition-all duration-100 ${copied ? 'bg-[#A8E6CF]' : 'bg-[#FFD93D] hover:bg-[#FF6B6B] hover:text-white'}`}
                    >
                        {copied ? '✓ Copied' : 'Copy'}
                    </button>
                </div>

                {/* Download CV */}
                <a
                    href={`${import.meta.env.BASE_URL}DuongThanhPhung_GameDeveloper.pdf`}
                    download
                    className="flex items-center gap-2 px-4 py-1.5 border-4 border-black bg-[#FF6B6B] shadow-[4px_4px_0px_0px_#000] font-black text-xs uppercase tracking-wide text-black hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100"
                >
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download CV
                </a>
            </div>
        </header>
    )
}
