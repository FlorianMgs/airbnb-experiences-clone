import "./Card.css";
import Star from "../../images/star.png";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--photo__available">
                <button className="card--available">{props.available}</button>
                <img className="card--photo" src={props.img} alt=""/>
            </div>
            <div className="card--note">
                <img className="star" src={Star} alt=""/>
                {props.rating} <span className="card--reviews">({props.reviews}) • {props.country}</span>
            </div>
            <p className="card--description">{props.descripion}</p>
            <p className="card--price"><b>From ${props.price}</b> / person</p>
        </div>
    )
}