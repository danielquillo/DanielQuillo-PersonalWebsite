import Header from "./components/header"
import Footer from "./components/footer"
import Hero from "./sections/hero"
import About from "./sections/about"
import Projects from "./sections/projects"
import Experience from "./sections/experience"
import Contact from "./sections/contact"

function App() {
  return (
    <>
        <Header />
        <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
        </main>
        <Footer />
    </>
  )
}

export default App
