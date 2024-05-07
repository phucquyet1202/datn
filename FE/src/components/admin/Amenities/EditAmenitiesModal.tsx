import { Button, Form, Input, Modal, Space, Spin, message } from "antd";

import { IAmenities } from "../../../interface";
import { useUpdateAmenitiesMutation } from "../../../api/amenities";
// import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "../../../icons";

type EditAmenitiesModalProps = {
  loading: boolean;
  isOpenEdit: boolean;
  data: IAmenities;
  onCancel: () => void;
};

const EditAmenitiesModal = ({
  isOpenEdit,
  data,
  loading,
  onCancel,
}: EditAmenitiesModalProps) => {
  const [form] = Form.useForm();

  const [updateAmenities, resultEdit] = useUpdateAmenitiesMutation();

  const onFinish = (data: IAmenities) => {
    updateAmenities(data)
      .unwrap()
      .then((response) => {
        message.success(response.message);
        onCancel();
      })
      .catch((error) => {
        message.error(error.data.message);
      });
  };

  return (
    <Modal
      title="Chỉnh sửa tiện ích"
      open={isOpenEdit}
      onCancel={onCancel}
      footer={null}
      width={1000}
    >
      {loading ? (
        <div className="flex items-center justify-center h-[100px]">
          <Spin spinning={loading} />
        </div>
      ) : (
        <Form
          disabled={resultEdit.isLoading}
          name="edit_amenities"
          form={form}
          onFinish={onFinish}
          initialValues={data}
        >
          <Form.Item name="_id" hidden>
            <Input />
          </Form.Item>

          <Form.Item
            name="name"
            label="Tên tiện ích"
            rules={[{ required: true, message: "Vui lòng nhập tên tiện ích!" }]}
          >
            <Input />
          </Form.Item>

          {/* <Form.List name="features">
            {(fields, { add, remove }) => (
              <>
                {fields.length > 0 && <Form.Item label="Features" />}

                {fields.map(({ key, name }, index) => (
                  <Space
                    key={`features-${key}-form-${index}`}
                    className="w-full"
                  >
                    <Form.Item
                      key={`feature-${key}-item-${index}`}
                      required={false}
                    >
                      <Space size="large">
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
                        >
                          <Switch className="bg-[#efefef]" />
                        </Form.Item>

                        <Form.Item className="cursor-pointer">
                          {fields.length > 0 ? (
                            <AiOutlineMinusCircle
                              key={`features-${key}-delete-${index}`}
                              onClick={() => remove(name)}
                              className="hover:text-blue-500 duration-200"
                              size={18}
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
              <Button htmlType="submit" loading={resultEdit.isLoading}>
                Sửa
              </Button>

              <Button
                htmlType="reset"
                onClick={onCancel}
                disabled={resultEdit.isLoading}
              >
                Hủy
              </Button>
            </Space>
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
};

export default EditAmenitiesModal;
