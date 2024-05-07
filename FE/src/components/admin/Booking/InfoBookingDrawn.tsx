import moment from "moment";
import { useState } from "react";
import {
  Button,
  Descriptions,
  Drawer,
  Select,
  Space,
  Spin,
  message,
} from "antd";
import type { DescriptionsProps } from "antd";

import { IBooking } from "../../../interface";
import TwoDrawnBookingRoom from "./TwoDrawnBookingRoom";
import { useUpdateBookingMutation } from "../../../api";

type InfoBookingDrawnProps = {
  info: IBooking | undefined;
  isOpen: boolean;
  loading: boolean;
  onClosed: () => void;
};

const InfoBookingDrawn = ({
  info,
  isOpen,
  loading,
  onClosed,
}: InfoBookingDrawnProps) => {
  const [openDrawnBookingRoom, setOpenDrawnBookingRoom] = useState(false);
  const [updateStatus] = useUpdateBookingMutation();

  const handleChange = (value: string) => {
    updateStatus({ _id: info?._id, status: value })
      .unwrap()
      .then(() => message.success("Cập nhật trạng thái thành công"));
  };
  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Ngày nhận",
      children: moment(info?.check_in).format("DD/MM/YYYY"),
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "2",
      label: "Ngày trả",
      children: moment(info?.check_out).format("DD/MM/YYYY"),
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "3",
      label: "Tổng giá",
      children: info?.total_price.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      }),
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "4",
      label: "Phương thức thanh toán",
      children: info?.payment_method,
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "5",
      label: "Danh sách phòng",
      children: (
        <>
          <Button type="link" onClick={() => setOpenDrawnBookingRoom(true)}>
            Xem chi tiết
          </Button>
          <TwoDrawnBookingRoom
            dataBookingRooms={info?.list_room}
            openDrawnRoom={openDrawnBookingRoom}
            isClosedDrawnBookingRoom={() => setOpenDrawnBookingRoom(false)}
          />
        </>
      ),
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "6",
      label: "Trạng thái",
      children: (
        <Space wrap>
          <Select
            defaultValue={info?.status}
            style={{ width: 120 }}
            onChange={handleChange}
            disabled={
              info?.status === "Đã hủy bỏ" || info?.status === "Thành công"
            }
            options={[
              { value: "Chờ thanh toán", label: "Chờ thanh toán" },
              { value: "Đang xử lý", label: "Đang xử lý" },
              { value: "Đã xác nhận", label: "Đã xác nhận" },
              { value: "Đã nhận phòng", label: "Đã nhận phòng" },
              { value: "Thành công", label: "Thành công" },
              { value: "Vắng mặt", label: "Vắng mặt" },
              { value: "Đã hủy bỏ", label: "Đã hủy bỏ" },
            ]}
          />
        </Space>
      ),
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
  ];

  return (
    <Drawer
      title={loading ? "" : "Thông tin đặt phòng"}
      placement="right"
      size="large"
      open={isOpen}
      closable={false}
      onClose={onClosed}
    >
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <Spin spinning={loading} />
        </div>
      ) : (
        <Descriptions
          title="Thông tin đặt phòng"
          key="_id"
          bordered
          items={items}
        />
      )}
    </Drawer>
  );
};

export default InfoBookingDrawn;
