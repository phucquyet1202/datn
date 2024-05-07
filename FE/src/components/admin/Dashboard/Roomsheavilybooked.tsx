import { useEffect, useState } from "react";
import { useGetAllBookingQuery } from "../../../api";
import { DatePicker } from "antd";

function Roomsheavilybooked() {
  const { RangePicker } = DatePicker;
  const [selectedRange, setSelectedRange] = useState(null);
  const { data: bookings } = useGetAllBookingQuery("");
  const [topCustomers, setTopCustomers] = useState<any[]>([]);

  const handleCick = () => {
    if (selectedRange && bookings?.data) {
      const [startDate, endDate]: any = selectedRange;

      // Tạo đối tượng để lưu số lần mỗi khách hàng đã đặt thành công
      const customerSuccessCount: any = {};

      bookings.data.forEach((booking: any) => {
        const bookingDate = new Date(booking.createdAt);

        const customerId = booking.id_user?._id;

        // Nếu đơn hàng là thành công và khách hàng đã tồn tại trong đối tượng, tăng số lần đặt thành công lên 1
        if (booking.status === "Thành công" &&
          bookingDate >= startDate &&
          bookingDate <= endDate) {
          if (customerSuccessCount[customerId]) {
            customerSuccessCount[customerId]++;
          } else {
            // Nếu chưa tồn tại, tạo mới và đặt số lần đặt thành công là 1
            customerSuccessCount[customerId] = 1;
          }
        }
      });

      // Chuyển đối tượng thành mảng và sắp xếp theo số lần đặt thành công giảm dần
      const sortedCustomers = Object.entries(customerSuccessCount)
        .sort(([, countA], [, countB]) => countB - countA)
        .slice(0, 5) // Chỉ lấy 5 khách hàng đặt thành công nhiều nhất
        .map(([customerId, successCount]) => {
          // Tìm tên khách hàng từ ID
          const customer = bookings.data.find(
            (booking: any) => booking.id_user?._id === customerId
          );

          // Trả về thông tin của khách hàng
          return {
            id: customerId,
            name: customer?.id_user?.id_information?.name || "Unknown",
            totalSuccess: successCount,
          };
        });

      setTopCustomers(sortedCustomers);
    } else if (bookings?.data) {
      const customerSuccessCount: any = {};

      bookings.data.forEach((booking: any) => {
        const customerId = booking.id_user?._id;

        // Nếu đơn hàng là thành công và khách hàng đã tồn tại trong đối tượng, tăng số lần đặt thành công lên 1
        if (booking.status === "Thành công") {
          if (customerSuccessCount[customerId]) {
            customerSuccessCount[customerId]++;
          } else {
            // Nếu chưa tồn tại, tạo mới và đặt số lần đặt thành công là 1
            customerSuccessCount[customerId] = 1;
          }
        }
      });

      // Chuyển đối tượng thành mảng và sắp xếp theo số lần đặt thành công giảm dần
      const sortedCustomers = Object.entries(customerSuccessCount)
        .sort(([, countA], [, countB]) => countB - countA)
        .slice(0, 5) // Chỉ lấy 5 khách hàng đặt thành công nhiều nhất
        .map(([customerId, successCount]) => {
          // Tìm tên khách hàng từ ID
          const customer = bookings.data.find(
            (booking: any) => booking.id_user?._id === customerId
          );

          // Trả về thông tin của khách hàng
          return {
            id: customerId,
            name: customer?.id_user?.id_information?.name || "Unknown",
            totalSuccess: successCount,
          };
        });

      setTopCustomers(sortedCustomers);
    }
  };

  useEffect(() => {
    handleCick();
  }, [bookings]);

  return (
    <div className="w-[30rem] bg-white p-4 rounded-sm border border-gray-200">
      <strong className="text-gray-700 font-medium">
        Top 5 khách hàng đặt thành công nhiều nhất
      </strong>
      <div>
        <div className="m-3">
          <label htmlFor="dateRangeInput" className="mr-2">
            Chọn khoảng ngày:
          </label>
        </div>
        <RangePicker
          id="dateRangeInput"
          value={selectedRange}
          onChange={(dates: any) => setSelectedRange(dates)}
          style={{ width: "70%" }}
        />
        <button
          onClick={handleCick}
          className="ml-2 bg-blue-400 text-white p-1"
        >
          Tìm kiếm
        </button>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Tên khách hàng</th>
              <th className="py-2 px-4 border-b">Số lượng đặt thành công</th>
            </tr>
          </thead>
          <tbody>
            {topCustomers.map((customer) => (
              <tr key={customer.id} className="border-b text-center">
                <td className="py-2 px-4">{customer.name}</td>
                <td className="py-2 px-4">{customer.totalSuccess}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Roomsheavilybooked;
