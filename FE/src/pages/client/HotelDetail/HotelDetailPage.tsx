import {
  DetailOverview,
  InfoHotel,
  RoomList,
  Map,
  Amenities,
  RoomDetailCardProps,
} from "../../../components";
import { useGetOneHotelQuery } from "../../../api";
import { Loading } from "../..";
import { useParams } from "react-router-dom";
import { Result } from "antd";
import Review from "../Review/Review";
import { useState } from "react";

const HotelDetailPage = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const { data, isLoading, isSuccess } = useGetOneHotelQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  if (!isSuccess) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Result
          status="error"
          title="404"
          subTitle="Không tìm thấy thông tin khách sạn!"
        />
      </div>
    );
  }

  return (
    <>
      <div
        className={`bg-cover bg-center bg-fixed  w-full h-[500px]`}
        style={{ backgroundImage: `url(${data.data.images[0].url})` }}
      >
        <InfoHotel
          name={data?.data?.name}
          address={data?.data?.address}
          email={data?.data?.email}
          phone={data?.data?.phone}
        />
      </div>
      <div className="mt-20 p-5">
        <DetailOverview description={data?.data?.description} />
      </div>

      <div className="p-5 bg-divideLight dark:bg-divideDark py-10">
        <div className="max-w-[2520px] mx-auto xl:px-6 md:px-10 sm:px-2 px-4">
          <div className="flex flex-col mb-4">
            <h2 className="font-lato uppercase font-semibold text-2xl leading-7 text-textLight dark:text-textDark">
              Các loại phòng
            </h2>
            <RoomList listRoom={data?.data?.id_room} />
          </div>
        </div>
      </div>
      <Review dataHotel={data?.data} />
      <Amenities amenities={data?.data?.id_amenities} />
      <Map />
    </>
  );
};

export default HotelDetailPage;
