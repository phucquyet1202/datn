import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Upload,
  message,
} from "antd";

import { IHotel } from "../../../interface";
import { AiOutlinePlusCircle } from "../../../icons";
import {
  useCreateHotelMutation,
  useGetAllAmenitiesQuery,
  useGetAllProvincesQuery,
} from "../../../api";

type CreateHotelModalProps = {
  isOpenCreate: boolean;
  onCancel: () => void;
};

const CreateHotelModal = ({
  isOpenCreate,
  onCancel,
}: CreateHotelModalProps) => {
  const [form] = Form.useForm();
  const { Option } = Select;

  const { data: allAmenities } = useGetAllAmenitiesQuery("");
  const { data: allProvinces } = useGetAllProvincesQuery("");

  const [createHotel, resultCreate] = useCreateHotelMutation();

  const onFinish = (data: IHotel) => {
    createHotel(data)
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
      title="Thêm mới khách sạn"
      open={isOpenCreate}
      onCancel={onCancel}
      footer={null}
      width={1000}
      style={{ top: 20 }}
    >
      <Form
        disabled={resultCreate.isLoading}
        layout="vertical"
        name="add_hotel"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Tên"
              rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
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
          <Col span={12}>
            <Form.Item
              name="address"
              label="Địa chỉ"
              rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Vui lòng nhập email!" },
                { type: "email", message: "Email không đúng định dạng!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="city"
              label="Thành phố"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập thành phố!",
                },
              ]}
            >
              <Select>
                {allProvinces &&
                  allProvinces.results.map(
                    (
                      item: {
                        province_name: string;
                        province_id: string;
                      },
                      index: number
                    ) => (
                      <Option key={item.province_id} value={item.province_id}>
                        {index + 1}, {item.province_name}
                      </Option>
                    )
                  )}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="id_amenities"
              label="Tiện ích"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tiện ích!",
                },
              ]}
            >
              <Select mode="multiple">
                {allAmenities?.data &&
                  allAmenities?.data.map(
                    (item: { _id: string; name: string }) => (
                      <Option key={item._id} value={item._id}>
                        {item.name}
                      </Option>
                    )
                  )}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="description"
          label="Mô tả"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mô tả!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name="images"
          label="Hình ảnh"
          rules={[
            {
              required: true,
              message: "Hình ảnh không được để trống!",
            },
          ]}
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) {
              return e;
            }
            return e && e.fileList;
          }}
        >
          <Upload listType="picture-card" beforeUpload={() => false}>
            <div className="flex flex-col justify-center items-center">
              <AiOutlinePlusCircle size={20} />
              <div className="mt-2">Tải lên</div>
            </div>
          </Upload>
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

export default CreateHotelModal;
