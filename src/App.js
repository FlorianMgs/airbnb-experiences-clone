import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Card from "./components/card/Card";
import data from "./data";
import './App.css';

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviews={item.stats.reviewCount}
        available={item.openSpots > 0 ? "AVAILABLE" : "SOLD OUT"}
        country={item.location}
        description={item.description}
        price={item.price}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards" >
        {cards}
      </section>
    </div>
  );
}

export default App;
