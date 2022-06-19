import './Hero.css';
import HeroBanner from "../../images/photo_grid.png";


export default function Hero() {
    return (
        <section className="hero">
            <img src={HeroBanner} alt="Hero" className='hero--banner' />
            <div className="hero--experiences">
                <h1 className="hero--header">Online Experiences</h1>
                <p className="hero--description">Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
            </div>
        </section>
    )
}