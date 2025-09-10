import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeCard from "./components/RecipeCard";
import "./App.css";

function App() {
  const recipes = [
    { id: 1, name: "Pizza Margherita", desc: "Cheesy delight with basil", img: "https://source.unsplash.com/300x200/?pizza" },
    { id: 2, name: "Veg Burger", desc: "Crispy patty with fresh veggies", img: "https://source.unsplash.com/300x200/?burger" },
    { id: 3, name: "Pasta Alfredo", desc: "Creamy white sauce pasta", img: "https://source.unsplash.com/300x200/?pasta" },
    { id: 4, name: "Biryani", desc: "Aromatic rice with spices", img: "https://source.unsplash.com/300x200/?biryani" }
  ];

  return (
    <div className="App">
      <Header />
      <div className="cards-container">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
