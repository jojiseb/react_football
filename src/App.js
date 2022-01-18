import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import CardData from "./components/CardContent";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import "./App.css";

const App = () => {
  let card = CardData.map((cardItem) => {
    return (
      <Card
        cardContent={{
          imgSrc: cardItem.imgSrc,
          name: cardItem.name,
          phone: cardItem.phone,
          email: cardItem.email
        }}
      />
    );
  });

  return (
    <>
      <Header />
      <Hero />
      <div className="card-container">{card}</div>
      <Footer />
    </>
  );
};

export default App;
