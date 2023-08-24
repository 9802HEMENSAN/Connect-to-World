
import React, { useState } from "react";
import { Select, Box } from "@chakra-ui/react";
import { categories, countries, languageOptions } from "../static/constants";
import "./styles/Queries.css"

const Queries = (props) => {
  const {
    selectedCategory,
    selectedCountry,
    selectedLanguage,
    handleLanguageChange,
    handleCountryChange,
    handleCategoryChange,
  } = props;

  return (
    <Box className="options-container"
    >
      <div className="select-container" >
        <h2>Select a Category:</h2>
        <Select borderColor="pink" minWidth={["100px","200px","100px"]} value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </div>
      <div className="select-container" >
        <h2>Select a Country:</h2>
        <Select   minWidth={["100px","200px","100px"]} value={selectedCountry}   onChange={handleCountryChange}>
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </Select>
      </div>
      <div className="select-container" >
        <h2>Select a Language:</h2>
        <Select value={selectedLanguage}  
       minWidth={["100px","200px","100px"]}
        onChange={handleLanguageChange}>
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </div>
    </Box>
  );
};

export default Queries;
