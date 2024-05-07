import { useState } from "react";

import { ICountry } from "../../../interface";
import { useGetAllProvincesQuery } from "../../../api";

interface CountrySelectProps {
  location: number | undefined;
  onChange: (value: ICountry) => void;
}

const CountrySelect = ({ location, onChange }: CountrySelectProps) => {
  const { data: allProvinces } = useGetAllProvincesQuery("");

  const isSelect = location
    ? allProvinces.find((item: ICountry) => item.code === location)
    : null;

  const [show, setShow] = useState(false);
  const [defaultSelect, setDefaultSelect] = useState(isSelect);

  const onToggle = () => {
    setShow(!show);
  };

  const countrySelect = (country: ICountry) => {
    setDefaultSelect(country);
    onChange(country);
    onToggle();
  };

  return (
    <div className="min-w-full">
      <label className="block text-md font-medium leading-6 text-textLight dark:text-textDark">
        Vị trí
      </label>

      <div className="relative mt-2">
        <button
          onClick={onToggle}
          className="relative w-full cursor-pointer rounded-md bg-light dark:bg-dark py-5 pl-1 pr-10 text-left text-textLight dark:text-textDark shadow-sm sm:text-md sm:leading-6 border border-divideLight dark:border-divideDark"
        >
          <span className="flex items-center">
            <span className="ml-3 block truncate">
              {defaultSelect ? defaultSelect.name : "Chọn vị trí"}
            </span>
          </span>
        </button>

        {show && (
          <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-light dark:bg-dark py-1 text-base shadow-lg focus:outline-none sm:text-sm px-1 duration-300">
            {allProvinces &&
              allProvinces.map((provinces: ICountry, index: number) => (
                <li
                  key={provinces.name}
                  onClick={() => countrySelect(provinces)}
                  className="text-textLight dark:text-textDark relative cursor-pointer select-none py-3 pl-3 pr-9 hover:bg-divideLight dark:hover:bg-divideDark rounded-md"
                >
                  <div className="flex items-center">
                    {index + 1}.
                    <span className="font-normal ml-3 block truncate">
                      {provinces.name}
                    </span>
                  </div>

                  {defaultSelect && defaultSelect.code === provinces.code && (
                    <span className="text-primary absolute inset-y-0 right-0 flex items-center pr-4">
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
                    </span>
                  )}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CountrySelect;
