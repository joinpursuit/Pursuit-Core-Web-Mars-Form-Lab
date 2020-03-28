import React from "react";
import { countries } from "./Countries";

function CountrySelect() {
  const countriesArr = countries.map(country => {
    return <option>{country.name}</option>;
  });
  return (
    <div>
      <label>What is your country of origin</label>
      <select>{countriesArr}</select>
    </div>
  );
}

export default CountrySelect;
