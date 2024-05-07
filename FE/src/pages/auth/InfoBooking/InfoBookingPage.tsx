import { Loading } from "../..";
import { useGetBookingByUserQuery } from "../../../api";
import { InfoBooking } from "../../../components";

const InfoBookingPage = () => {
  const { data, isLoading } = useGetBookingByUserQuery("");

  return (
    <div className="rounded-xl bg-light dark:bg-dark p-3 w-full">
      <div className="border-b p-1 border-divideLight dark:border-divideDark">
        <div className="flex items-center gap-10">
          <div>
            <h2 className="text-2xl font-bold text-textLight dark:text-textDark">
              Thông tin đặt phòng
            </h2>
            <p className="text-base mt-3 text-textLight2nd dark:text-textDark2nd">
              Xem thông tin các đơn đặt phòng của bạn
            </p>
          </div>
        </div>
      </div>

      {isLoading ? <Loading /> : <InfoBooking booking={data?.data} />}
    </div>
  );
};

export default InfoBookingPage;
