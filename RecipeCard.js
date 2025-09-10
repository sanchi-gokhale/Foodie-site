import React from "react";

function RecipeCard({ recipe }) {
  return (
    <div className="card">
      <img src={recipe.img} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <p>{recipe.desc}</p>
      <button>Order Now</button>
    </div>
  );
}

export default RecipeCard;
