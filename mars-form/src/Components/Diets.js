import React from "react";

const Diets = ({dietInputObj}) => {
  const diets = [
    { type: "Omnivore" },
    { type: "Vegetarian" },
    { type: "Vegan" }
  ];
  const dietArr = diets.map(diet => {
    return <option key={diet.type}>{diet.type}</option>
  });

  return (
    <div>
      <label>What is your dietary preference?</label>
      <select {...dietInputObj}>{dietArr}</select>
    </div>
  );
}

export default Diets;
