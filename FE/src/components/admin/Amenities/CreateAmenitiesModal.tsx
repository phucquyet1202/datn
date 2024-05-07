import {
  Button,
  Modal,
  Form,
  Input,
  Space,
  message,
  // Switch
} from "antd";

import { IAmenities } from "../../../interface";
import { useCreateAmenitiesMutation } from "../../../api";
// import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "../../../icons";

type CreateAmenitiesModalProps = {
  isOpenCreate: boolean;
  onCancel: () => void;
};

const CreateAmenitiesModal = ({
  isOpenCreate,
  onCancel,
}: CreateAmenitiesModalProps) => {
  const [createAmenities, resultCreate] = useCreateAmenitiesMutation();
  const [form] = Form.useForm();

  const onFinish = (data: IAmenities) => {
    createAmenities(data)
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
      title="Thêm mới tiện ích"
      open={isOpenCreate}
      onCancel={onCancel}
      footer={null}
      width={1000}
    >
      <Form
        disabled={resultCreate.isLoading}
        name="add_amenities"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label="Tên tiện ích"
          rules={[{ required: true, message: "Vui lòng nhập tên tiện ích!" }]}
        >
          <Input />
        </Form.Item>
        {/* 
        <Form.List name="features">
          {(fields, { add, remove }) => (
            <>
              {fields.length > 0 && <Form.Item label="Features" />}

              {fields.map(({ key, name }, index) => (
                <Space key={`features-${key}-form-${index}`} className="w-full">
                  <Form.Item
                    key={`feature-${key}-item-${index}`}
                    required={false}
                  >
                    <Space>
                      <Form.Item
                        key={`features-${key}-name-${index}`}
                        label="Tên"
                        name={[name, "name"]}
                        rules={[
                          {
                            required: true,
                            message: "Tên không được để trống!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        key={`features-${key}-surcharge-${index}`}
                        label="Phụ phí"
                        name={[name, "surcharge"]}
                        valuePropName="checked"
                        rules={[{ required: false }]}
                        initialValue={false}
                      >
                        <Switch />
                      </Form.Item>

                      <Form.Item>
                        {fields.length > 0 ? (
                          <AiOutlineMinusCircle
                            key={`features-${key}-delete-${index}`}
                            onClick={() => remove(name)}
                          />
                        ) : null}
                      </Form.Item>
                    </Space>
                  </Form.Item>
                </Space>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<AiOutlinePlusCircle />}
                >
                  Thêm feature
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List> */}

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

export default CreateAmenitiesModal;
