import { IHotel } from "../../../interface";
import { CiLocationOn } from "../../../icons";

type HotelBookingProps = {
  oneHotel: IHotel;
};

const HotelBooking = ({ oneHotel }: HotelBookingProps) => {
  return (
    <div className="flex p-3 mt-5 mb-4 gap-3 rounded-lg bg-light dark:bg-dark">
      <div className="relative">
        <div className="no-underline p-3">
          <img
            src={oneHotel.images[0].url}
            alt={oneHotel.name}
            className="rounded-md w-full object-contain"
          />
        </div>
      </div>

      <div className="box-border">
        <h2 className="font-semibold text-2xl leading-normal mb-4 text-textLight dark:text-textDark">
          <div className="no-underline hover:text-blue-500 cursor-pointer">
            {oneHotel.name}
          </div>
        </h2>

        <p className="flex mb-4 font-normal text-base leading-normal gap-1 text-textLight2nd dark:text-textDark2nd">
          <CiLocationOn size={25} />
          {oneHotel.address}
        </p>

        <p className="flex mb-4 font-normal text-base leading-normal gap-1 text-textLight2nd dark:text-textDark2nd">
          {oneHotel.description}
        </p>
      </div>
    </div>
  );
};

export default HotelBooking;
