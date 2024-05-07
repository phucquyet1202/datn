import { useNavigate } from "react-router-dom";

import { MdPayment } from "react-icons/md";
import { AiOutlineUserAdd, AiOutlineLock } from "react-icons/ai";

import { MenuItem } from "..";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hidden md:block">
        <div className="border rounded-xl overflow-hidden border-divideLight dark:border-divideDark bg-light dark:bg-dark min-w-[250px]">
          <MenuItem
            label="Thông tin cá nhân"
            onClick={() => navigate("/auth")}
            icon={AiOutlineUserAdd}
          />
          <MenuItem
            label="Mật khẩu"
            onClick={() => navigate("/auth/security")}
            icon={AiOutlineLock}
          />
          <MenuItem
            label="Đặt phòng"
            onClick={() => navigate("/auth/booking")}
            icon={MdPayment}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
