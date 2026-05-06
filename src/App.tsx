import Header from './components/Header'
import BioBanner from './components/BioBanner'
import Projects from './components/Projects'
import Education from './components/Education'
import HonorsAwards from './components/HonorsAwards'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className="min-h-screen max-w-6xl mx-auto" style={{ backgroundColor: '#EDE8D5' }}>
            <Header />
            <main>
                <BioBanner />
                <Projects />
                <Skills />
                <Education />
                <HonorsAwards />
                {/* <About /> */}
                {/* <Contact /> */}
            </main>
            <Footer />
        </div>
    )
}
