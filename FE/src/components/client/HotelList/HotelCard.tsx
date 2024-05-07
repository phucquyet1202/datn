import { useLocation, useNavigate } from "react-router-dom";
import qs from "query-string";
import { Rate } from "antd";
import moment from "moment";
import { Button } from "../..";
import { IRoom } from "../../../interface";
import { CiLocationOn } from "../../../icons";

type HotelCardProps = {
  hotel: IRoom;
};

const HotelCard = ({ hotel }: any) => {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const checkin = params.get("checkin");
  const checkout = params.get("checkout");

  const toggleBooking = (id: string) => {
    let currentQuery = {};

    if (location.search) {
      currentQuery = qs.parse(location.search.toString());
    }

    // eslint-disable-next-line
    const updatedQuery: any = {
      ...currentQuery,
      hotel: id,
    };

    if (!checkin) {
      updatedQuery.checkin = moment().format("YYYY-MM-DD");
    }

    if (!checkout) {
      updatedQuery.checkout = moment().add(1, "days").format("YYYY-MM-DD");
    }

    const url = qs.stringifyUrl(
      {
        url: "/booking",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    navigate(url);
  };

  const toggleDetail = (id: string) => {
    let currentQuery = {};

    if (location.search) {
      currentQuery = qs.parse(location.search.toString());
    }

    // eslint-disable-next-line
    const updatedQuery: any = {
      ...currentQuery,
    };

    const url = qs.stringifyUrl(
      {
        url: `/hotel-detail/${hotel?.id_hotel?._id}`,
        query: updatedQuery,
      },
      { skipNull: true }
    );

    window.open(url, "_blank");
  };

  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 p-3 mb-4 gap-3 rounded-lg bg-light dark:bg-dark">
        <div className="relative">
          <div
            onClick={() => toggleDetail(hotel?.id_hotel?._id)}
            className="no-underline cursor-pointer"
          >
            <img
              src={hotel?.images[0].url}
              alt={hotel?.id_roomType?.name}
              className="rounded-md w-full xl:h-48 md:h-44 object-contain"
            />
          </div>
        </div>

        <div className="box-border">
          <h2 className="font-semibold text-2xl leading-normal mb-4 text-textLight dark:text-textDark">
            <div
              onClick={() => toggleDetail(hotel?._id)}
              className="no-underline hover:text-blue-500 cursor-pointer"
            >
              {hotel?.id_roomType?.name}
            </div>
          </h2>

          <p className="flex mb-4 font-normal text-base leading-normal gap-1 text-textLight2nd dark:text-textDark2nd">
            <CiLocationOn size={25} />
            {hotel?.id_hotel?.name}
          </p>

          <div className="flex items-center justify-start gap-1">
            <span className="text-textLight dark:text-textDark">Đánh giá:</span>

            <Rate
              disabled
              value={3}
              className="text-yellow-400 dark:text-yellow-500"
            />
          </div>
        </div>

        <div className="pl-5 lg:border-l border-divideLight dark:border-divideDark flex">
          <div className="w-full mt-auto text-right text-textLight2nd dark:text-textDark2nd">
            <div className="box-border">
              <div className="flex lg:flex-col flex-row gap-10">
                <div>
                  <p>Chỉ từ</p>

                  <p className="text-md lg:text-2xl font-bold text-textLight dark:text-textDark">
                    <p className="text-md lg:text-2xl font-bold text-textLight dark:text-textDark">
                      {hotel?.id_roomType?.price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                  </p>

                  <p>phòng/đêm</p>
                </div>
                <Button
                  label={hotel?.quantity >= 0 ? "Đặt phòng" : "Hết phòng"}
                  disabled={hotel?.quantity >= 0 ? false : true}
                  onClick={() => toggleBooking(hotel?.id_hotel)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelCard;
