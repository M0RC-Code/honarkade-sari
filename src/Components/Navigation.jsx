import "/home/mardin/project/honarkadeh/src/styles/Navigation.css"

const Navigation = () => {
    return(
        <div className="menu">
            <div className="title">HONARKADE SARI</div>
            <div className="search-options">
                <div className="search-box">
                    <input type="text" className="search-input"/>
                </div>
                <div className="options">
                    <button className="option-home option">Home</button>
                    <button className="option-about option">About</button>
                    <button className="option-logSign option">LogIn/SignUp</button>
                </div>
            </div>
        </div>
    )
}
export default Navigation;