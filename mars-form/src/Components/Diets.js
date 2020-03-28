import React from "react";

function Diets() {
  const diets = [
    { type: "Omnivore" },
    { type: "Vegetarian" },
    { type: "Vegan" }
  ];
  const dietArr = diets.map(diet => {
    return <option>{diet.type}</option>;
  });
  return (
    <div>
      <label>What is your dietary preference?</label>
      <select>{dietArr}</select>
    </div>
  );
}

export default Diets;
