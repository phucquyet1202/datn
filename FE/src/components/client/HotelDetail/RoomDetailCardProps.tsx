import { IRoom } from "../../../interface";
import { AiOutlineCloseCircle } from "react-icons/ai";
import RoomAmenities from "./RoomAmenities";
import styles from "./styles.module.css";
import Search from "../NavBar/Search";

type RoomDetailCardProps = {
  room: IRoom;
  onCloseDetail: () => void;
};

import qs from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ICountry } from "../../../interface";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { DatePicker, Space, Popover, Button } from "antd";
import dayjs from "dayjs";
import {
  AiOutlineSearch,
  AiOutlineUsergroupDelete,
  AiOutlineClose,
} from "react-icons/ai";

const disabledDate = (current: any) => {
  return current && current < moment().startOf("day");
};

const RoomDetailCard = ({ room: Room, onCloseDetail }: any) => {
  const [showSearch, setShowSearch] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>(Room?.images[0].url);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleThumbnailClick = (imageUrl: string, index: number) => {
    setCurrentImageIndex(index);
    setCurrentImage(imageUrl);
  };

  const handleOk = () => {
    setShowSearch(true);
  };

  const offSearch = () => {
    setShowSearch(false);
  };

  // !search
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

  return (
    <>
      {/* //! search */}
      {showSearch && (
        <div>
          {<div className="overlay" />}
          <button
            className={`fixed text-4xl -top-5  z-[999] xl:-right-32 xl:-top-36 text-white`}
            onClick={offSearch}
          >
            <AiOutlineClose />
          </button>
          <div
            className={`max-[1300px]:hidden max-[1300px]:grid max-[1100px]:grid-cols-[300px_240px_400px]  grid grid-cols-[400px_340px_560px] justify-start border border-gary-300  shadow-xl mx-auto text-base max-w-[1300px] fixed bg-white  -top-24 left-[-100px] z-[999] transition-search w-[1300px]`}
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
                    showAdditionalRooms
                      ? "border-t-black border"
                      : "border-none"
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
        </div>
      )}

      {/* // ! end search */}

      <div className="flex w-[1100px]">
        <div className="flex flex-col bg-[#98999b]">
          <div className="w-[650px] relative">
            <img
              src={currentImage}
              key={currentImage}
              className="w-[700px] h-[350px] object-cover"
            />

            <span className="bottom-0 pl-3 py-2 bg-[black] absolute opacity-40 w-full text-[white] font-bold">
              {Room?.id_roomType?.name}
            </span>
          </div>
          <div className="flex w-[140px] p-3 gap-3 border-none  object-cover">
            {Room?.images.map((img, index: number) => (
              <img
                key={index}
                src={img.url}
                alt=""
                onClick={() => handleThumbnailClick(img.url, index)}
                className={`
                  ${currentImageIndex === index ? styles.selectedThumbnail : ""}
                 object-cover cursor-pointer
                `}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 ml-3 pb-22 justify-between">
          <h1 className="border-b font-[500] mt-4 pb-3">
            {Room?.id_roomType?.name}
          </h1>

          <span className="text-[13px]">{Room?.description}</span>
          <div className="mt-3">
            <span className="font-[500]">Tiện nghi của phòng</span>
            <div>
              <RoomAmenities amenities={Room?.id_amenities} />
            </div>
          </div>

          <div className="pr-4 mt-4 flex flex-col gap-2">
            <div>
              <h1 className="text-xl font-bold">Thông tin chi tiết phòng</h1>
            </div>
            <div>
              <p>
                Phòng có thể chứa {Room?.id_roomType?.children} trẻ em và{" "}
                {Room?.id_roomType?.adults} người lớn
              </p>
              <p>Số lượng giường ngủ: {Room?.id_roomType?.bed}</p>
              <p>
                Giá phòng:
                {Room?.id_roomType?.price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}{" "}
                / đêm
              </p>
            </div>

            {Room?.id_roomType?.status !== "Không được áp dụng" ? (
              <Button
                type="primary"
                className="text-white bg-blue-500 mr-3 mb-2 w-full"
                onClick={handleOk}
              >
                Đặt phòng
              </Button>
            ) : (
              <Button className="text-black bg-white-500 mr-3 mb-2 w-full">
                Hiện tại không thể đặt phòng này
              </Button>
            )}
          </div>
        </div>

        <button onClick={onCloseDetail}>
          <AiOutlineCloseCircle
            className={`text-[30px] absolute top-3 right-4 bg-white`}
          />
        </button>
      </div>
    </>
  );
};

export default RoomDetailCard;
