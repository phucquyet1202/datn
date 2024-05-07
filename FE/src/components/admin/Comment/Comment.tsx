import { useState } from "react";
import moment from "moment";
import type { ColumnsType } from "antd/es/table";
import {
  Button,
  Select,
  Space,
  Table,
  Tooltip,
  message,
  Modal,
  Popconfirm,
} from "antd";

import { IHotel } from "../../../interface";
import {
  useGetAllReviewQuery,
  useGetOneReviewQuery,
  useDeleteReviewMutation,
} from "../../../api";
import {
  CreateHotelModal,
  EditHotelModal,
  HotelDrawn,
} from "../../../components";

const Comment = () => {
  const [idHotel, setIdHotel] = useState("");
  const [idReview, setIdReview] = useState("");
  const [openHotelDrawn, setOpenHotelDrawn] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deletingItemId, setDeletingItemId] = useState("");

  const { data: allReview, isLoading } = useGetAllReviewQuery("");
  const [deleteReview] = useDeleteReviewMutation();

  const onClosedHotelDrawn = () => {
    setOpenHotelDrawn(false);
  };

  // const showDeleteConfirm = (itemId: string) => {
  //   setDeletingItemId(itemId);
  //   setDeleteModalVisible(true);
  // };

  const handleDeleteConfirm = (id: string) => {
    deleteReview(id)
      .unwrap()
      .then(() => {
        message.success("Đã xóa bình luận thành công");
        setDeleteModalVisible(false);
      })
      .catch((error) => {
        message.error(error.data.message);
      });
  };

  const handleDeleteCancel = () => {
    setDeleteModalVisible(false);
  };

  const columns: ColumnsType<IHotel> = [
    {
      title: "STT",
      dataIndex: "_id",
      key: "_id",
      render: (_id, {}, index) => index + 1,
    },
    {
      title: "Email",
      dataIndex: "id_user",
      key: "id_user",
      render: (user) => {
        return <p className="font-bold">{user?.email}</p>;
      },
    },
    {
      title: "Nội dung comment",
      dataIndex: "comment",
      key: "comment",
    },
    {
      title: "Đánh giá",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => {
        return <p>{rating} ⭐</p>;
      },
      sorter: (a, b) => a?.rating - b?.rating,
    },
    {
      title: "Thời gian comment",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => {
        return <span>{moment(createdAt).format("YYYY-MM-DD | HH:mm:ss")}</span>;
      },
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, { _id }) => (
        <>
          <Space>
            <Popconfirm
              placement="left"
              title="Bạn có chắc chắn muốn thực hiện hành động này không?"
              description="Hành động này không thể hoàn tác."
              onConfirm={() => handleDeleteConfirm(_id)}
              okText="Đồng ý"
              okType="danger"
              cancelText="Hủy"
            >
              <Button>Xóa</Button>
            </Popconfirm>
          </Space>
        </>
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
        bordered
        rowKey="_id"
        columns={columns}
        dataSource={allReview?.data}
        loading={isLoading}
        pagination={paginationConfig}
      />

      {/* <Modal
        title="Xác nhận xóa"
        visible={deleteModalVisible}
        onOk={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        okButtonProps={{ style: { backgroundColor: "red", color: "white" } }}
      >
        <p>Bạn có chắc muốn xóa bình luận này không?</p>
      </Modal> */}
    </>
  );
};

export default Comment;
