import qs from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ICountry } from "../../../interface";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { DatePicker, Space, Popover } from "antd";
import dayjs from "dayjs";
import {
  AiOutlineSearch,
  AiOutlineUsergroupDelete,
  AiOutlineClose,
} from "react-icons/ai";

const disabledDate = (current: any) => {
  return current && current < moment().startOf("day");
};

const Search = () => {
  const [searchParams] = useSearchParams();
  const checkin = searchParams.get("checkin") || "";
  const checkout = searchParams.get("checkout") || "";
  const quantity = searchParams.get("quantity") || "";
  const children = searchParams.get("children") || "";
  const adults = searchParams.get("adults") || "";

  // ấn vào nút tìm kiếm nó sẽ render lại
  const [isSearched, setIsSearched] = useState(false);

  // thông báo nếu chưa nhập số lượng phòng
  const [errorMessage, setErrorMessage] = useState("");
  const [roomInfo, setRoomInfo] = useState([
    {
      adults: Number(adults !== "" ? adults : 1),
      children: Number(children !== "" ? children : ""),
    },
  ]);
  const [room, setRoom] = useState(Number(quantity ? quantity : 1));

  // thêm phòng
  const addRoom = () => {
    if (room < 10) {
      setRoom(room + 1);
    }
  };

  // xóa phòng
  const removeRoom = (index: number) => {
    if (room > 1) {
      setRoom(room - 1);
    }
  };

  // tăng số lượng người lớn
  const handleIncrementAdults = (index: number) => {
    const newRoomInfo = [...roomInfo];

    if (newRoomInfo[index].adults < 8) {
      newRoomInfo[index].adults++;
      setRoomInfo(newRoomInfo);
    }
  };

  // giảm số lượng người lớn
  const handleDecrementAdults = (index: number) => {
    if (roomInfo[index].adults > 1) {
      const newRoomInfo = [...roomInfo];
      newRoomInfo[index].adults--;
      setRoomInfo(newRoomInfo);
    }
  };

  // tăng só lượng trẻ em
  const handleIncrementChildren = (index: number) => {
    const newRoomInfo = [...roomInfo];

    if (newRoomInfo[index].children < 5) newRoomInfo[index].children++;
    setRoomInfo(newRoomInfo);
  };

  // giảm số lượng trẻ em
  const handleDecrementChildren = (index: number) => {
    if (roomInfo[index].children > 0) {
      const newRoomInfo = [...roomInfo];
      newRoomInfo[index].children--;
      setRoomInfo(newRoomInfo);
    }
  };

  const content = (
    <div>
      <p className="text-[red] font-bold">{errorMessage}</p>
    </div>
  );
  // ẩn/hiện + - để chọn số lượng phòng,người lớn, trẻ em
  const [showAdditionalRooms, setShowAdditionalRooms] = useState(false);

  // ẩn hiện bảng chọn số lượng
  const handleRoomLabelClick = () => {
    setShowAdditionalRooms(true);
  };

  let totalAdults = 0;
  let totalChildren = 0;

  roomInfo.forEach((room) => {
    totalAdults += room.adults;
    totalChildren += room.children;
  });

  const { RangePicker } = DatePicker;
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  // thoát focus input số lượng phòng
  const inputRef = useRef(null);
  const handleClickOutside = (e: any) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setShowAdditionalRooms(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isSearched) {
      window.location.reload();
    }
  }, [isSearched]);

  // tìm phòng
  const location = useLocation();
  const navigate = useNavigate();

  const [city, setCity] = useState<ICountry>();
  const [dateRange, setDateRange] = useState({
    startDate: moment().format("YYYY-MM-DD"),
    endDate: moment().add(1, "days").format("YYYY-MM-DD"),
  });
  const maxEndDate = dayjs(dateRange.startDate).add(29, "day");
  const onSubmit = () => {
    let currentQuery = {};

    if (location.search) {
      currentQuery = qs.parse(location.search.toString());
    }
    const updatedQuery: any = {
      ...currentQuery,
      hotel: null,
    };

    if (dateRange.startDate) {
      updatedQuery.checkin = dateRange.startDate;
    }

    if (dateRange.endDate) {
      updatedQuery.checkout = dateRange.endDate;
    }

    if (dateRange.endDate === "") {
      setErrorMessage("Bạn cần nhập thông tin ngày nhận phòng và trả phòng");
      return;
    } else if (dateRange.endDate === dateRange.startDate) {
      setErrorMessage("Ngày nhận phòng và trả phòng đang trùng nhau");
      return;
    } else if (dayjs(dateRange.endDate).isAfter(maxEndDate, "day")) {
      setErrorMessage(
        "Từ ngày checkin đến checkout không được vượt quá 29 ngày"
      );
      return;
    }

    // Nếu không có lỗi, tiếp tục xử lý như bình thường
    updatedQuery.quantity = room;
    updatedQuery.children = roomInfo[0].children;
    updatedQuery.adults = roomInfo[0].adults;

    setIsSearched(true);
    const url = qs.stringifyUrl(
      {
        url: "/hotel-list",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    navigate(url);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
  };

  // FIXME test fix
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);
  useEffect(() => {
    if (isExpanded) {
      setIsScrollDisabled(true);
    } else {
      setIsScrollDisabled(false);
    }
  }, [isExpanded]);
  return (
    <>
      {isExpanded && <div className="overlay" />}
      <button
        className={`fixed text-black text-4xl top-8 right-72 z-[999] xl:right-2 xl:top-5 ${
          isExpanded ? "" : "hidden"
        }`}
        onClick={handleCollapse}
      >
        <AiOutlineClose />
      </button>
      <div
        onClick={handleExpand}
        className={`max-[1000px]:hidden max-[1000px]:grid max-[1100px]:grid-cols-[300px_240px_400px]  grid grid-cols-[400px_340px_560px] justify-start border ${
          checkin == "" ? "mt-2" : ""
        } z-50 border-gary-300  shadow-xl mx-auto text-base max-w-[1300px] fixed bg-white ${
          isExpanded
            ? ` top-20 inset-x-0 z-[999] transition-search`
            : `${
                checkin == "" ? "bottom-10" : ""
              } transition-search-bottom inset-x-0`
        }`}
      >
        <div className="flex items-center ml-3 gap-2 border-r-[1px] border-gray-300 text-[18px] pl-2">
          <p>
            <AiOutlineSearch />
          </p>

          <p className="text-black">Khách sạn Melia Hà Nội Việt Nam</p>
        </div>
        <div className="flex items-center ml-6 gap-2 border-r-[1px] border-gray-300 py-4 text-[18px]">
          <Space direction="vertical" size={12}>
            <RangePicker
              className="
              py-[11px] focus:border-yellow-500 hover:border-yellow-500 border-none"
              disabledDate={disabledDate}
              defaultValue={
                checkin === ""
                  ? [dayjs(), dayjs().add(1, "days")]
                  : [dayjs(checkin), dayjs(checkout)]
              }
              onChange={(dates, dateStrings) => {
                handleExpand();
                setDateRange({
                  startDate: dateStrings[0],
                  endDate: dateStrings[1],
                });
              }}
            />
          </Space>
        </div>
        <div
          className="flex items-center justify-between ml-4 text-[18px] relative font-[Graphik]"
          ref={inputRef}
        >
          <div className="flex items-center gap-2">
            <p>
              <AiOutlineUsergroupDelete />
            </p>
            <div className="flex" onClick={handleRoomLabelClick}>
              {room} Phòng <p className="mx-1">•</p> {totalAdults} Người lớn
              {totalChildren === 0 ? (
                ""
              ) : (
                <span>
                  <span className="mx-1">•</span>{" "}
                  {totalChildren === 0 ? "" : totalChildren} Trẻ em
                </span>
              )}
            </div>
          </div>
          {showAdditionalRooms && (
            <div
              className={`absolute -left-6 top-full bg-white px-2 py-4 translate-x-2 z-50 shadow border-t-2 w-[273px] overflow-auto h-56 ${
                showAdditionalRooms ? "border-t-black border" : "border-none"
              } `}
            >
              <div>
                <h1>Phòng và khách</h1>
                <div className="flex justify-between">
                  <div>
                    <p>Số lượng phòng</p>
                  </div>

                  <div className="flex gap-2 items-center">
                    <button
                      className="border rounded-full px-3 py-1 my-2 border-slate-950"
                      onClick={() => removeRoom(roomInfo.length - 1)}
                    >
                      -
                    </button>
                    <p>{room}</p>
                    <button
                      onClick={addRoom}
                      className="border rounded-full px-3 py-1 my-2 border-slate-950"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {roomInfo.map((room, index) => (
                <div key={index}>
                  <div className="mb-2">
                    {/* <p className="text-base">Phòng {index + 1}</p> */}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base">Người lớn</p>
                    </div>

                    <div>
                      <button
                        onClick={() => handleDecrementAdults(index)}
                        className="border rounded-full px-3 py-1 my-2 border-slate-950"
                      >
                        -
                      </button>
                      <span className="mx-2">{room.adults}</span>
                      <button
                        onClick={() => handleIncrementAdults(index)}
                        className="border rounded-full px-3 py-1 my-2 border-slate-950"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-base">Trẻ em</p>
                    </div>
                    <div>
                      <button
                        onClick={() => handleDecrementChildren(index)}
                        className="border rounded-full px-3 py-1 my-2 border-slate-950"
                      >
                        -
                      </button>
                      <span className="mx-2">{room.children}</span>
                      <button
                        onClick={() => handleIncrementChildren(index)}
                        className="border rounded-full px-3 py-1 my-2 border-slate-950"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {roomInfo.length == 1 ? (
                    ""
                  ) : (
                    <button
                      onClick={() => removeRoom(index)}
                      className="text-lg text-blue-500 font-bold"
                    >
                      Xóa phòng
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
          <div>
            <Popover content={content} title="Thông báo" trigger="click">
              <button
                className="bg-[#918981] w-[150px] py-4 mr-2 text-white font-[Graphik] text-[15px] leading-6 focus:border-yellow-500 hover:border-yellow-500 rounded transition-all duration-300 focus:outline-none"
                onClick={onSubmit}
              >
                Tìm kiếm
              </button>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
