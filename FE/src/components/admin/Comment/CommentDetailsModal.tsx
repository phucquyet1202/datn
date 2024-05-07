// CommentDetailsModal.jsx
import React from "react";
import { Modal, Descriptions, Button } from "antd";

const CommentDetailsModal = ({ visible, comment, onClose }) => {
  return (
    <Modal
      title="Thông tin chi tiết bình luận"
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Đóng
        </Button>,
      ]}
    >
      <Descriptions bordered>
        <Descriptions.Item label="ID">{comment._id}</Descriptions.Item>
        <Descriptions.Item label="Tên Người dùng">
          {comment.id_user.email}
        </Descriptions.Item>
        <Descriptions.Item label="Nội dung comment">
          {comment.comment}
        </Descriptions.Item>
        <Descriptions.Item label="Thời gian comment">
          {comment.createdAt}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default CommentDetailsModal;
