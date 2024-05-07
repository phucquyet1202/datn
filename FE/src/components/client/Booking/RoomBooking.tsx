import { useState } from "react";
import { Counter } from "../..";
import { IRoomBooking, IRoom } from "../../../interface";

type RoomBookingProps = {
  room: IRoom;
  total: number;
  selectRoom: IRoomBooking[];
  setTotal: (value: number) => void;
  setSelectRoom: (value: IRoomBooking[]) => void;
};

const RoomBooking = ({
  room,
  setTotal,
  total,
  selectRoom,
  setSelectRoom,
}: RoomBookingProps) => {
  const [value, setValue] = useState(0);

  const handleQuantityChange = (newValue: number) => {
    const currentValue = value;

    setValue(newValue);

    if (newValue === 0) {
      setSelectRoom(selectRoom.filter((item) => item.idRoom._id !== room._id));
    } else {
      const existingRoom = selectRoom.find(
        (item) => item.idRoom._id === room._id
      );

      if (existingRoom) {
        const newSelectRoom = selectRoom.map((item) =>
          item.idRoom._id === room._id ? { ...item, quantity: newValue } : item
        );

        setSelectRoom(newSelectRoom);
      } else {
        setSelectRoom([...selectRoom, { idRoom: room, quantity: newValue }]);
      }
    }

    const roomTotal = room?.id_roomType?.price * newValue;
    const newRoomTotal = roomTotal - room?.id_roomType?.price * currentValue;

    setTotal(total + newRoomTotal);
  };

  return (
    <div className="mx-3 flex p-3 mt-5 mb-4 gap-3 rounded-lg bg-backgroundLight dark:bg-backgroundDark">
      <div className="no-underline">
        <img
          src={room?.images[0].url}
          alt={room._id}
          className="rounded-md w-80 object-contain"
        />
      </div>

      <div className="flex flex-col gap-5">
        <div className="text-textLight dark:text-textDark text-3xl">
          {room.id_roomType.name}
        </div>

        <div className="text-textLight2nd dark:text-textDark2nd flex gap-1 items-center text-xl">
          <span>
            {room?.id_roomType.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </span>

          <span>/đêm</span>
        </div>

        <Counter
          title="Số lượng"
          value={value}
          onChange={handleQuantityChange}
          min={0}
          max={room.quantity}
        />
      </div>
    </div>
  );
};

export default RoomBooking;
