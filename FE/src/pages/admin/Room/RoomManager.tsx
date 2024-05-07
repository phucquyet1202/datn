import { useState } from "react";

import type { ColumnsType } from "antd/es/table";
import { Button, Space, Table, Tag, Tooltip } from "antd";

import { useGetAllRoomQuery, useGetOneRoomQuery } from "../../../api";
import { CreateRoomModal, EditRoomModal, RoomDrawn } from "../../../components";
import { IRoom } from "../../../interface";

const RoomManager = () => {
  const [idRoom, setIdRoom] = useState("");
  const [idRoomEdit, setIdRoomEdit] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [openRoomDrawn, setOpenRoomDrawn] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const { data: oneRoom, isFetching } = useGetOneRoomQuery(idRoomEdit);
  const { data: allRoom, isLoading } = useGetAllRoomQuery("");

  const onClosedRoomDrawn = () => {
    setOpenRoomDrawn(false);
  };

  const columns: ColumnsType<IRoom> = [
    {
      title: "STT",
      dataIndex: "_id",
      key: "_id",
      render: (_id, {}, index) => index + 1,
    },
    {
      title: "Loại phòng",
      dataIndex: "id_roomType",
      key: "id_roomType",
      render: (id_roomType, { _id }) => (
        <Tooltip placement="right" title="Click để xem thông tin chi tiết">
          <button
            onClick={() => {
              setOpenRoomDrawn(true);
              setIdRoom(_id);
            }}
          >
            {id_roomType?.name}
          </button>
        </Tooltip>
      ),
    },
    {
      title: "Số lượng phòng",
      dataIndex: "quantity",
      key: "quantity",
      render: (id_hotel) => id_hotel,
    },
    {
      title: "Số phòng",
      dataIndex: "list_rooms",
      key: "list_rooms",
      render: (list_rooms) =>
        list_rooms?.map((room: any) => (
          <span key={room._id} className="mx-0.5">
            <span>{room.room}</span>,
          </span>
        )),
    },
    {
      title: "Khách sạn",
      dataIndex: "id_hotel",
      key: "id_hotel",
      render: (id_hotel) => id_hotel.name,
    },
    {
      title: "Giá",
      dataIndex: "id_roomType",
      key: "id_roomType",
      render: (price) => {
        return price?.price.toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        });
      },
      sorter: (a, b) => a.price - b.price,
    },
    // {
    //   title: "Trạng thái",
    //   dataIndex: "status",
    //   key: "status",

    //   render: (_, { quantity }) => {
    //     return (
    //       <Tag color={quantity > 0 ? "#87d068" : "#f70000"}>
    //         {quantity > 0 ? "Có sẵn" : "Đã hết phòng"}
    //       </Tag>
    //     );
    //   },
    // },
    {
      title: "Hành động",
      key: "action",
      render: (_, { _id }) => (
        <Space>
          <Button
            onClick={() => {
              setShowEditModal(true);
              setIdRoomEdit(_id);
            }}
          >
            Sửa
          </Button>
        </Space>
      ),
    },
  ];

  const [currentItem, setCurrentItem] = useState(10);
  const paginationConfig = {
    pageSize: currentItem,
    showSizeChanger: true,
    pageSizeOptions: ["10", "20", "30", "50"],
    onShowSizeChange: (_current: number, size: number) => {
      setCurrentItem(size);
    },

    showTotal: (total: number, range: number[]) =>
      `${range[0]}-${range[1]} của ${total} mục`,
  };

  return (
    <>
      <Table
        title={() => (
          <div className="flex items-center justify-end">
            <Button onClick={() => setShowCreateModal(true)}>Thêm mới</Button>
          </div>
        )}
        bordered
        rowKey="_id"
        columns={columns}
        dataSource={allRoom?.data}
        loading={isLoading}
        pagination={paginationConfig}
      />

      {idRoom && (
        <RoomDrawn
          idRoom={idRoom}
          openRoomDrawn={openRoomDrawn}
          onClosedRoomDrawn={onClosedRoomDrawn}
        />
      )}

      <CreateRoomModal
        isOpenCreate={showCreateModal}
        onCancel={() => setShowCreateModal(false)}
      />

      <EditRoomModal
        key={oneRoom?.data._id}
        isOpenEdit={showEditModal}
        data={oneRoom?.data}
        loading={isFetching}
        onCancel={() => setShowEditModal(false)}
      />
    </>
  );
};

export default RoomManager;
