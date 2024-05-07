import { useState } from "react";
import moment from "moment";

import type { DescriptionsProps } from "antd";
import { Button, Descriptions, Drawer, Image, Spin } from "antd";

import { useGetOneRoomQuery } from "../../../api";
import {
  TwoDrawnRoomAmenities,
  TwoDrawnRoomDescription,
  TwoDrawnRoomHotel,
} from "../..";

type RoomDrawnProps = {
  idRoom: string;
  openRoomDrawn: boolean;
  onClosedRoomDrawn: () => void;
};

const RoomDrawn = ({
  idRoom,
  openRoomDrawn,
  onClosedRoomDrawn,
}: RoomDrawnProps) => {
  const [openDrawnDescription, setOpenDrawnDescription] = useState(false);
  const [openDrawnAmenities, setOpenDrawnAmenities] = useState(false);
  const [openDrawnHotel, setOpenDrawnHotel] = useState(false);

  const { data, isFetching } = useGetOneRoomQuery(idRoom);

  const imgList: string[] = [];
  data?.data?.images &&
    data.data.images.forEach((item: { url: string }) => {
      imgList.push(item.url);
    });

  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Số lượng",
      children: data?.data?.quantity,
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "2",
      label: "Giá",
      children: data?.data?.id_roomType?.price?.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      }),
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "3",
      label: "Tiện nghi",
      children: (
        <>
          <Button type="link" onClick={() => setOpenDrawnAmenities(true)}>
            Xem chi tiết
          </Button>
          <TwoDrawnRoomAmenities
            dataAmenities={data?.data?.id_amenities}
            openDrawnAmenities={openDrawnAmenities}
            isClosedDrawnAmenities={() => setOpenDrawnAmenities(false)}
          />
        </>
      ),
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "4",
      label: "Khách sạn",
      children: (
        <>
          <Button type="link" onClick={() => setOpenDrawnHotel(true)}>
            Xem chi tiết
          </Button>
          <TwoDrawnRoomHotel
            dataHotel={data?.data?.id_hotel}
            openDrawnHotel={openDrawnHotel}
            isClosedDrawnHotel={() => setOpenDrawnHotel(false)}
          />
        </>
      ),
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "5",
      label: "Mô tả",
      children: (
        <>
          <Button type="link" onClick={() => setOpenDrawnDescription(true)}>
            Xem chi tiết
          </Button>
          <TwoDrawnRoomDescription
            dataDescription={data?.data?.description}
            openDrawnDescription={openDrawnDescription}
            isClosedDrawnDescription={() => setOpenDrawnDescription(false)}
          />
        </>
      ),
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "6",
      label: "Hình ảnh",
      children: (
        <Image.PreviewGroup items={imgList}>
          <Image width={100} src={data?.data?.images[0]?.url} />
        </Image.PreviewGroup>
      ),
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "7",
      label: "Trạng thái",
      children: data?.data?.status,
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "8",
      label: "Ngày tạo",
      children:
        data?.data?.createdAt &&
        moment(data?.data?.createdAt).format("DD/MM/YYYY"),
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
  ];

  return (
    <Drawer
      title={isFetching ? "" : data?.data?.name}
      placement="right"
      size="large"
      open={openRoomDrawn}
      closable={false}
      onClose={onClosedRoomDrawn}
    >
      {isFetching ? (
        <div className="flex items-center justify-center h-full">
          <Spin spinning={isFetching} />
        </div>
      ) : (
        <Descriptions title="Thông tin phòng" bordered items={items} />
      )}
    </Drawer>
  );
};

export default RoomDrawn;
