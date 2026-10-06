import './App.css'
import Navigation from '../src/Components/Navigation.jsx'

function App() {

  return (
    <>
      <Navigation />
      <div className="container">
        <header className="header-brand">
          <img
            src="../src/assets/images/head.jpg"
            alt="honarkade sari"
            className="header-image"
          />
        </header>
        <main className="products-section">
          <div className="showcase">
            <h2 className="showcase-title">لیست محصولات</h2>
            <span className="showcase-line"></span>
          </div>
          <div className="cards">
            <article className="card">
              <div className="card-image-wrapper">
                <img
                  src="../src/assets/images/image-1.jpg"
                  alt="Error-img"
                  className="card-image"
                />
                <span className="card-offer">18٪</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">دم کنی</h3>
                <div className="card-prices">
                  <span className="card-price-org">230,000 تومان</span>
                  <span className="card-price">180,000 تومان</span>
                </div>
                <button className="card-button">
                  افزودن به سبد
                </button>
              </div>
            </article>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
