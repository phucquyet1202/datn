import { Button, Space, Table, Input, DatePicker, Drawer, Image } from "antd";
import type { DatePickerProps, GetRef, TableProps } from "antd";
import { useGetAllBookingQuery, useGetOneBookingQuery } from "../../../api";
import { IBooking, IRoom } from "../../../interface";
import { useRef, useState } from "react";
import moment from "moment";
import { EditBookingDrawn } from "../../../components";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { FilterDropdownProps } from "antd/es/table/interface";

type InputRef = GetRef<typeof Input>;

const BookingManager = () => {
  //  TODO
  const [open, setOpen] = useState(false);
  const showDrawer = (id: string) => {
    setIdBooking(id); // Đặt ID của hoá đơn bạn muốn hiển thị thông tin chi tiết
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [showEditModal, setShowEditModal] = useState(false);
  const [idBooking, setIdBooking] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchTextCheckIn, setSearchTextCheckIn] = useState("");
  const [searchTextCheckOut, setSearchTextCheckOut] = useState("");
  const searchInput = useRef<InputRef>(null);

  const { data: allBooking, isLoading } = useGetAllBookingQuery("");
  const { data: dataOneBooking, isFetching } = useGetOneBookingQuery(idBooking);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"]
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };

  const handleSearchCheckIn = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"]
  ) => {
    confirm();
    setSearchTextCheckIn(selectedKeys[0]);
  };

  const handleSearchCheckOut = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"]
  ) => {
    confirm();
    setSearchTextCheckOut(selectedKeys[0]);
  };

  const onClickSearch = (confirm: any, selectedKeys: any) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };

  const onClickSearchCheckIn = (confirm: any, selectedKeys: any) => {
    confirm();
    setSearchTextCheckIn(selectedKeys[0]);
  };

  const onClickSearchCheckOut = (confirm: any, selectedKeys: any) => {
    confirm();
    setSearchTextCheckOut(selectedKeys[0]);
  };

  const onClearSearch = (clearFilters: any, confirm: any) => {
    clearFilters();
    confirm();
  };

  const columns: TableProps<IBooking>["columns"] = [
    {
      title: "Tên",
      dataIndex: "info",
      key: "name",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={searchInput}
            placeholder="Search name"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => handleSearch(selectedKeys as string[], confirm)}
            style={{ marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="default"
              onClick={() => onClickSearch(confirm, selectedKeys)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button
              onClick={() => {
                setSearchText("");
                onClearSearch(clearFilters, confirm);
              }}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
      ),
      onFilter: (value, record) =>
        record?.info?.name
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase()),
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      render: (text) =>
        searchText ? (
          <Highlighter
            searchWords={[searchText]}
            textToHighlight={text?.name}
          />
        ) : (
          text?.name
        ),
    },
    {
      title: "Chứng minh thư",
      dataIndex: "info",
      key: "cmt",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={searchInput}
            placeholder="Search CMT"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => handleSearch(selectedKeys as string[], confirm)}
            style={{ marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="default"
              onClick={() => onClickSearch(confirm, selectedKeys)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button
              onClick={() => {
                setSearchText("");
                onClearSearch(clearFilters, confirm);
              }}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
      ),
      onFilter: (value, record) =>
        record?.info?.cmt
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase()),
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      render: (text) =>
        searchText ? (
          <Highlighter searchWords={[searchText]} textToHighlight={text?.cmt} />
        ) : (
          text?.cmt
        ),
    },
    {
      title: "Phòng",
      dataIndex: "list_room",
      key: "list_room",
      render: (list_room) => (
        <Space direction="vertical" size="small">
          {/* {list_room?.map(
            (item: { idRoom: IRoom; quantity: number }, index: number) => (
              <Space key={item?.idRoom?._id} direction="horizontal">
                <div>
                  {index + 1}. {item?.idRoom?.id_roomType?.name}
                </div>
                <div>x{item?.quantity}</div>
              </Space>
            )
          )} */}
          <div>{list_room?.idRoom?.id_roomType?.name}</div>
          <div>x{list_room?.quantity}</div>
        </Space>
      ),
    },
    {
      title: "Ngày nhận phòng",
      dataIndex: "check_in",
      key: "check_in",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={searchInput}
            placeholder="Search name"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() =>
              handleSearchCheckIn(selectedKeys as string[], confirm)
            }
            style={{ marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="default"
              onClick={() => onClickSearchCheckIn(confirm, selectedKeys)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button
              onClick={() => {
                setSearchTextCheckIn("");
                onClearSearch(clearFilters, confirm);
              }}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
      ),
      onFilter: (value, record) => {
        const date = moment(record.check_in).format("DD/MM/YYYY");

        return date
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase());
      },
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      render: (text) => {
        const date = moment(text).format("DD/MM/YYYY");

        return searchTextCheckIn ? (
          <Highlighter
            searchWords={[searchTextCheckIn]}
            textToHighlight={date}
          />
        ) : (
          date
        );
      },
    },
    {
      title: "Ngày trả phòng",
      dataIndex: "check_out",
      key: "check_out",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={searchInput}
            placeholder="Search name"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() =>
              handleSearchCheckOut(selectedKeys as string[], confirm)
            }
            style={{ marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="default"
              onClick={() => onClickSearchCheckOut(confirm, selectedKeys)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button
              onClick={() => {
                setSearchTextCheckOut("");
                onClearSearch(clearFilters, confirm);
              }}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
      ),
      onFilter: (value, record) => {
        const date = moment(record.check_out).format("DD/MM/YYYY");

        return date
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase());
      },
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      render: (text) => {
        const date = moment(text).format("DD/MM/YYYY");

        return searchTextCheckOut ? (
          <Highlighter
            searchWords={[searchTextCheckOut]}
            textToHighlight={date}
          />
        ) : (
          date
        );
      },
    },
    {
      title: "Giá",
      dataIndex: "total_price",
      key: "total_price",
      render: (total_price, { id_payment, is_deposit_amount, success }) => (
        <div>
          {success ? (
            <p>
              Tổng:
              {id_payment?.total_payment.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </p>
          ) : (
            <div>
              <p>
                Tổng:
                {id_payment?.total_payment.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              {is_deposit_amount && (
                <p>
                  {is_deposit_amount ? "Cọc: " : "Thanh toán: "}
                  {total_price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              )}
              {is_deposit_amount && (
                <p>
                  Còn lại:
                  {(id_payment?.total_payment - total_price).toLocaleString(
                    "vi-VN",
                    {
                      style: "currency",
                      currency: "VND",
                    }
                  )}
                </p>
              )}
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Trạng thái thanh toán",
      dataIndex: "payment_status",
      key: "payment_status",
      render: (payment_status, { is_deposit_amount, success, id_payment }) => {
        return (
          <div>
            {id_payment.status === "Thất bại"
              ? "Thất bại"
              : success
              ? "Thành công"
              : is_deposit_amount
              ? payment_status
                ? "Đã thanh toán cọc"
                : "Chưa thanh toán cọc"
              : payment_status
              ? "Đã thanh toán"
              : "Chưa thanh toán"}
          </div>
        );
      },
    },
    {
      title: "Trạng thái đơn hàng",
      dataIndex: "status",
      key: "status",
      filters: [
        {
          text: "Chờ thanh toán",
          value: "Chờ thanh toán",
        },
        {
          text: "Đang xử lý",
          value: "Đang xử lý",
        },
        {
          text: "Đã xác nhận",
          value: "Đã xác nhận",
        },
        {
          text: "Đã hủy bỏ",
          value: "Đã hủy bỏ",
        },
        {
          text: "Vắng mặt",
          value: "Vắng mặt",
        },
        {
          text: "Đã nhận phòng",
          value: "Đã nhận phòng",
        },
        {
          text: "Thành công",
          value: "Thành công",
        },
      ],
      onFilter: (value: string, { status }) => status.indexOf(value) === 0,
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, { _id, status }) => (
        <>
          <Space>
            <Button
              disabled={
                status === "Thành công" ||
                status === "Đã hủy bỏ" ||
                status === "Vắng mặt"
              }
              onClick={() => {
                setShowEditModal(true);
                setIdBooking(_id);
              }}
            >
              {status === "Thành công" ? "Thành công" : "Cập nhật"}
            </Button>

            <Button type="primary" onClick={() => showDrawer(_id)}>
              Thông tin chi tiết
            </Button>
            <Drawer
              title="Thông tin chi tiết Đặt phòng"
              onClose={onClose}
              open={open}
            >
              <div className="mb-4">
                <p className="font-bold">Thời gian:</p>
                <p>
                  Thời gian nhận phòng:{" "}
                  {moment(dataOneBooking?.data?.check_in).format("YYYY-MM-DD")}
                </p>

                <p>
                  Thời gian trả phòng:{" "}
                  {moment(dataOneBooking?.data?.check_out).format("YYYY-MM-DD")}
                </p>
              </div>

              <div className="mb-4">
                <p className="font-bold">Thông tin thanh toán:</p>
                <p>
                  Tổng số tiền cần thanh toán:{" "}
                  {dataOneBooking?.data?.total_price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}{" "}
                </p>

                <p>
                  Tiền khách đã thanh toán:{" "}
                  {dataOneBooking?.data?.id_payment?.total_payment.toLocaleString(
                    "vi-VN",
                    {
                      style: "currency",
                      currency: "VND",
                    }
                  )}
                </p>

                <p>
                  Thời gian thanh toán:{" "}
                  {moment(dataOneBooking?.data?.id_payment?.createdAt).format(
                    "dddd,DD/MM/YYYY HH:mm:ss"
                  )}
                </p>

                <p>Trạng thái: {dataOneBooking?.data?.status}</p>

                <p>Thánh toán qua: {dataOneBooking?.data?.payment_method}</p>
              </div>

              <div className="mb-4">
                <p className="font-bold">Thông tin người đặt phòng</p>

                <p>Chứng minh nhân dân: {dataOneBooking?.data?.info?.cmt}</p>

                <p>Tên người đặt phòng: {dataOneBooking?.data?.info?.name}</p>

                <p>Số điện thoại: {dataOneBooking?.data?.info?.phone}</p>
              </div>

              <div>
                <Image
                  src={dataOneBooking?.data?.list_room?.idRoom?.images[0].url}
                  alt=""
                />
              </div>
            </Drawer>
          </Space>
        </>
      ),
    },
  ];

  const [currentItem, setCurrentItem] = useState(10);
  const paginationConfig = {
    pageSize: currentItem,
    showSizeChanger: true,
    pageSizeOptions: ["10", "20", "30", "50"],
    onShowSizeChange: (_current: number, size: number) => {
      setCurrentItem(size);
    },

    showTotal: (total: number, range: number[]) =>
      `${range[0]}-${range[1]} của ${total} mục`,
  };

  return (
    <>
      <Table
        bordered
        rowKey="_id"
        columns={columns}
        dataSource={allBooking?.data}
        loading={isLoading}
        pagination={paginationConfig}
      />

      <EditBookingDrawn
        key={dataOneBooking?.data._id}
        isOpenEdit={showEditModal}
        onCancel={() => setShowEditModal(false)}
        data={dataOneBooking?.data}
        loading={isFetching}
      />
    </>
  );
};

export default BookingManager;
