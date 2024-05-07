import { useEffect, useState } from "react";
import { ReviewInput, Comment, RateProps } from "../../../components";
import Evaluate from "../../../components/client/Review/Evaluate";
import {
  useGetAllReviewQuery,
  useInfoAccountQuery,
  useGetAllHotelQuery,
} from "../../../api";

const Review = () => {
  const { data: dataHotel } = useGetAllHotelQuery("");
  const { data: userData } = useInfoAccountQuery("");
  const { data } = useGetAllReviewQuery("");
  const [Data, setData] = useState([]);

  useEffect(() => {
    if (data?.data) {
      setData(data?.data);
    }
  }, [data]);

  return (
    <div className="max-w-screen-xl mx-auto xl:px-8 md:px-6 sm:px-4 px-4 py-10 font-Lato bg-white mt-4 rounded-2xl my-10">
      <div className="text-[#333333] font-semibold leading-7 text-2xl text-left">
        <span>Đánh giá & Nhận xét Khách sạn {dataHotel?.name}</span>
      </div>

      <div className="flex justify-between">
        <Comment data={Data} />
        <RateProps data={Data} />
        <Evaluate id_hotel={dataHotel} data={userData} />
      </div>

      <ReviewInput data={Data} userData={userData} />
    </div>
  );
};

export default Review;
