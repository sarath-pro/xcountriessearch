import React, { useEffect, useState } from "react";
import "./Countries.css";
import * as data from "./data.json";
import Header from "./Header";

function Card({ imgSrc, altText, countryName }) {
  return (
    <div className="countryCard">
      <img src={imgSrc} alt={altText} />
      <h2>{countryName}</h2>
    </div>
  );
}

export default function Countries() {
  // console.log('data:::: ',data)
  const [countryList, setCountryList] = useState([]);
  const [filter, setFilter] = useState("");

  const handleValueChange = (txt) => {
    console.log(txt);
    setFilter(txt);
  };

  console.log("countries");
  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching Data...");
      try {
        let url = "https://restcountries.com/v3.1/all";
        let response = await fetch(url);
        let data = await response.json();
        console.log("data:: ", data);
        setCountryList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  let filteredData = countryList;
  if (filter.length > 0) {
    filteredData = countryList.filter((country) =>
      String(country.name.common).toLowerCase().includes(filter)
    );
  }
  return (
    <div>
      <Header eventHandler={handleValueChange} />
      <div className="container">
        {filteredData.map((country) => (
          <Card
            imgSrc={country.flags.png}
            altText={country.flags.alt}
            countryName={country.name.common}
            key={country.name.common}
          />
        ))}
      </div>
    </div>
  );
}
