import AirbnbLogo from "../../images/airbnb_logo.png";
import "./Navbar.css";


export default function Navbar() {
    return (
        <div className="navbar">
            <img src={AirbnbLogo} alt="AirbnbLogo" className="navbar--logo" />
        </div>
    )
}