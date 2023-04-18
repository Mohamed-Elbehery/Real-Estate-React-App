// import use context hook
import { useContext } from "react";

// import Context
import { HouseContext } from "./HouseContextProvider";

// import Components
import { House } from "./index";

// import Icons
import { ImSpinner2 } from "react-icons/im";

// import Link
import { Link } from "react-router-dom";

const HouseList = () => {
  const data = useContext(HouseContext);

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        {data.isLoading ? (
          <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
        ) : data.houses.length === 0 ? (
          <h1 className="text-center font-bold text-gray-600 text-3xl mt-[100px]">
            No Results Found :(
          </h1>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
            {data?.houses?.map((house, index) => (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HouseList;
