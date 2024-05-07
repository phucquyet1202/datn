import { useState } from "react";

type FilterTopProps = {
  onShowDialog: () => void;
};

const FilterTop = ({ onShowDialog }: FilterTopProps) => {
  const [show, setShow] = useState(false);

  const onToggle = () => {
    setShow(!show);
  };

  return (
    <div className="flex items-center justify-between border-b border-divideLight dark:border-divideDark p-5 bg-light dark:bg-dark rounded-md">
      <h1 className="text-2xl font-bold tracking-tight text-textLight dark:text-textDark">
        <p className="hidden sm:block">Danh sách Phòng</p>
      </h1>

      <div className="flex items-center">
        <div className="relative inline-block text-left">
          <button
            onClick={onToggle}
            className="group inline-flex justify-center text-sm font-medium text-textLight dark:text-textDark hover:text-primary dark:hover:text-primary"
            id="menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            Sắp xếp
            <svg
              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-textLight dark:text-textDark group-hover:text-primary dark:hover:text-primary"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div
            className={`absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-light dark:bg-dark shadow-2xl ring-1 ring-divideLight dark:ring-divideDark ring-opacity-5 focus:outline-none
            ${show ? "" : "hidden"}`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" role="none">
              <span
                onClick={onToggle}
                className="text-textLight2nd dark:text-textDark2nd block px-4 py-2 text-sm hover:bg-backgroundLight dark:hover:bg-backgroundDark rounded-md cursor-pointer"
                role="menuitem"
                id="menu-item-1"
              >
                Đánh giá cao
              </span>
              <span
                onClick={onToggle}
                className="text-textLight2nd dark:text-textDark2nd block px-4 py-2 text-sm hover:bg-backgroundLight dark:hover:bg-backgroundDark rounded-md cursor-pointer"
                role="menuitem"
                id="menu-item-3"
              >
                Giá từ thấp đến cao
              </span>
              <span
                onClick={onToggle}
                className="text-textLight2nd dark:text-textDark2nd block px-4 py-2 text-sm hover:bg-backgroundLight dark:hover:bg-backgroundDark rounded-md cursor-pointer"
                role="menuitem"
                id="menu-item-4"
              >
                Giá từ cao đến thấp
              </span>
            </div>
          </div>
        </div>

        <button className="-m-2 ml-5 p-2 text-textLight dark:text-textDark hover:text-primary dark:hover:text-primary sm:ml-7">
          <span className="sr-only">Lưới</span>

          <svg
            className="h-5 w-5"
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button
          onClick={onShowDialog}
          className="-m-2 ml-4 p-2 text-textLight dark:text-textDark hover:text-primary dark:hover:text-primary sm:ml-6 lg:hidden"
        >
          <span className="sr-only">Lọc</span>

          <svg
            className="h-5 w-5"
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FilterTop;
