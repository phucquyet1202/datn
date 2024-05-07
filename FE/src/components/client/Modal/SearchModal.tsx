import qs from "query-string";
import moment from "moment";
import toast from "react-hot-toast";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Calendar, CountrySelect, Modal, Counter } from "../..";
import { useSearchModal } from "../../../hooks";
import { ICountry } from "../../../interface";

const SearchModal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchModal = useSearchModal();

  const [city, setCity] = useState<ICountry>();
  const [dateRange, setDateRange] = useState({
    startDate: moment().format("YYYY-MM-DD"),
    endDate: moment().add(1, "days").format("YYYY-MM-DD"),
  });
  const [room, setRoom] = useState(1);

  const onSubmit = () => {
    let currentQuery = {};

    if (location.search) {
      currentQuery = qs.parse(location.search.toString());
    }

    // eslint-disable-next-line
    const updatedQuery: any = {
      ...currentQuery,
      location: city?.code,
      hotel: null,
    };

    if (city) {
      updatedQuery.location = city.code;
    } else {
      // Nếu không có city được chọn, loại bỏ thuộc tính location khỏi query
      updatedQuery.location = 1;
    }

    if (dateRange.startDate) {
      updatedQuery.checkin = dateRange.startDate;
    }

    if (dateRange.endDate) {
      updatedQuery.checkout = dateRange.endDate;
    }

    if (room) {
      updatedQuery.room = room;
    }

    // if (!updatedQuery.location) {
    //   return toast.error("Bạn chưa chọn vị trí");
    // }

    const url = qs.stringifyUrl(
      {
        url: "/hotel-list",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    searchModal.onClose();
    navigate(url);
  };

  const bodyContent = (
    <div className="flex flex-col gap-3 justify-center items-center">
      {/* <CountrySelect
        location={city?.code}
        onChange={(value) => setCity(value)}
      /> */}

      <Calendar
        dateRange={dateRange}
        onChange={(value) => {
          setDateRange(value);
        }}
      />

      <Counter
        title="Số lượng phòng"
        value={room}
        onChange={(value) => setRoom(value)}
      />
    </div>
  );

  return (
    <Modal
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={onSubmit}
      title="Tìm kiếm"
      actionLabel="Tìm kiếm"
      body={bodyContent}
    />
  );
};

export default SearchModal;

// import qs from "query-string";
// import moment from "moment";
// import toast from "react-hot-toast";
// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// import { Calendar, CountrySelect, Modal, Counter } from "../..";
// import { useSearchModal } from "../../../hooks";
// import { ICountry } from "../../../interface";

// const SearchModal = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const searchModal = useSearchModal();

//   const [city, setCity] = useState<ICountry>();
//   const [dateRange, setDateRange] = useState({
//     startDate: moment().format("YYYY-MM-DD"),
//     endDate: moment().add(1, "days").format("YYYY-MM-DD"),
//   });
//   const [room, setRoom] = useState(1);

//   const onSubmit = () => {
//     let currentQuery = {};

//     if (location.search) {
//       currentQuery = qs.parse(location.search.toString());
//     }

//     // eslint-disable-next-line
//     const updatedQuery: any = {
//       ...currentQuery,
//       location: city?.code,
//       hotel: null,
//     };

//     if (dateRange.startDate) {
//       updatedQuery.checkin = dateRange.startDate;
//     }

//     if (dateRange.endDate) {
//       updatedQuery.checkout = dateRange.endDate;
//     }

//     if (room) {
//       updatedQuery.room = room;
//     }

//     if (!updatedQuery.location) {
//       return toast.error("Bạn chưa chọn vị trí");
//     }

//     const url = qs.stringifyUrl(
//       {
//         url: "/hotel-list",
//         query: updatedQuery,
//       },
//       { skipNull: true }
//     );

//     searchModal.onClose();
//     navigate(url);
//   };

//   const bodyContent = (
//     <div className="flex flex-col gap-3 justify-center items-center">
//       <CountrySelect
//         location={city?.code}
//         onChange={(value) => setCity(value)}
//       />

//       <Calendar
//         dateRange={dateRange}
//         onChange={(value) => {
//           setDateRange(value);
//         }}
//       />

//       <Counter
//         title="Số lượng phòng"
//         value={room}
//         onChange={(value) => setRoom(value)}
//       />
//     </div>
//   );

//   return (
//     <Modal
//       isOpen={searchModal.isOpen}
//       onClose={searchModal.onClose}
//       onSubmit={onSubmit}
//       title="Tìm kiếm"
//       actionLabel="Tìm kiếm"
//       body={bodyContent}
//     />
//   );
// };

// export default SearchModal;
