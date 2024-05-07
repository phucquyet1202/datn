import { IRoom } from "../../../interface";
import { Button } from "../../";
type RoomCardProps = {
  room: IRoom;
  onOpenDetail: () => void;
};
const RoomCard = ({ room, onOpenDetail }: RoomCardProps) => {
  return (
    <>
      <div className="h-auto transition duration-300 rounded-md bg-light dark:bg-dark">
        <div className="overflow-hidden h-64">
          <button onClick={onOpenDetail}>
            <img
              src={`${room?.images[0]?.url}`}
              alt="Room"
              className="w-full h-full object-cover"
            />
          </button>
        </div>

        <div className="flex-1 p-5 text-textLight2nd dark:text-textDark2nd">
          <button
            onClick={onOpenDetail}
            className="text-blue-500 cursor-default"
          >
            <h5 className="font-semibold text-lg">{room?.id_roomType?.name}</h5>
          </button>

          <div className="flex flex-row justify-between items-center">
            <div className="mt-3">
              <span className="mr-1 text-xs">Chỉ từ</span>

              {/* <span className="text-md text-yellow-500 font-bold capitalize">
                {room?.price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span> */}

              <span className="ml-1 text-xs">/đêm</span>
            </div>

            {/* <div className="w-[40%]">
              <Button
                label="Đặt ngay"
                onClick={() => alert("Đặt phòng")}
                disabled={room.quantity === 0}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCard;
