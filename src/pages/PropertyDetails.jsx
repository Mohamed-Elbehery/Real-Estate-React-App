// import Data
import { housesData } from "../data";

// import Link and useParams
import { Link, useParams } from "react-router-dom";

// import Icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const PropertyDetails = () => {
  const { id } = useParams();

  const house = housesData.find((house) => +house.id === +id);

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{house?.name}</h2>
            <h3 className="text-lg mb-4">{house?.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <p className="bg-green-500 text-white px-3 rounded-full">
              {house.type}
            </p>
            <p className="bg-violet-500 text-white px-3 rounded-full">
              {house.country}
            </p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-violet-600 my-3 mb-5 lg:mb-0">
              $ {house.price}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={house.imageLg} alt={house.name} />
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-6">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <p>{house.bedrooms}</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <p>{house.bathrooms}</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <p>{house.surface}</p>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-5 mb-8">
              <div className="w-28 h-28 p-1 border border-gray-300 rounded-full">
                <img src={house.agent.image} alt="agent-img" />
              </div>
              <div>
                <p className="font-bold text-lg">{house.agent.name}</p>
                <Link to={""} className="text-violet-700 text-sm">
                  View Settings
                </Link>
              </div>
            </div>
            {/* Form */}
            <form className="flex flex-col gap-y-4">
              <input
                className="border border-gray-300 focus:border-l-violet-700 outline-none rounded w-full px-4 h-10 text-sm"
                placeholder="Name*"
                type="text"
              />
              <input
                className="border border-gray-300 focus:border-l-violet-700 outline-none rounded w-full px-4 h-10 text-sm"
                placeholder="Phone*"
                type="text"
              />
              <input
                className="border border-gray-300 focus:border-l-violet-700 outline-none rounded w-full px-4 h-10 text-sm"
                placeholder="Email*"
                type="text"
              />
              <textarea
                className="border border-gray-300 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400"
                placeholder="Message*"
                defaultValue={"Hello, I'am interested in [Modern Apartament]"}
              ></textarea>
              <div className="flex gap-x-4">
                <button className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition">
                  Send Message
                </button>
                <button className="border border-violet-700 text-violet-500 hover:border-violet-500 hover:bg-violet-700 hover:text-white rounded p-4 text-sm w-full transition">
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
