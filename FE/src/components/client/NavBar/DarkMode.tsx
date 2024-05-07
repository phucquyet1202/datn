import { useState } from "react";

import {
  AiOutlineDesktop,
  BsFillSunFill,
  BsFillMoonStarsFill,
} from "../../../icons";
import { useTheme } from "../../../hooks";
import { MenuItem } from "../..";

const DarkMode = () => {
  const { theme, handleChangeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div onClick={onToggle} className="z-10">
        <div className="text-primary cursor-pointer">
          {theme === "dark" ? (
            <BsFillMoonStarsFill size={20} />
          ) : theme === "light" ? (
            <BsFillSunFill size={20} />
          ) : (
            <AiOutlineDesktop size={20} />
          )}
        </div>

        {isOpen && (
          <div className="absolute right-28 top-14 md:top-14 text-sm shadow-md rounded-xl min-w-[10rem] overflow-hidden bg-light dark:bg-dark">
            <MenuItem
              label="Sáng"
              icon={BsFillMoonStarsFill}
              onClick={() => handleChangeTheme("light")}
            />
            <MenuItem
              label="Tối"
              icon={BsFillSunFill}
              onClick={() => handleChangeTheme("dark")}
            />
            <MenuItem
              label="Hệ thống"
              icon={AiOutlineDesktop}
              onClick={() => handleChangeTheme("system")}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default DarkMode;
