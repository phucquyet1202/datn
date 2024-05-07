import {
  useGetAllAmenitiesQuery,
  useUpdateBookingMutation,
} from "../../../api";
import { IBooking } from "../../../interface";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Spin,
  message,
} from "antd";

type EditBookingDrawnProps = {
  loading: boolean;
  isOpenEdit: boolean;
  data: IBooking;
  onCancel: () => void;
};

const { Option } = Select;
const EditBookingDrawn = ({
  isOpenEdit,
  data,
  loading,
  onCancel,
}: EditBookingDrawnProps) => {
  const [form] = Form.useForm();
  const [updateBooking, resultEdit] = useUpdateBookingMutation();
  const { data: allAmenities } = useGetAllAmenitiesQuery("");

  const onFinish = (data: IBooking) => {
    updateBooking(data)
      .unwrap()
      .then((response) => {
        message.success(response?.message);
        onCancel();
      })
      .catch((error) => {
        message.error(error?.data?.message);
      });
  };

  const statusOptionsMap: any = {
    "Chờ thanh toán": [
      // { value: "Đã hủy bỏ", label: "Đã hủy bỏ" },
      { value: "Đang xử lý", label: "Đang xử lý" },
    ],
    "Đang xử lý": [
      { value: "Đã hủy bỏ", label: "Đã hủy bỏ" },
      { value: "Đã xác nhận", label: "Đã xác nhận" },
    ],
    "Đã xác nhận": [
      // { value: "Đã hủy bỏ", label: "Đã hủy bỏ" },
      { value: "Đã hủy bỏ", label: "Đã hủy bỏ" },
      { value: "Đã nhận phòng", label: "Đã nhận phòng" },
      // { value: "Vắng mặt", label: "Vắng mặt" },
    ],
    "Đã nhận phòng": [{ value: "Thành công", label: "Thành công" }],
  };

  const filteredOptions = statusOptionsMap[data?.status];

  return (
    <Modal
      title="Chỉnh sửa đơn đặt phòng"
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
          name="edit_room_type"
          form={form}
          onFinish={onFinish}
          initialValues={{
            ...data,
            id_amenities:
              data &&
              data?.id_amenities &&
              data?.id_amenities.map((item: any) => item),
            room_number:
              data &&
              data?.room_number &&
              data?.room_number.map((item: any) => item),
          }}
        >
          <Form.Item name="_id" hidden>
            <Input />
          </Form.Item>

          <Form.Item name="list_room" hidden>
            <Input />
          </Form.Item>

          <Form.Item name="check_in" hidden>
            <Input />
          </Form.Item>

          <Form.Item
            name="status"
            label="Trạng thái đơn"
            rules={[
              { required: true, message: "Trạng thái không được để trống!" },
            ]}
          >
            <Select options={filteredOptions} />
          </Form.Item>

          <Form.Item name="room_number" label="Số phòng">
            <Select
              mode="multiple"
              className="w-[30px]"
              maxCount={data?.list_room?.quantity}
              disabled={data?.status !== "Đã xác nhận"}
            >
              {data?.list_room?.idRoom?.list_rooms.map((item: any) => (
                <Option key={item._id} value={item._id} disabled={item.status}>
                  {item.room}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="id_amenities" label="Tiện ích">
            <Select
              mode="multiple"
              className="w-[30px]"
              disabled={data?.status !== "Đã nhận phòng"}
            >
              {allAmenities?.data &&
                allAmenities?.data?.map(
                  (item: { _id: string; name: string }) => (
                    <Option key={item._id} value={item._id}>
                      {item.name}
                    </Option>
                  )
                )}
            </Select>
          </Form.Item>

          <Form.Item
            name="success"
            valuePropName="checked"
            label="Hoàn tất thanh toán"
          >
            <Checkbox disabled={data?.success} />
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

export default EditBookingDrawn;
