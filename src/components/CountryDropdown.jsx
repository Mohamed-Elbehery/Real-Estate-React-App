import { useContext } from "react";

// import House Context
import { HouseContext } from "./HouseContextProvider";
import DropDown from "./Dropdown";

const CountryDropdown = () => {
  const { country, setCountry } = useContext(HouseContext);

  const countries = ["Location (any)", "United States", "Canada"];

  return (
    <DropDown
      item={country}
      items={countries}
      setItem={setCountry}
      category={"country"}
      anyText={"Select your place"}
    />
  );
};

export default CountryDropdown;
