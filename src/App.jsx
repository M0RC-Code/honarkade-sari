import './App.css'
import Navigation from '../src/Components/Navigation.jsx'
import Header from '../src/Components/Header.jsx'
import Cards from '../src/Components/Cards.jsx'
import {List, ShoppingCart} from "lucide-react"

function App() {

  return (
    <>
      <Navigation />
      <div className="container">
        <Header />
        <main className="products-section">
          <div className="showcase">
            <h2 className="showcase-title"><List />لیست محصولات</h2>
            <span className="showcase-line"></span>
          </div>
          <Cards />
        </main>
      </div>
    </>
  )
}
export default App
