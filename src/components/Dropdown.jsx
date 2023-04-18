import { useState } from "react";

// import Icons
import {
  RiHome5Line,
  RiMapPinLine,
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

// import Headless UI
import { Menu } from "@headlessui/react";

const DropDown = ({ anyText, item, items, setItem, category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        {category === "property" ? (
          <RiHome5Line className="dropdown-icon-primary" />
        ) : category === "price" ? (
          <RiWallet3Line className="dropdown-icon-primary" />
        ) : (
          <RiMapPinLine className="dropdown-icon-primary" />
        )}
        <div>
          <p className="text-[1rem] font-medium leading-tight">{item}</p>
          <p className="text-[0.8rem]">
            {!item.split(" ").includes("(any)") ? "" : anyText}
          </p>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {items.map((item, index) => (
          <Menu.Item
            onClick={() => setItem(category === "price" ? item.value : item)}
            className="cursor-pointer hover:text-violet-700 transition"
            as="li"
            key={index}
          >
            {category === "price" ? item.value : item}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default DropDown;
