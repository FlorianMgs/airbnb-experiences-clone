import "./Card.css";
import Star from "../../images/star.png";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--photo__available">
                <div className="card--badge">{props.openSpots > 0 ? "AVAILABLE" : "SOLD OUT"}</div>
                <img className="card--photo" src={props.coverImg} alt=""/>
            </div>
            <div className="card--note">
                <img className="star" src={Star} alt=""/>
                {props.stats.rating} <span className="card--reviews">({props.stats.reviewCount}) • {props.location}</span>
            </div>
            <p className="card--description">{props.title}</p>
            <p className="card--price"><b>From ${props.price}</b> / person</p>
        </div>
    )
}