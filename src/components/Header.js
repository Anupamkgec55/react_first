import { LOGO_DATA } from "../utils/content";

const Header=()=>{
    return(
        <div className="header">
            <div className="logo_main">
                <img className="logo"src={LOGO_DATA}/>
            </div>
            <div className="nav_bar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Offer</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;