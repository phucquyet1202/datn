import moment from "moment";

import { IHotel } from "../../../interface";

type DetailBookingProps = {
  hotel: IHotel;
  totalPrice: number;
  checkIn: string;
  checkOut: string;
  onBooking: () => void;
  numberOfDays: number;
};

const DetailBooking = ({
  hotel,
  totalPrice,
  checkIn,
  checkOut,
  numberOfDays,
  onBooking,
}: DetailBookingProps) => {
  return (
    <div className="flex flex-col col-span-1 bg-light dark:bg-dark p-3">
      <h2 className="text-xl text-textLight dark:text-textDark border-b border-divideLight dark:border-divideDark p-5">
        Thông tin đặt phòng
      </h2>

      <div className="py-3">
        <div className="bg-light dark:bg-dark p-2">
          <span className="mt-1 text-lg text-textLight2nd dark:text-textDark2nd">
            {hotel.name}
          </span>
        </div>

        <div className="bg-light dark:bg-dark p-2 flex gap-1 text-medium text-textLight2nd dark:text-textDark2nd">
          <p>{moment(checkIn).format("DD/MM/YYYY")}</p>
          <p>-</p>
          <p>{moment(checkOut).format("DD/MM/YYYY")}</p>
          <span>({numberOfDays} ngày)</span>
        </div>
      </div>

      <div className="text-textLight2nd dark:text-textDark2nd border-t border-divideLight dark:border-divideDark py-5 px-2 flex justify-between">
        <span className="text-md">Tổng cộng</span>
        <span>
          {(numberOfDays * totalPrice).toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </span>
      </div>

      <div
        onClick={onBooking}
        className="mt-10 flex justify-center items-center border border-divideLight dark:border-divideDark hover:bg-blue-500 cursor-pointer text-textLight dark:text-textDark"
      >
        <span className="p-3">Đặt phòng</span>
      </div>
    </div>
  );
};

export default DetailBooking;
