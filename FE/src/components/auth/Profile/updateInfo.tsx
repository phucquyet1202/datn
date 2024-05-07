import { Button, Col, Input, Modal, Row, Space, message } from "antd";
import React from "react";
import { Form } from "antd";
import { useUpdateInforMutation } from "../../../api/auth";

type UpdateInfoProps = {
  isOpenUpdate: boolean;
  onCancel: () => void;
  user: any;
};

const UpdateInfo = ({ isOpenUpdate, onCancel, user }: UpdateInfoProps) => {
  const [form] = Form.useForm();
  const [updateInfo] = useUpdateInforMutation();
  const onFinish = (data: any) => {
    updateInfo({ id: user._id, data })
      .then((response: any) => {
        message.success(response.data.message);
        onCancel();
      })
      .catch((error) => {
        message.error(error.data.message);
      });
  };

  return (
    <Modal
      title="Cập nhật thông tin khách hàng"
      open={isOpenUpdate}
      onCancel={onCancel}
      footer={null}
      width={1000}
      style={{ top: 20 }}
    >
      <Form
        layout="vertical"
        name="UpdateInfo"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{
          ...user,
        }}
      >
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="name"
              label="Tên"
              rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="phone"
              label="Số điện thoại"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số điện thoại!",
                },
                {
                  pattern: new RegExp(/^(0|\+84)[3|5|7|8|9][0-9]{8}$/),
                  message: "Số điện thoại không đúng định dạng!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="address"
              label="Địa chỉ"
              rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          {/* <Col span={24}>
            <Form.Item name="cmt" label="Căn cước công dân">
              <Input />
            </Form.Item>
          </Col> */}
        </Row>

        <Form.Item>
          <Space>
            <Button htmlType="submit">Cập nhật</Button>

            <Button
              htmlType="reset"
              onClick={onCancel}
              //   disabled={resultCreate.isLoading}
            >
              Hủy
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateInfo;
