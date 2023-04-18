import { useContext } from "react";

// import House Context
import { HouseContext } from "./HouseContextProvider";
import DropDown from "./Dropdown";

const PropertyDropdown = () => {
  const { property, setProperty } = useContext(HouseContext);

  const properties = ["Property (any)", "House", "Apartment"];

  return (
    <DropDown
      item={property}
      items={properties}
      setItem={setProperty}
      anyText={"Select your place"}
      category={"property"}
    />
  );
};

export default PropertyDropdown;
