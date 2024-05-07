import moment from "moment";
import toast from "react-hot-toast";
import { Modal, Button, Checkbox, CheckboxProps } from "antd";
import { IBooking } from "../../../interface";
import {
  useCheckStatusZaloPayMutation,
  useUpdateBookingMutation,
  useUpdateInfoBookingMutation,
} from "../../../api";
import { useState } from "react";

import type { FormProps } from "antd";
import { Form, Input } from "antd";

type FieldType = {
  name?: string;
  phone?: string;
  cmt?: string;
};

type InfoBookingCardProps = {
  info: IBooking;
};

const InfoBookingCard = ({ info }: InfoBookingCardProps) => {
  const [errorCheckBox, setErrorCheckBox] = useState("");
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);

  const onChange: CheckboxProps["onChange"] = (e) => {
    setIsCheckBoxChecked(e.target.checked);
    setErrorCheckBox("");
  };

  const handleOk = () => {
    if (isCheckBoxChecked) {
      toggleUpdateBooking();
    } else {
      setErrorCheckBox("Bạn phải chấp nhận điều khoản để hủy đặt phòng!");
    }
  };

  const [updateBooking] = useUpdateBookingMutation();
  const [checkStatusZaloPay] = useCheckStatusZaloPayMutation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalCancelRoom, setModalCancelRoom] = useState(false);
  const toggleCheckStatusZaloPay = () => {
    checkStatusZaloPay(info?.id_payment.code)
      .unwrap()
      .then((response) => {
        toast.success(response.message);
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

  const toggleUpdateBooking = () => {
    const data = { _id: info._id, status: "Đã hủy bỏ" };

    updateBooking(data)
      .unwrap()
      .then((response) => {
        toast.success(response.message);
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };
  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  // sủa thông tin thanh toán
  const [updateAbate] = useUpdateInfoBookingMutation();
  const [modalAbate, setModalAbate] = useState(false);
  const showModalAbate = () => {
    setModalAbate(true);
  };

  const handleCancelAbate = () => {
    setModalAbate(false);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    const data = { _id: info?._id, ...values };
    console.log(data);
    updateAbate(data)
      .unwrap()
      .then((response) => {
        toast.success(response.message);
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  // tắt hiện hủy đặt phòng
  const showCancelRoom = () => {
    setModalCancelRoom(true);
  };

  const handleCancelRoom = () => {
    setModalCancelRoom(false);
  };

  const statusList = ["Chờ thanh toán", "Đang xử lý"];

  const status = [
    "Chưa thanh toán",
    "Đang xử lý",
    "Đã hủy bỏ",
    "Chờ thanh toán",
    "Đã xác nhận",
  ];

  return (
    <div className="flex flex-col gap-x-6 py-5 border border-divideLight dark:border-divideDark pl-5 text-textLight2nd dark:text-textDark2nd">
      {/* <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto flex gap-1">
          Phương thức thanh toán:
          <p className="text-sm font-semibold leading-6">
            {info.payment_method}
          </p>
        </div>
      </div> */}

      <div className="flex justify-between">
        <div className="flex gap-2">
          <div>
            <img
              src={info?.list_room?.idRoom?.images[0]?.url}
              alt=""
              className="w-[300px]"
            />
          </div>

          <div>
            <p className="font-bold text-xl">
              {info?.list_room?.idRoom?.id_roomType?.name}
            </p>

            <div>
              <p className="mt-1 text-xs leading-5">
                Nhận phòng: {moment(info.check_in).format("DD/MM/YYYY")}
              </p>

              <p className="mt-1 text-xs leading-5">
                Trả phòng: {moment(info.check_out).format("DD/MM/YYYY")}
              </p>
            </div>
          </div>
        </div>

        <div>
          <span>Thông tin thanh toán</span>

          <div>
            <p> Tên: {info?.info?.name}</p>
            <p> Số điện thoại: {info?.info?.phone}</p>
            <p> CMT: {info?.info?.cmt}</p>
          </div>
        </div>

        <div className="w-[340px]">
          <div className="mb-4 pr-10">
            <p className="text-sm leading-6">
              Đã thanh toán:
              {info.total_price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </p>

            {info?.is_deposit_amount && (
              <p className="text-sm leading-6">
                Còn lại:
                {(
                  info?.id_payment?.total_payment - info?.id_payment?.amount
                ).toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
            )}

            {/* <p className="text-sm leading-6">
              Giá trị đơn hàng:
              {info?.id_payment?.total_payment.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </p> */}

            <div>
              <p>
                Trạng thái thanh toán:{" "}
                {info?.payment_status ? "Đã thanh toán" : "Chưa thanh toán"}{" "}
                {info?.is_deposit_amount ? "đặt cọc" : ""}
              </p>

              <p>Trạng thái đơn đặt phòng: {info?.status}</p>
            </div>

            {info?.payment_method === "Zalo Pay" &&
              info?.status === "Chờ thanh toán" && (
                <button
                  onClick={toggleCheckStatusZaloPay}
                  className="bg-blue-500 p-1 rounded-md text-light dark:text-dark hover:opacity-80 disabled:cursor-not-allowed"
                >
                  Kiểm tra
                </button>
              )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={showModal}
              className="bg-blue-500 p-1 rounded-md text-light dark:text-white hover:opacity-80 disabled:cursor-not-allowed "
            >
              Xem chi tiết
            </button>

            <Modal
              title="Thông tin đơn đặt phòng"
              visible={modalVisible}
              onCancel={handleCancel}
              footer={null}
            >
              <p>Phòng: {info?.list_room?.idRoom?.id_roomType?.name}</p>
              <p>Số lượng phòng: {info?.list_room?.quantity}</p>
              <div>
                <p className="flex">
                  <img
                    src={info?.list_room[0]?.idRoom?.images[0].url}
                    alt=""
                    className="max-w-[100%]"
                  />
                </p>
              </div>
              <p>Phương thức thanh toán: {info.payment_method}</p>
              <p>
                Đã thanh toán:
                {info?.total_price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              <p>Nhận phòng: {moment(info?.check_in).format("DD/MM/YYYY")}</p>
              <p>Trả phòng: {moment(info?.check_out).format("DD/MM/YYYY")}</p>
              <p>Trạng thái: {info?.status}</p>
            </Modal>

            {statusList.includes(info?.status) && (
              <>
                <Button danger onClick={showCancelRoom}>
                  Hủy đặt phòng
                </Button>
                <Modal
                  title="Hủy đơn đặt phòng"
                  visible={modalCancelRoom}
                  onCancel={handleCancelRoom}
                  onOk={handleOk}
                >
                  <p>Phòng: {info?.list_room[0]?.idRoom?.id_roomType?.name}</p>
                  <p>Số lượng phòng: {info?.list_room?.quantity}</p>
                  <div>
                    <p className="flex">
                      <img
                        src={info?.list_room[0]?.idRoom?.images[0].url}
                        alt=""
                        className="max-w-[100%]"
                      />
                    </p>
                  </div>
                  <p>Phương thức thanh toán: {info.payment_method}</p>
                  <p>
                    Tổng giá:
                    {info.total_price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                  <p>
                    Nhận phòng: {moment(info.check_in).format("DD/MM/YYYY")}
                  </p>
                  <p>
                    Trả phòng: {moment(info.check_out).format("DD/MM/YYYY")}
                  </p>
                  <p>Trạng thái: {info.status}</p>

                  <p className="text-red-500 font-bold">
                    Lưu ý: Nếu bạn hủy đặt phòng , khách sạn sẽ không hoàn lại
                    tiền!
                  </p>
                  <Checkbox onChange={onChange}>
                    bạn đã đọc rõ thông tin và chấp nhận điều khoản!
                  </Checkbox>
                  <p className="text-red-500 font-bold">{errorCheckBox}</p>
                </Modal>
              </>
            )}

            {info?.id_payment?.url_payment && info.status !== "Đã hủy bỏ" && (
              <a
                href={info?.id_payment?.url_payment}
                className="bg-blue-500 p-1 rounded-md text-light dark:text-dark hover:opacity-80 disabled:cursor-not-allowed"
              >
                Thanh toán
              </a>
            )}
          </div>

          {/* cập nhật thông tin nhận phòng */}
          {status?.includes(info?.id_payment?.status) && (
            <div className="mt-1">
              <button
                onClick={showModalAbate}
                className="bg-blue-500 p-1 rounded-md text-light dark:text-dark hover:opacity-80 disabled:cursor-not-allowed"
              >
                Sửa thông tin thanh toán
              </button>

              <Modal
                title="Cập nhật thông tin thánh toán"
                visible={modalAbate}
                onCancel={handleCancelAbate}
                footer={null}
              >
                <Form
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  style={{ maxWidth: 600 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item<FieldType>
                    label="Tên"
                    name="name"
                    rules={[
                      { required: true, message: "Vui lòng nhập tên của bạn!" },
                    ]}
                  >
                    <Input defaultValue={info?.info?.name} />
                  </Form.Item>

                  <Form.Item<FieldType>
                    label="Số điện thoại"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "vui lòng nhập số điện thoại!",
                      },
                      {
                        pattern:
                          /^(0|\+84)(3[2-9]|5[689]|7[06-9]|8[1-9]|9[0-46-9])\d{7}$/,
                        message: "Số điện thoại không hợp lệ!",
                      },
                    ]}
                  >
                    <Input defaultValue={info?.info?.phone} />
                  </Form.Item>

                  <Form.Item<FieldType>
                    label="Cmt"
                    name="cmt"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập số chứng minh thư!",
                      },
                    ]}
                  >
                    <Input defaultValue={info?.info?.cmt} />
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Modal>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoBookingCard;
