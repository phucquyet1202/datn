import { Button } from "antd";
import { IUser } from "../../../interface";
import { useState } from "react";
import UpdateInfo from "./updateInfo";

type InfoUserProps = {
  user: IUser;
};

const InfoUser = ({ user }: InfoUserProps) => {
  const [openForm, setOpenform] = useState(false);

  return (
    <div className="mt-5 overflow-hidden">
      <dl>
        <div className="bg-light dark:bg-dark px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-textLight dark:text-textDark">
            Tên
          </dt>
          <dd className="mt-1 text-sm text-textLight2nd dark:text-textDark2nd sm:mt-0 sm:col-span-2">
            {user.id_information.name}
          </dd>
        </div>
        <div className="bg-light dark:bg-dark border-t border-divideLight dark:border-divideDark px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-textLight dark:text-textDark">
            Email
          </dt>
          <dd className="mt-1 text-sm text-textLight2nd dark:text-textDark2nd sm:mt-0 sm:col-span-2">
            {user.email}
          </dd>
        </div>
        <div className="bg-light dark:bg-dark border-t border-divideLight dark:border-divideDark px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-textLight dark:text-textDark">
            Số điện thoại
          </dt>
          <dd className="mt-1 text-sm text-textLight2nd dark:text-textDark2nd sm:mt-0 sm:col-span-2">
            {user.id_information.phone}
          </dd>
        </div>
        <div className="bg-light dark:bg-dark border-t border-divideLight dark:border-divideDark px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-textLight dark:text-textDark">
            Địa chỉ
          </dt>
          <dd className="mt-1 text-sm text-textLight2nd dark:text-textDark2nd sm:mt-0 sm:col-span-2">
            {user.id_information.address}
          </dd>
        </div>
        {/* <div className="bg-light dark:bg-dark border-t border-divideLight dark:border-divideDark px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-textLight dark:text-textDark">
            Căn cước công dân
          </dt>
          <dd className="mt-1 text-sm text-textLight2nd dark:text-textDark2nd sm:mt-0 sm:col-span-2">
            {user.id_information.cmt}
          </dd>
        </div> */}
        {/* <div className="bg-light dark:bg-dark border-t border-divideLight dark:border-divideDark px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-textLight dark:text-textDark">
            Ảnh
          </dt>
          <dd className="mt-1 text-sm text-textLight2nd dark:text-textDark2nd sm:mt-0 sm:col-span-2">
            <img
              src={user.id_information.image}
              alt={user.id_information.image}
            />
          </dd>
        </div> */}
        <div className="flex justify-center ">
          <Button className="dark:text-white" onClick={() => setOpenform(true)}>
            Cập nhật
          </Button>
        </div>
      </dl>

      <UpdateInfo
        isOpenUpdate={openForm}
        onCancel={() => setOpenform(false)}
        user={user.id_information}
      />
    </div>
  );
};

export default InfoUser;
