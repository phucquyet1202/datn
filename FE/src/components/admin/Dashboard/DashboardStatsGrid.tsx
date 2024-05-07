import { IoBagHandle } from "react-icons/io5";
import { useGetAllBookingQuery, useGetAllRoomQuery } from "../../../api";

const DashboardStatsGrid = () => {
  const { data: rooms } = useGetAllRoomQuery("");
  const { data: bookings } = useGetAllBookingQuery("");
  // Phòng trống
  const emtyRoom = rooms?.data?.filter((room: any) => room.status == "Có sẵn");
  const totalEmptyRoomQuantity = emtyRoom?.reduce((acc: number, room: any) => {
    return acc + (room.quantity || 0);
  }, 0);
  // Phòng đã được đặt
  const bookedRoom = bookings?.data?.filter(
    (booking: any) => booking.status === "Thành Công"
  );
  const totalBookRoomQuantity = bookedRoom?.reduce(
    (acc: number, booking: any) => {
      const roomQuantities =
        booking.list_room?.map((room: any) => room.quantity) || [];
      const bookingTotalQuantity = roomQuantities.reduce(
        (roomAcc: number, roomQuantity: number) =>
          roomAcc + (roomQuantity || 0),
        0
      );
      return acc + bookingTotalQuantity;
    },
    0
  );

  // doanh thu
  // const paymentRoom = payment?.data?.filter((booking: any) => booking?.status == 'Thành công')
  const totaPayment = bookedRoom?.reduce((acc: number, room: any) => {
    return acc + (room.total_price || 0);
  }, 0);
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex border-sky-500 items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>

        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Phòng trống</span>
          <div className="flex  items-center ">
            <strong className="text-xl text-gray-700 font-semibold">
              {totalEmptyRoomQuantity}
            </strong>
            {/* <span className="text-sm text-green-500 pl-2">+234</span> */}
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex border-orange-600 items-center justify-center bg-orange-600">
          <IoBagHandle className="text-2xl text-white" />
        </div>

        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Phòng được đặt
          </span>
          <div className="flex  items-center ">
            <strong className="text-xl text-gray-700 font-semibold">
              {totalBookRoomQuantity}
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex border-yellow-400 items-center justify-center bg-yellow-600">
          <IoBagHandle className="text-2xl text-white" />
        </div>

        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Số lượng khách
          </span>
          <div className="flex  items-center ">
            <strong className="text-xl text-gray-700 font-semibold">
              {bookings?.data?.length}
            </strong>
            {/* <span className="text-sm text-green-500 pl-2">+234</span> */}
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex border-green-600 items-center justify-center bg-green-600">
          <IoBagHandle className="text-2xl text-white" />
        </div>

        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Doanh thu</span>
          <div className="flex  items-center ">
            <strong className="text-xl text-gray-700 font-semibold">
              {totaPayment?.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </strong>
            {/* <span className="text-sm text-green-500 pl-2">+234</span> */}
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DashboardStatsGrid;

function BoxWrapper({ children }: any) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
