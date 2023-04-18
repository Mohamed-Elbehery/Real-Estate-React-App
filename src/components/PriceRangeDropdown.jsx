import { useContext } from "react";

// import House Context
import { HouseContext } from "./HouseContextProvider";
import DropDown from "./Dropdown";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "10000 - 30000",
    },
    {
      value: "30000 - 40000",
    },
    {
      value: "100000 - 130000",
    },
    {
      value: "130000 - 160000",
    },
    {
      value: "190000 - 220000",
    },
  ];

  return (
    <DropDown
      item={price}
      items={prices}
      setItem={setPrice}
      category={"price"}
      anyText={"Choose price range"}
    />
  );
};

export default PriceRangeDropdown;
