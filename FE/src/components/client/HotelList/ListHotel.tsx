// Trong ListHotel.tsx

import React, { useState } from "react";
import { Pagination } from "antd";
import { HotelCard } from "../..";
import { IHotel } from "../../../interface";
import { Loading } from "../../../pages";

type ListHotelProps = {
  listHotel: IHotel[] | undefined;
  isLoading: boolean;
};

const ListHotel = ({ listHotel }: ListHotelProps) => {
  const itemsPerPage = 5; // Số lượng mục trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1);

  // if (isLoading) {
  //   return <Loading />;
  // }

  // Tính toán chỉ những mục thuộc về trang hiện tại
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listHotel?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="box-border">
        {currentItems && currentItems.length > 0
          ? currentItems.map((hotel) => (
              <HotelCard key={hotel._id} hotel={hotel} />
            ))
          : "Không có khách sạn"}

        <Pagination
          defaultCurrent={1}
          total={listHotel?.length || 0}
          pageSize={itemsPerPage}
          onChange={(page) => setCurrentPage(page)}
          className="text-center"
        />
      </div>
    </>
  );
};

export default ListHotel;
