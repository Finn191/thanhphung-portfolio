import { useState } from 'react'

const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thanh-ph%E1%BB%A5ng-9a184327b/' },
    { label: 'GitHub', href: 'https://github.com/Finn191' },
]

export default function Contact() {
    const [copied, setCopied] = useState(false)
    const email = 'thphung2@gmail.com'

    const copyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    return (
        <section id="contact" className="px-10 py-10 border-t-4 border-black">
            <h2 className="text-3xl font-black uppercase tracking-tight text-black mb-6 pb-4 border-b-4 border-black">
                Contact
            </h2>

            <div className="border-4 border-black bg-white shadow-[6px_6px_0px_0px_#000] flex items-center justify-between gap-4 px-4 py-3 mb-6 flex-wrap">
                <span className="text-black font-bold text-base">{email}</span>
                <button
                    onClick={copyEmail}
                    className="bg-[#FF6B6B] border-4 border-black font-bold text-sm uppercase tracking-wide px-4 py-2 shadow-[4px_4px_0px_0px_#000] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 cursor-pointer text-black"
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>

            <div className="flex gap-3 flex-wrap">
                {socials.map((s) => (
                    <a
                        key={s.label}
                        href={s.href}
                        className="border-4 border-black px-5 py-2 font-bold text-base uppercase tracking-wide text-black bg-white shadow-[4px_4px_0px_0px_#000] hover:-translate-y-0.5 hover:bg-[#FFD93D] hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-100"
                    >
                        {s.label}
                    </a>
                ))}
            </div>
        </section>
    )
}
