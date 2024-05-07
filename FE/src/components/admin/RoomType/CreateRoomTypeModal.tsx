import { Button, Modal, Form, Input, Space, message } from "antd";

import { IRoomType } from "../../../interface";
import { useCreateRoomTypeMutation } from "../../../api";

type CreateRoomTypeModalProps = {
  isOpenCreate: boolean;
  onCancel: () => void;
};

const CreateRoomTypeModal = ({
  isOpenCreate,
  onCancel,
}: CreateRoomTypeModalProps) => {
  const [form] = Form.useForm();
  const [createRoomType, resultCreate] = useCreateRoomTypeMutation();

  const onFinish = (data: IRoomType) => {
    createRoomType(data)
      .unwrap()
      .then((response) => {
        message.success(response.message);
        form.resetFields();
        onCancel();
      })
      .catch((error) => {
        message.error(error.data.message);
      });
  };

  return (
    <Modal
      title="Thêm mới loại phòng"
      open={isOpenCreate}
      onCancel={onCancel}
      footer={null}
    >
      <Form
        disabled={resultCreate.isLoading}
        name="add_room_type"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label="Tên loại phòng"
          rules={[{ required: true, message: "Vui lòng nhập tên loại phòng!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="price"
          label="Nhập giá phòng"
          rules={[{ required: true, message: "Vui lòng nhập giá phòng!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="bed"
          label="Số lượng giường có trong phòng"
          rules={[
            { required: true, message: "Vui lòng nhập số lượng giường!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="adults"
          label="Số lượng người lớn có thể ở"
          rules={[
            { required: true, message: "Vui lòng nhập số lượng người lớn ở!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="children"
          label="Số lượng  trẻ em có thể ở"
          rules={[
            { required: true, message: "Vui lòng nhập số lượng trẻ em ở!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button htmlType="submit" loading={resultCreate.isLoading}>
              Thêm
            </Button>

            <Button
              htmlType="reset"
              onClick={onCancel}
              disabled={resultCreate.isLoading}
            >
              Hủy
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateRoomTypeModal;
