import moment from "moment";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Result } from "antd";
import { useCookies } from "react-cookie";

import { Loading } from "../..";
import { useGetOneHotelQuery } from "../../../api";

import {
  Container,
  DetailBooking,
  HotelBooking,
  RoomBooking,
} from "../../../components";
import { IRoomBooking, IRoom } from "../../../interface";
import toast from "react-hot-toast";

const BookingPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedRoom, setSelectedRoom] = useState<IRoomBooking[]>([]);
  const [, setCookie] = useCookies<string>();

  const params = new URLSearchParams(search);

  const checkIn = params.get("checkin") || "";
  const checkOut = params.get("checkout") || "";
  const numberOfDays = moment(checkOut).diff(moment(checkIn), "days");

  const idHotel = params.get("hotel") || "";

  const { data, isSuccess, isLoading } = useGetOneHotelQuery(idHotel);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (!isSuccess) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Result title="Không tìm thấy khách sạn" status={404} />
      </div>
    );
  }

  const onBooking = () => {
    const totalPriceEnd = numberOfDays * totalPrice;

    const dataBooking = {
      check_in: checkIn,
      check_out: checkOut,
      total_price: totalPriceEnd,
      list_room: selectedRoom.map((item) => ({
        idRoom: item.idRoom._id,
        quantity: item.quantity,
      })),
      city: data?.data.city,
    };

    if (!selectedRoom || selectedRoom.length === 0) {
      return toast.error("Bạn chưa chọn phòng!");
    }

    setCookie("booking", dataBooking, { path: "/" });

    navigate(`/payment/${idHotel}`);
  };

  return (
    <Container>
      <HotelBooking oneHotel={data?.data} />

      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3 bg-light dark:bg-dark">
          {data?.data?.id_room.map((room: IRoom) => (
            <RoomBooking
              key={room._id}
              room={room}
              total={totalPrice}
              setTotal={(value) => setTotalPrice(value)}
              selectRoom={selectedRoom}
              setSelectRoom={(value) => setSelectedRoom(value)}
            />
          ))}
        </div>

        <DetailBooking
          hotel={data?.data}
          totalPrice={totalPrice}
          checkIn={checkIn}
          checkOut={checkOut}
          numberOfDays={numberOfDays}
          onBooking={onBooking}
        />
      </div>
    </Container>
  );
};

export default BookingPage;
