import { useCookies } from "react-cookie";
import toast from "react-hot-toast";

import { BillInfo, BookingInfo, Container } from "../../../components";
import {
  useCreateBookingMutation,
  useGetVoucherByCodeMutation,
  useVnPayPaymentMutation,
  useZaloPayPaymentMutation,
} from "../../../api";
import { useEffect, useState } from "react";

const PaymentPage = () => {
  const [cookie, , removeCookie] = useCookies<string>();
  const [booking] = useCreateBookingMutation();
  const [paymentVnPay] = useVnPayPaymentMutation();
  const [paymentZaloPay] = useZaloPayPaymentMutation();
  const [isDepositAmount, setIsDepositAmount] = useState(false);
  const [dataBooking, setDataBooking] = useState(cookie?.booking);

  const [getVoucher] = useGetVoucherByCodeMutation();
  // eslint-disable-next-line
  const [voucher, setVoucher] = useState<any>(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = (
    basePrice: number,
    voucherDiscount: number,
    isDeposit: boolean,
    quantity: number
  ): number => {
    let totalPrice = basePrice * quantity;

    if (voucherDiscount !== 0) {
      totalPrice -= voucherDiscount;
    }

    if (isDeposit) {
      totalPrice = (totalPrice * 30) / 100;
    }

    return totalPrice;
  };

  const toggleGetVoucher = (value: string) => {
    if (!value) return;
    if (voucher) return toast.error("Bạn chỉ có thể sử dụng một voucher");

    getVoucher({ code: value, idRoomType: dataBooking.list_room[0].idRoom })
      // eslint-disable-next-line
      .then((res: any) => {
        if (res.data) {
          toast.success(res?.data?.message);
          setVoucher(res?.data?.data);

          const newTotal = calculateTotalPrice(
            cookie?.booking.total_price,
            res?.data?.data.discountValue,
            isDepositAmount,
            cookie?.booking?.list_room[0]?.quantity
          );

          setTotalPrice(newTotal);
        }

        if (res?.error) toast.error(res?.error?.data?.message);
      })
      .catch(() => {
        toast.error("Đã có lỗi xảy ra");
      });
  };

  const toggleDepositAmount = () => {
    setIsDepositAmount(!isDepositAmount);
  };

  const onToggleBooking = (method: string, form: any) => {
    const newDataBooking = { ...dataBooking };

    newDataBooking.payment_method = method;
    newDataBooking.is_deposit_amount = isDepositAmount;
    newDataBooking.total_price = totalPrice;
    newDataBooking.info = form;

    if (voucher) {
      newDataBooking.id_voucher = voucher._id;
    }

    booking(newDataBooking)
      .unwrap()
      .then((response) => {
        toast.success(response.message);
        removeCookie("booking");

        const { _id, total_price, payment_method } = response.data;

        const dataPayment = {
          amount: total_price,
          total_payment: voucher
            ? dataBooking.total_price * dataBooking?.list_room[0]?.quantity -
              voucher.discountValue
            : dataBooking.total_price * dataBooking?.list_room[0]?.quantity,
          bookingId: _id,
        };

        payment_method === "VN Pay" &&
          paymentVnPay(dataPayment)
            .unwrap()
            .then((res) => {
              window.location.href = res.data;
            })
            .catch((error) => {
              console.log(error);
            });

        payment_method === "Zalo Pay" &&
          paymentZaloPay(dataPayment)
            .unwrap()
            .then((res) => {
              window.location.href = res.data;
            })
            .catch((error) => {
              console.log(error);
            });
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

  useEffect(() => {
    const newTotal = calculateTotalPrice(
      cookie?.booking.total_price,
      voucher?.discountValue || 0,
      isDepositAmount,
      cookie?.booking?.list_room[0]?.quantity
    );

    setTotalPrice(newTotal);
  }, [cookie?.booking.total_price, voucher?.discountValue, isDepositAmount]);

  return (
    <>
      <Container>
        <div className="py-12 pb-16">
          <div className="relative flex items-center justify-center mb-5">
            <h2 className="mb-0 font-normal text-2xl text-center uppercase text-textLight dark:text-textDark">
              Thông tin đặt phòng
            </h2>
          </div>

          <div className="block mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <BillInfo
                onToggleBooking={(value, form) => onToggleBooking(value, form)}
              />

              <BookingInfo
                totalPrice={totalPrice}
                voucher={voucher}
                setVoucher={() => setVoucher(null)}
                booking={dataBooking}
                isDepositAmount={isDepositAmount}
                setIsDepositAmount={toggleDepositAmount}
                getCode={toggleGetVoucher}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PaymentPage;
