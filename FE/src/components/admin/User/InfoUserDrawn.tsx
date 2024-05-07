import moment from "moment";

import type { DescriptionsProps } from "antd";
import { Drawer, Descriptions, Image, Spin } from "antd";

import { IUser } from "../../../interface";

type InfoUserDrawnProps = {
  info: IUser | undefined;
  isOpen: boolean;
  loading: boolean;
  onClosed: () => void;
};

const InfoUserDrawn = ({
  info,
  isOpen,
  loading,
  onClosed,
}: InfoUserDrawnProps) => {
  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Tên",
      children: info?.id_information.name,
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "2",
      label: "Giới tính",
      children:
        info?.id_information.sex === 0
          ? "Nam"
          : info?.id_information.sex === 1
          ? "Nữ"
          : "",
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "3",
      label: "Email",
      children: info?.email,
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "4",
      label: "Số điện thoại",
      children: info?.id_information.phone,
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "5",
      label: "Địa chỉ",
      children: info?.id_information.address,
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "6",
      label: "Ngày sinh",
      children:
        info?.id_information.birthday &&
        moment(info?.id_information.birthday).format("DD/MM/YYYY"),
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "7",
      label: "Ngày tạo",
      children: info?.createdAt && moment(info?.createdAt).format("DD/MM/YYYY"),
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "8",
      label: "Hình ảnh",
      children: <Image src={info?.id_information.image} />,
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
  ];

  return (
    <Drawer
      title={loading ? "" : info?.id_information.name}
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
        <Descriptions title="Thông tin người dùng" bordered items={items} />
      )}
    </Drawer>
  );
};

export default InfoUserDrawn;
