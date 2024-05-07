import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Spin,
  Upload,
  message,
} from "antd";

import { IAmenities, IHotel } from "../../../interface";
import { AiOutlinePlusCircle } from "../../../icons";
import {
  useGetAllAmenitiesQuery,
  useGetAllProvincesQuery,
  useUpdateHotelMutation,
} from "../../../api";

type EditHotelModalProps = {
  isOpenEdit: boolean;
  onCancel: () => void;
  loading: boolean;
  data: IHotel;
};

const EditHotelModal = ({
  isOpenEdit,
  onCancel,
  loading,
  data,
}: EditHotelModalProps) => {
  const [form] = Form.useForm();
  const { Option } = Select;

  const { data: allAmenities } = useGetAllAmenitiesQuery("");
  const { data: allProvinces } = useGetAllProvincesQuery("");
  const [editHotel, resultEdit] = useUpdateHotelMutation();

  const onFinish = (data: IHotel) => {
    editHotel(data)
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
      title="Chỉnh sửa khách sạn"
      open={isOpenEdit}
      onCancel={onCancel}
      footer={null}
      width={1000}
      style={{ top: 20 }}
    >
      {loading ? (
        <div className="flex items-center justify-center h-[100px]">
          <Spin spinning={loading} />
        </div>
      ) : (
        <Form
          disabled={resultEdit.isLoading}
          name="edit_hotel"
          layout="vertical"
          form={form}
          onFinish={onFinish}
          initialValues={{
            ...data,
            id_amenities:
              data &&
              data.id_amenities &&
              data.id_amenities.map((item) => item._id),
          }}
          autoComplete="off"
        >
          <Form.Item name="_id" hidden>
            <Input />
          </Form.Item>

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
                        <Option
                          key={parseInt(item.province_id)}
                          value={parseInt(item.province_id)}
                        >
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
                    allAmenities?.data.map((item: IAmenities) => (
                      <Option key={item._id} value={item._id}>
                        {item.name}
                      </Option>
                    ))}
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
            <Input.TextArea rows={5} />
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

export default EditHotelModal;
