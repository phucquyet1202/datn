import {
  useGetAllRoomQuery,
  useUpdateStatusRoomNumberMutation,
} from "../../../api";

const EmptyRoom = () => {
  const { data } = useGetAllRoomQuery("");
  const [upStatus, checkUp] = useUpdateStatusRoomNumberMutation();

  return (
    <div>
      {data?.data?.map((room: any, index: number) => {
        return (
          <div key={`${index}-emt`} className="flex items-center">
            <p className="w-[150px]  py-2">{room?.id_roomType?.name}</p>
            <div className="flex gap-2">
              {room?.list_rooms.map((ls: any, index: number) => {
                return (
                  <div
                    key={`${index}-emr`}
                    className={`text-white p-4  mt-2 ${
                      ls.status ? "bg-blue-500" : "bg-red-500"
                    }`}
                  >
                    <p>{ls.room}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EmptyRoom;
