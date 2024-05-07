import { IBooking } from "../../../interface";
import InfoBookingCard from "./InfoBookingCard";

type InfoBookingProps = {
  booking: IBooking[];
};

const InfoBooking = ({ booking }: InfoBookingProps) => {
  return (
    <div className="grid grid-cols-1 gap-3 py-5">
      {booking ? (
        booking.map((item, index) => (
          <div key={index}>
            <InfoBookingCard info={item} />
          </div>
        ))
      ) : (
        <span>Không có thông tin đặt phòng</span>
      )}
    </div>
  );
};

export default InfoBooking;
