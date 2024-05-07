import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useGetAllBookingQuery } from "../../../api";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

function TransactionChart() {
  const { data } = useGetAllBookingQuery("");
  const [selectedRange, setSelectedRange] = useState(null);
  const [chartData, setChartData] = useState([]);

  const handleSearch = () => {
    const paymentData = data?.data;

    if (selectedRange && paymentData) {
      const [startDate, endDate]: any = selectedRange;

      const filteredPayment = paymentData.filter((booking: any) => {
        const bookingDate = new Date(booking.createdAt);
        return (
          booking.status === "Thành Công" &&
          bookingDate >= startDate &&
          bookingDate <= endDate
        );
      });

      const totalRevenueByDate = filteredPayment.reduce(
        (acc: any, curr: any) => {
          const date = new Date(curr.createdAt).toLocaleDateString();
          acc[date] = (acc[date] || 0) + curr.total_price;
          return acc;
        },
        {}
      );

      const newChartData: any = Object.keys(totalRevenueByDate).map((date) => ({
        name: date,
        DoanhThu: totalRevenueByDate[date],
      }));

      setChartData(newChartData);
    } else {
      const Payment = data?.data.filter(
        (booking: any) => booking.status == "Thành Công"
      );

      if (Payment && Payment.length > 0) {
        const totalRevenue = Payment.reduce((acc: any, curr: any) => {
          const date = new Date(curr.createdAt).toLocaleDateString();
          acc[date] = (acc[date] || 0) + curr.total_price;
          return acc;
        }, {});

        const newChartData: any = Object.entries(totalRevenue).map(
          ([date, value]) => ({
            name: date,
            DoanhThu: value,
          })
        );

        setChartData(newChartData);
      } else {
        console.error("No successful bookings found.");
      }
    }
  };
  useEffect(() => {
    handleSearch();
  }, [data]);
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1 mb-3">
      <strong className="text-gray-700 font-medium">Doanh thu theo ngày</strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <div>
          <label htmlFor="dateRangeInput" className="mr-2">
            Chọn khoảng ngày:
          </label>
          <RangePicker
            id="dateRangeInput"
            value={selectedRange}
            onChange={(dates: any) => setSelectedRange(dates)}
          />
          <button
            onClick={handleSearch}
            className="ml-2 bg-blue-400 text-white p-1"
          >
            Tìm kiếm
          </button>
        </div>
        {chartData?.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 30,
                right: 10,
                left: 20,
                bottom: 50,
              }}
            >
              <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="DoanhThu" fill="#0ea5e9" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="font-medium text-center text-xl mt-3">
            <h2>Không có dữ liệu</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default TransactionChart;
