export default function Footer() {
    return (
        <footer className="border-t-4 border-black bg-black px-6 py-6 mt-4">
            <p className="text-[#FFD93D] font-black text-base uppercase tracking-widest">
                © {new Date().getFullYear()} Thanh Phung
            </p>
        </footer>
    )
}
