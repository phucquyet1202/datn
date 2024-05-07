import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import {
  useChangePasswordMutation,
  useCheckCodeChangePasswordMutation,
  useGetCodeChangePasswordMutation,
  useInfoAccountQuery,
  useLogoutAccountMutation,
} from "../../../api";

enum STEPS {
  GET_CODE = 0,
  CHECK_CODE = 1,
  CHANGE_PASSWORD = 2,
}

const SecurityPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(STEPS.GET_CODE);
  const [code, setCode] = useState<string>("");
  const [changePassword, setChangePassword] = useState({
    oldPassword: "",
    password: "",
    confirmPassword: "",
  });

  const { data: oneUser } = useInfoAccountQuery("");
  const [getCodeChangePassword] = useGetCodeChangePasswordMutation();
  const [checkCodeChangePassword] = useCheckCodeChangePasswordMutation();
  const [changePasswordUser] = useChangePasswordMutation();
  const [logoutAccount] = useLogoutAccountMutation();

  const maskEmail = (email: string) => {
    const atIndex = email.indexOf("@");
    const maskedPart =
      email.substring(0, atIndex - 9) + "*****" + email.substring(atIndex);
    return maskedPart;
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setChangePassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    if (step === STEPS.GET_CODE) {
      return getCodeChangePassword("")
        .unwrap()
        .then((response) => {
          toast.success(response.message);
          onNext();
        })
        .catch(() => {
          toast.error("Đã xảy ra lỗi khi gửi mã bảo mật");
        });
    }

    if (step === STEPS.CHECK_CODE) {
      const data: { code: string } = { code: code };

      return checkCodeChangePassword(data)
        .unwrap()
        .then((response) => {
          toast.success(response.message);
          onNext();
        })
        .catch((error) => {
          toast.error(error.data.message);
        });
    }

    changePasswordUser(changePassword)
      .unwrap()
      .then((response) => {
        toast.success(response.message);

        logoutAccount(null)
          .unwrap()
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

  let bodyContent = (
    <div className="flex items-center gap-3">
      <span className="block mb-2 text-sm font-medium text-textLight dark:text-textDark">
        Email: {maskEmail(oneUser?.data.email)}
      </span>

      <button
        onClick={onSubmit}
        className="text-textDark dark:text-textDark bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
      >
        Xác nhận
      </button>
    </div>
  );

  if (step === STEPS.CHECK_CODE) {
    bodyContent = (
      <div>
        <label
          htmlFor="code"
          className="block mb-2 text-sm font-medium text-textLight dark:text-textDark"
        >
          Mã xác nhận
        </label>

        <input
          type="text"
          id="code"
          name="code"
          onChange={(e) => setCode(e.target.value)}
          className="bg-backgroundLight dark:bg-backgroundDark border border-divideLight dark:border-divideDark text-textLight2nd dark:text-textDark2nd text-sm rounded-lg block w-full p-2.5 dark:placeholder-textDark2nd placeholder-textLight2nd"
          placeholder="Mã xác nhận"
          required
        />

        <button
          onClick={onSubmit}
          className="mt-3 text-textDark dark:text-textDark bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
        >
          Xác nhận
        </button>
      </div>
    );
  }

  if (step === STEPS.CHANGE_PASSWORD) {
    bodyContent = (
      <div>
        <div>
          <label
            htmlFor="oldPassword"
            className="block mb-2 text-sm font-medium text-textLight dark:text-textDark"
          >
            Mật khẩu cũ
          </label>
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            value={changePassword.oldPassword}
            onChange={handleInputChange}
            className="bg-backgroundLight dark:bg-backgroundDark border border-divideLight dark:border-divideDark text-textLight2nd dark:text-textDark2nd text-sm rounded-lg block w-full p-2.5 dark:placeholder-textDark2nd placeholder-textLight2nd"
            placeholder="Mật khẩu cũ"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-textLight dark:text-textDark"
          >
            Mật khẩu mới
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={changePassword.password}
            onChange={handleInputChange}
            className="bg-backgroundLight dark:bg-backgroundDark border border-divideLight dark:border-divideDark text-textLight2nd dark:text-textDark2nd text-sm rounded-lg block w-full p-2.5 dark:placeholder-textDark2nd placeholder-textLight2nd"
            placeholder="Mật khẩu mới"
            required
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-textLight dark:text-textDark"
          >
            Nhập lại mật khẩu
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={changePassword.confirmPassword}
            onChange={handleInputChange}
            className="bg-backgroundLight dark:bg-backgroundDark border border-divideLight dark:border-divideDark text-textLight2nd dark:text-textDark2nd text-sm rounded-lg block w-full p-2.5 dark:placeholder-textDark2nd placeholder-textLight2nd"
            placeholder="  Nhập lại mật khẩu"
            required
          />
        </div>

        <button
          onClick={onSubmit}
          className="mt-3 text-textDark dark:text-textDark bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
        >
          Xác nhận
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-light dark:bg-dark p-3 w-full">
      <div className="border-b p-1 border-divideLight dark:border-divideDark">
        <div className="flex items-center gap-10">
          <div>
            <h2 className="text-2xl font-bold text-textLight dark:text-textDark">
              Mật khẩu
            </h2>
            <p className="text-base mt-3 text-textLight2nd dark:text-textDark2nd">
              Quản lý mật khẩu của bạn
            </p>
          </div>
        </div>
      </div>

      <div className="p-10">{bodyContent}</div>
    </div>
  );
};

export default SecurityPage;
