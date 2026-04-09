import Header from "./components/header"
import Footer from "./components/footer"
import Hero from "./sections/hero"
import About from "./sections/about"
import Projects from "./sections/projects"
import Experience from "./sections/experience"
import Contact from "./sections/contact"
import SiteStars from "./components/siteStars"

function App() {
  return (
    <>
        {/* <Header /> */}
        <div className="relative min-h-screen ">
            <SiteStars />
            <main className="relative z-10">
                <Header />
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Contact />
                <Footer />
            </main>
        </div>
        {/* <Footer /> */}
    </>
  )
}

export default App
