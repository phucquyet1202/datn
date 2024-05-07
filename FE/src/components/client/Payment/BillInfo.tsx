import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useInfoAccountQuery } from "../../../api";

type BillInfoProps = {
  onToggleBooking: (value: string, form: any) => void;
};

const BillInfo = ({ onToggleBooking }: BillInfoProps) => {
  const { data: dataUser, isLoading, isSuccess } = useInfoAccountQuery("");
  const [show, setShow] = useState(false);
  const [method, setMethod] = useState("");
  const [agree, setAgree] = useState(false);
  const [form, setForm] = useState({
    name:
      dataUser?.data?.id_information?.name !== ""
        ? dataUser?.data?.id_information?.name
        : "",
    cmt: "",
    phone: "",
  });

  useEffect(() => {
    if (dataUser && dataUser.data && dataUser.data.id_information) {
      const { name, cmt, phone } = dataUser.data.id_information;
      setForm((prevForm) => ({
        ...prevForm,
        name: name !== "" ? name : "",
        cmt: cmt !== "" ? cmt : "",
        phone: phone !== "" ? phone : "",
      }));
    }
  }, [dataUser]);

  const handleMethodChange = (name: string) => {
    setMethod(name);
  };

  const onToggle = () => {
    setShow(!show);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const toggleBooking = () => {
    if (!method) {
      return toast.error("Bạn chưa chọn phương thức thanh toán!");
    }

    if (!agree) {
      return toast.error("Bạn chưa đồng ý với điều khoản!");
    }

    if (form.cmt == "" || form.name == "" || form.phone == "")
      return toast.error("Vui lòng điền tên của bạn");

    onToggleBooking(method, form);
  };

  const data = [
    { url: "/images/vn-pay.svg", label: "VN Pay" },
    { url: "/images/zalo-pay.svg", label: "Zalo Pay" },
  ];

  const paymentMethod = data?.find((item) => item.label === method);

  return (
    <div className="box-border col-span-2">
      <div className="rounded-md p-6 mb-5 bg-light dark:bg-dark">
        <h6 className="font-bold text-xl mb-5 pb-3 border-b border-divideLight dark:border-divideDark text-textLight dark:text-textDark">
          Chính sách đặt phòng
        </h6>

        <div className="flex items-center gap-1 text-textLight2nd dark:text-textDark2nd">
          <span className="font-semibold">Hủy:</span>
          <p>
            Nếu hủy, thay đổi hoặc không đến, khách sẽ không được hoàn lại tiền.
          </p>
        </div>

        <div className="flex items-center gap-1 text-textLight2nd dark:text-textDark2nd">
          <span className="font-semibold">Thanh toán:</span>
          <p>Bạn phải thanh toán toàn bộ số tiền</p>
        </div>

        <span className="font-semibold text-textLight2nd dark:text-textDark2nd">
          Đã bao gồm ăn sáng
        </span>
      </div>

      <div className="rounded-md p-6 mb-5 bg-light dark:bg-dark">
        <div>
          <span> Tên</span>
          <input
            type="string"
            name="name"
            className="mt-2 w-full px-4 py-2 rounded-xl transition outline-none border-2 disabled:opacity-70 disabled:cursor-not-allowed border-divideLight dark:border-divideDark bg-light dark:bg-dark text-textLight2nd dark:text-textDark2nd"
            onChange={onChange}
            value={form.name}
          />
        </div>
        <div>
          <span>Số điện thoại</span>
          <input
            type="string"
            name="phone"
            className="mt-2 w-full px-4 py-2 rounded-xl transition outline-none border-2 disabled:opacity-70 disabled:cursor-not-allowed border-divideLight dark:border-divideDark bg-light dark:bg-dark text-textLight2nd dark:text-textDark2nd"
            onChange={onChange}
            value={form.phone}
          />
        </div>
        <div>
          <span>Chứng minh thư</span>
          <input
            type="string"
            name="cmt"
            className="mt-2 w-full px-4 py-2 rounded-xl transition outline-none border-2 disabled:opacity-70 disabled:cursor-not-allowed border-divideLight dark:border-divideDark bg-light dark:bg-dark text-textLight2nd dark:text-textDark2nd"
            onChange={onChange}
            value={form.cmt}
          />
        </div>
      </div>

      <div className="rounded-md p-6 mb-5 bg-light dark:bg-dark">
        <h6 className="font-bold text-xl mb-5 pb-3 border-b border-divideLight dark:border-divideDark text-textLight dark:text-textDark">
          Phương thức thanh toán
        </h6>

        <div className="relative mt-2">
          <button
            className="relative w-full cursor-pointer rounded-md bg-light py-3 pl-3 pr-10 text-left text-textLight dark:text-textDark dark:bg-dark shadow-sm outline-none sm:text-sm sm:leading-6 border border-divideLight dark:border-divideDark"
            onClick={() => setShow(!show)}
          >
            {paymentMethod ? (
              <span className="flex items-center text-textLight dark:text-textDark">
                <img
                  src={paymentMethod?.url}
                  alt={paymentMethod?.label}
                  className="h-10 w-10 flex-shrink-0 rounded-full"
                />
                <span className="ml-3 block truncate">
                  {paymentMethod?.label}
                </span>
              </span>
            ) : (
              "Chọn phương thức thanh toán"
            )}
          </button>

          {show && (
            <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-light dark:bg-dark py-1 text-base shadow-lg focus:outline-none sm:text-sm">
              {data.map((item) => (
                <li
                  key={item.label}
                  className="text-textLight dark:text-textDark relative select-none py-2 pl-3 pr-9 cursor-pointer hover:bg-backgroundLight dark:hover:bg-backgroundDark"
                  onClick={() => {
                    handleMethodChange(item.label);
                    onToggle();
                  }}
                >
                  <div className="flex items-center">
                    <img
                      src={item.url}
                      alt={item.label}
                      className="h-10 w-10 flex-shrink-0 rounded-full"
                    />

                    <span className="font-normal ml-3 block truncate">
                      {item.label}
                    </span>
                  </div>

                  <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                    {paymentMethod?.label === item.label && (
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="py-5 flex items-center gap-1 text-textLight2nd dark:text-textDark2nd">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
            className="mt-0.5 w-3.5 h-5"
          />
          <p>
            Đánh dấu vào ô này đồng nghĩa với việc bạn đã chấp nhận mọi&nbsp;
            <Link
              to="/regulations-booking-information"
              target="_blank"
              className="text-blue-400 hover:text-blue-600"
            >
              điều khoản đặt phòng
            </Link>
            &nbsp;của chúng tôi.
          </p>
        </div>

        <button
          onClick={toggleBooking}
          className="text-textDark bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-3 mb-2"
        >
          Đặt phòng
        </button>
      </div>
    </div>
  );
};

export default BillInfo;
