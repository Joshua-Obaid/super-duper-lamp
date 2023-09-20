import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, Tech, About, Projects } from './components'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Tech />
      <About />
      <Projects />
    </BrowserRouter>
  )
}