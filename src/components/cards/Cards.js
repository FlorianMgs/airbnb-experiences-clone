import "./Cards.css";
import Photo1 from "../../images/card_1.png";
import Star from "../../images/star.png";

export default function Cards() {
    return (
        <section className="cards">
            <div className="card">
                <div className="card--photo__state">
                    <button className="card--state">SOLD OUT</button>
                    <img className="card--photo" src={Photo1} alt=""/>
                </div>
                <div className="card--note">
                    <img className="star" src={Star} alt=""/>
                    5.0 <span className="card--reviews">(6) • USA</span>
                </div>
                <p className="card--description">Life lessons with Katie Zaferes</p>
                <p className="card--price"><b>From $136</b> / person</p>
            </div>
        </section>
    )
}