import "/home/mardin/project/honarkadeh/src/styles/Cards.css"
import {ShoppingCart} from "lucide-react"

const Cards = () => {
    return(
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
                        <ShoppingCart size={15}/>
                        افزودن به سبد
                    </button>
                </div>
            </article>
        </div>
    )
}
export default Cards;