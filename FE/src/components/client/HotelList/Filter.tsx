import { useEffect, useState } from "react";
import { Col, InputNumber, Slider, Space } from "antd";

const Filter = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(28000);

  const onChange = (value: number[]) => {
    setMinValue(value[0]);
    setMaxValue(value[1]);
  };

  const generateNewUrl = (
    oldUrl: string,
    minPrice: number,
    maxPrice: number
  ): string => {
    const url = new URL(oldUrl);
    url.searchParams.set("minPrice", String(minPrice));
    url.searchParams.set("maxPrice", String(maxPrice));
    return url.toString();
  };

  // Sử dụng hàm này khi giá trị minPrice và maxPrice thay đổi
  const onChass = (value: number[]) => {
    const newUrl = generateNewUrl(window.location.href, value[0], value[1]);
    // Sử dụng newUrl ở đây, ví dụ chuyển hướng đến trang mới
    window.location.href = newUrl;
  };

  return (
    <div className="hidden lg:block bg-light dark:bg-dark p-3 rounded-md">
      <h3 className="sr-only">Danh sách</h3>
      <ul
        role="list"
        className="border-b border-divideLight dark:border-divideDark pb-1 text-sm font-medium text-textLight2nd dark:text-textDark2nd"
      >
        <li className="hover:bg-backgroundLight dark:hover:bg-backgroundDark cursor-pointer">
          <span className="block px-2 py-3">Totes</span>
        </li>
        <li className="hover:bg-backgroundLight dark:hover:bg-backgroundDark cursor-pointer">
          <span className="block px-2 py-3">Backpacks</span>
        </li>
        <li className="hover:bg-backgroundLight dark:hover:bg-backgroundDark cursor-pointer">
          <span className="block px-2 py-3">Travel Bags</span>
        </li>
        <li className="hover:bg-backgroundLight dark:hover:bg-backgroundDark cursor-pointer">
          <span className="block px-2 py-3">Hip Bags</span>
        </li>
        <li className="hover:bg-backgroundLight dark:hover:bg-backgroundDark cursor-pointer">
          <span className="block px-2 py-3">Laptop Sleeves</span>
        </li>
      </ul>

      <div className="mt-4 ml-3">
        <h1 className="mb-2">Giá tiền mỗi đêm</h1>
        <div className="flex items-center">
          <div className="relative mr-2">
            <h1 className=" absolute z-10 left-2 top-1 text-sm font-bold">
              Tối thiểu
            </h1>
            <Col span={4}>
              <InputNumber
                className="w-[140px] pt-5 text-[14px]"
                min={0}
                max={maxValue} // Giá trị tối đa phụ thuộc vào giá trị tối đa hiện tại
                value={minValue}
                onChange={(value: any) => {
                  setMinValue(value);
                  if (value > maxValue) {
                    setMaxValue(value); // Đồng bộ hóa giá trị tối đa nếu giá trị tối thiểu lớn hơn giá trị tối đa
                  }
                }}
              />
            </Col>
            <span className="absolute right-6 bottom-[5px] text-gray-500">
              đ
            </span>
          </div>

          <div className="relative">
            <h1 className="absolute z-10 left-2 top-1 text-sm font-bold">
              Tối đa
            </h1>
            <Col span={4}>
              <InputNumber
                className=" rounded border border-gray-300 focus:border-indigo-500 focus:outline-none pt-5 w-[140px] text-[14px]"
                min={minValue}
                max={28000}
                // style={{ margin: "0 16px" }}
                value={maxValue}
                onChange={(value: any) => {
                  setMaxValue(value);
                  if (value < minValue) {
                    setMinValue(value);
                  }
                }}
              />
            </Col>
            <span className="absolute right-6 bottom-[5px] text-gray-500">
              đ
            </span>
          </div>
        </div>
        <Slider
          range
          defaultValue={[0, 28000]}
          min={0}
          max={28000}
          value={[minValue, maxValue]}
          onChange={onChange}
        />

        <button onClick={() => onChass([minValue, maxValue])}>Tìm kiếm</button>
      </div>
    </div>
  );
};

export default Filter;
