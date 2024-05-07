import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "../../../icons";
import { useCheckCodeModal, useLoginModal } from "../../../hooks";
import Input from "../Input/Input";
import { useCheckMailCodeMutation } from "../../../api";
import toast from "react-hot-toast";
import Button from "../Button";
import { getGoogleUrl } from "../../../utils";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";
import { useCallback } from "react";

const CheckCodeModal = () => {
  const location = useLocation();
  const checkCodeModal = useCheckCodeModal();
  const [checkCode, resultCheckCode] = useCheckMailCodeMutation();
  const loginModal = useLoginModal();
  const url = location.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      code: "",
    },
  });

  const loginGoogle = () => {
    window.location.href = getGoogleUrl(url);
  };

  const onToggle = useCallback(() => {
    reset();
    checkCodeModal.onClose();
    loginModal.onOpen();
  }, [reset, loginModal, checkCodeModal]);

  const bodyContent = (
    <form className="flex flex-col gap-4">
      <Input
        id="code"
        label="Code"
        placeholder="Nhập code"
        disabled={resultCheckCode.isLoading}
        register={register}
        errors={errors}
        required
      />
    </form>
  );

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    checkCode(data)
      .unwrap()
      .then((response) => {
        onToggle();
        toast.success(response.message);
      })
      .catch((error) => {
        if (error?.data.errors) {
          toast.error(error?.data.errors[0]);
        } else {
          toast.error(error?.data.message);
        }
      });
  };

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr className="border border-divideLight dark:border-divideDark" />

      <Button
        outline
        label="Đăng nhập bằng Google"
        icon={FcGoogle}
        onClick={loginGoogle}
      />

      <div className="text-textDark2nd dark:text-textDark2nd text-center mt-4 font-light">
        <p>
          Bạn đã có tài khoản?
          <span className="text-textLight dark:text-textDark cursor-pointer hover:underline">
            {" "}
            Đăng nhập
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={resultCheckCode.isLoading}
      isOpen={checkCodeModal.isOpen}
      onClose={checkCodeModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      title="Code"
      actionLabel="Gửi"
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default CheckCodeModal;
