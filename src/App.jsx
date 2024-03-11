import "./App.css"

import Hero from './sections/Hero'
import About from './sections/About'
import Values from './sections/Values'
import Mission from './sections/Mission'
import Gallery from './sections/Gallery'
import Join from './sections/Join'

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Values />
      <Mission />
      <Gallery />
      <Join />
    </div>
  )
}

export default App