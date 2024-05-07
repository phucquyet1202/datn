import { Button, Space, Table, TableProps } from "antd";
import React, { useState } from "react";
import { useGetAllQuery } from "../../../api/voucher";
import moment from "moment";
import CreateVoucherModel from "../../../components/admin/Voucher/CreateVoucherModel";

const VoucherManage = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const { data: vouchers } = useGetAllQuery("");
  interface DataType {
    _id: string;
    key: string;
    code: string;
    issueDate: string;
    expiryDate: string;
    discountValue: number;
    roomType: string;
    index: number;
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Ngày bắt đầu áp dụng",
      dataIndex: "issueDate",
      key: "issueDate",
      render: (text: string) => moment(text).format("YYYY-MM-DD"),
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "expiryDate",
      key: "expiryDate",
      render: (text: string) => moment(text).format("YYYY-MM-DD"),
    },
    {
      title: "Số tiền được giảm giá",
      dataIndex: "discountValue",
      key: "discountValue",
      render: (text: number) =>
        text.toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        }),
    },
    {
      title: "Loại phòng được áp dụng",
      dataIndex: "roomType",
      key: "roomType",
    },

    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (_, { _id }) => (
    //         <Space>
    //             <Button
    //                 onClick={() => {
    //                     //   setShowEditModal(true);
    //                     //   setIdRoomEdit(_id);
    //                 }}
    //             >
    //                 Sửa
    //             </Button>
    //         </Space>
    //     ),
    // },
  ];

  const data: DataType[] = vouchers?.data?.map((item: any, index: number) => {
    return {
      key: item._id,
      code: item.voucherCode,
      issueDate: item.issueDate,
      expiryDate: item.expiryDate,
      discountValue: item.discountValue,
      roomType: item.roomType?.name,
      index: index + 1,
    };
  });
  return (
    <div>
      <Table
        bordered
        title={() => (
          <div className="flex items-center justify-end">
            <Button onClick={() => setShowCreateModal(true)}>Thêm mới</Button>
          </div>
        )}
        columns={columns}
        dataSource={data}
      />
      <CreateVoucherModel
        isOpenCreate={showCreateModal}
        onCancel={() => setShowCreateModal(false)}
      />
    </div>
  );
};

export default VoucherManage;
