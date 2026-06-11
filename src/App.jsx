import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Vision from './components/Vision/Vision'
import Milestones from './components/Milestones/Milestones'
import Quality from './components/Quality/Quality'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Vision />
        <Milestones />
        <Quality />
      </main>
      <Footer />
    </>
  )
}

export default App
