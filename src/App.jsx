import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CodeDemo from './components/CodeDemo'
import Installation from './components/Installation'
import Commands from './components/Commands'
import Ecosystem from './components/Ecosystem'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <CodeDemo />
      <Installation />
      <Commands />
      <Ecosystem />
      <Footer />
    </div>
  )
}

export default App
