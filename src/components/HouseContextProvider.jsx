/* eslint-disable array-callback-return */

// import Hooks
import { useState, useEffect, createContext } from "react";

// import Data
import { housesData } from "../data";

// create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);

  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);

  const [property, setProperty] = useState("Property (any)");
  const [properties, setProperties] = useState([]);

  const [price, setPrice] = useState("Price range (any)");

  const [isLoading, setIsLoading] = useState(false);

  // countries
  useEffect(() => {
    // return all countries
    const allCountries = houses.map((house) => house.country);

    // remove duplicates of countries
    setCountries(["Location (any)", ...new Set(allCountries)]);
  }, [houses, country, property]);

  // properties
  useEffect(() => {
    // return all properties
    const allProperties = houses.map((house) => house.type);

    // remove duplicates of properties
    setProperties(["Property (any)", ...new Set(allProperties)]);
  }, [houses]);

  const handleClick = () => {
    setIsLoading(true);

    // create a function that checks if the string includes '(any)'
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    // get first value of price and parse it to number
    const minPrice = +price.split(" ")[0];
    // get second value of price and parse it to number
    const maxPrice = +price.split(" ")[price.split(" ").length - 1];

    const newHouses = housesData.filter((house) => {
      const housePrice = +house.price;
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      )
        return house;

      // if all values are not default
      if (isDefault(country) && isDefault(property) && isDefault(price))
        return house;

      // if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price))
        return house.country === country;

      // if property is not default
      if (isDefault(country) && !isDefault(property) && isDefault(price))
        return house.type === property;

      // if price is not default
      if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      // if country & property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price))
        return house.country === country && house.type === property;

      // if country & price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      // if property & price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setIsLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        houses,
        setHouses,
        country,
        setCountry,
        countries,
        setCountries,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        isLoading,
        setIsLoading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
