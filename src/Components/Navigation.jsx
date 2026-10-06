import "/home/mardin/project/honarkadeh/src/styles/Navigation.css"
import {Home, Search, LogOut} from "lucide-react"

const Navigation = () => {
    return(
        <div className="menu">
            <div className="title">HONARKADE SARI</div>
            <div className="search-options">
                <div className="search-box">
                    <Search size={15} className="search-box-icon"/>
                    <input type="text" className="search-input"/>
                </div>
                <div className="options">
                    <button className="option-home option"><Home size={20}/>Home</button>
                    <button className="option-about option">About</button>
                    <button className="option-logSign option"><LogOut size={15}/>LogIn/SignUp</button>
                </div>
            </div>
        </div>
    )
}
export default Navigation;