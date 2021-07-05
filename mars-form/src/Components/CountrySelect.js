import React from "react";
import { countries } from "./Countries";

const CountrySelect = ({countrySelectObj}) => {
  const countriesArr = countries.map(country => {
    return <option key={country.name}>{country.name}</option>;
  });
  return (
    <div>
      <label>What is your country of origin</label>
      <select {...countrySelectObj}>{countriesArr}</select>
    </div>
  );
}

export default CountrySelect;
