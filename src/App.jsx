import './App.css'
import Navigation from '../src/Components/Navigation.jsx'

function App() {

  return (
    <>
      <Navigation />
      <div className="container">
        <header className="header-brand">
          <img src="../src/assets/images/head.jpg" alt="Image head" className="header-image"/>
        </header>
        <div className="cards">
          <div className="showcase">
            <h2 className="showcase-title">لیست محصولات</h2>
          </div>
          <div className="card">
            <img src="../src/assets/images/image-1.jpg" alt="image 1" className="card-image"/>
            <p className="card-title">دم کنی</p>
            <span className="card-price">230000</span>
            <span className="card-offer">18%</span>
            <span className="card-price-org">180000</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
