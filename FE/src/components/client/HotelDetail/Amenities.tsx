import React from "react";
import {
  AiFillCar,
  AiFillCalendar,
  AiFillLock,
  AiFillHeart,
  AiFillHome,
} from "react-icons/ai";

type Amenities = {
  _id: string;
  name: string;
  features: string[];
  createdAt: Date;
  updatedAt: Date;
};

type Features = {
  name: string;
  surcharge: boolean;
};

const availableIcons = {
  "Phòng tắm": <AiFillHome />,
  "Chỗ đậu xe": <AiFillCar />,
  "An ninh": <AiFillLock />,
  "Dịch vụ doanh nhân": <AiFillCalendar />,
  "Chăm sóc sức khỏe": <AiFillHeart />,
} as const; // Use 'as const' to assert the literal type of the object keys

const getRandomIcon = () => {
  const randomIcon = [
    AiFillHome,
    AiFillCar,
    AiFillLock,
    AiFillCalendar,
    AiFillHeart,
  ][Math.floor(Math.random() * 5)];
  return React.createElement(randomIcon);
};

const Amenities = ({ amenities }: { amenities: Amenities[] }) => {
  const sortedAmenities = amenities
    .slice()
    .sort((a, b) => b.features.length - a.features.length);

  return (
    <div className="max-w-screen-xl mx-auto xl:px-8 md:px-6 sm:px-4 px-4 py-10 font-Lato">
      <h1 className="font-bold text-3xl mb-8">Các dịch vụ/tiện ích khác</h1>

      <div className="flex flex-wrap">
        {sortedAmenities.map((data: Amenities) => (
          <div
            key={data._id}
            className={`w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-4 mb-4 ${
              data.features.length <= 2 ? "md:w-full" : ""
            }`}
          >
            <div className="bg-white p-4 rounded-md shadow-md">
              <div className="flex items-center mb-2">
                {availableIcons[data.name as keyof typeof availableIcons] ||
                  getRandomIcon()}
                <span className="ml-2 text-lg font-semibold">{data.name}</span>
              </div>
              <ul className="pl-4">
                {data.features.map((ani: string | Features, index: number) => (
                  <li key={index} className="flex items-center mb-2">
                    <span className="list-disc">
                      {typeof ani === "string" ? ani : ani.name}
                    </span>
                    {typeof ani !== "string" && ani.surcharge && (
                      <span className="ml-2 bg-gray-300 py-1 px-2 text-xs rounded">
                        Phụ phí
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
