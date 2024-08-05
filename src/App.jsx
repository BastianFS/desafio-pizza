import './App.css'
import FooterPizza from './components/Footer'
import HomePizza from './components/Home'
import NavbarPizza from './components/Navbar'

function App() {

  return (
    <div className='d-flex flex-column'>
      <NavbarPizza/>
      <HomePizza/>
      <FooterPizza/>
    </div>
  )
}

export default App
