import { useState } from "react";

import type { ColumnsType } from "antd/es/table";
import {
  Button,
  Table,
  Tag,
  Popconfirm,
  message,
  Tooltip,
  Space,
  Modal,
  Select,
  Form,
  Input,
} from "antd";

const { Option } = Select;

import {
  useChangeRoleUserMutation,
  useGetAllUserQuery,
  useGetOneUserMutation,
  useInfoAccountQuery,
  useLockUserMutation,
} from "../../../api";
import { InfoUserDrawn } from "../../../components";
import { IUser } from "../../../interface";

const UserManager = () => {
  const [form] = Form.useForm();
  const { data, isLoading } = useGetAllUserQuery("");
  const [lockAccount] = useLockUserMutation();
  const [infoUser, resultGetInfo] = useGetOneUserMutation();
  const [changeRole, resultChangeRole] = useChangeRoleUserMutation();
  const { data: user } = useInfoAccountQuery("");

  const key0 = "lockAccountMutation";
  const key1 = "getInfoMutation";
  const [messageApi, contextHolder] = message.useMessage();

  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState();
  const [openModal, setOpenModal] = useState(false);

  const [infoUser2] = useGetOneUserMutation();

  const [info2, setInfo2] = useState();
  const onSubmit = (id: string) => {
    messageApi.open({
      key: key0,
      type: "loading",
      content: "Loading...",
    });

    lockAccount(id)
      .unwrap()
      .then((response) => {
        messageApi.open({
          key: key0,
          type: "success",
          content: response.message,
          duration: 2,
        });
      })
      .catch((error) => {
        messageApi.open({
          key: key0,
          type: "error",
          content: error.data.message,
          duration: 2,
        });
      });
  };

  const getInfo = (id: string) => {
    setOpen(true);

    infoUser(id)
      .unwrap()
      .then((response) => {
        setInfo(response.data);
      })
      .catch((error) => {
        messageApi.open({
          key: key1,
          type: "error",
          content: error.data.message,
          duration: 2,
        });
      });
  };

  const getInfo2 = (id: string) => {
    setOpenModal(true);

    infoUser2(id)
      .unwrap()
      .then((response) => {
        setInfo2(response.data);
      })
      .catch((error) => {
        messageApi.open({
          key: key1,
          type: "error",
          content: error.data.message,
          duration: 2,
        });
      });
  };

  const onClosed = () => {
    setOpen(false);
  };

  const columns: ColumnsType<IUser> = [
    {
      title: "STT",
      dataIndex: "_id",
      key: "_id",
      render: (_id, {}, index) => index + 1,
    },
    {
      title: "Tài khoản",
      dataIndex: "email",
      key: "email",
      render: (email, { _id }) => (
        <Tooltip placement="right" title="Click để xem thông tin chi tiết">
          <button onClick={() => getInfo(_id)}>{email}</button>
        </Tooltip>
      ),
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
      render: (role, { _id }) => (
        <Tag
          color={role === "Admin" ? "volcano" : "geekblue"}
          key={`${_id}-${role}`}
        >
          {role.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, { _id, isLockAccount, role }) => (
        <>
          {role === "Admin" ? (
            <>
              <Tooltip
                placement="left"
                color="red"
                title="Không thể thực hiện hành động trên tài khoản này"
              >
                <p className="text-red-500 cursor-pointer">Administrator</p>
              </Tooltip>
            </>
          ) : (
            <>
              {isLockAccount ? (
                <>
                  <Button disabled>Tài khoản đã bị khóa</Button>
                </>
              ) : (
                <Space>
                  <Popconfirm
                    placement="left"
                    title="Bạn có chắc chắn muốn thực hiện hành động này không?"
                    description="Hành động này sẽ có ảnh hưởng đến trạng thái tài khoản và không thể hoàn tác."
                    onConfirm={() => onSubmit(_id)}
                    okText="Đồng ý"
                    okType="danger"
                    cancelText="Hủy"
                  >
                    {user?.data?.role == "Admin" ? (
                      <div className="flex gap-2">
                        <Button danger>Khóa tài khoản</Button>
                      </div>
                    ) : (
                      ""
                    )}
                  </Popconfirm>

                  {user?.data?.role == "Admin" ? (
                    <div className="flex gap-2">
                      <Button onClick={() => getInfo2(_id)}>Cập nhật</Button>
                    </div>
                  ) : (
                    ""
                  )}
                </Space>
              )}
            </>
          )}
        </>
      ),
    },
  ];

  const onFinish = (values) => {
    const data = {
      id: info2._id,
      ...values,
    };

    changeRole(data)
      .unwrap()
      .then((response) => {
        messageApi.open({
          key: key1,
          type: "success",
          content: response.message,
          duration: 2,
        });

        setOpenModal(false);
      })
      .catch((error) => {
        messageApi.open({
          key: key1,
          type: "error",
          content: error.data.message,
          duration: 2,
        });
      });
  };

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
      {contextHolder}
      <Table
        bordered
        rowKey="_id"
        columns={columns}
        dataSource={data?.data}
        loading={isLoading}
        pagination={paginationConfig}
      />

      {info2 && (
        <Modal
          title="Basic Modal"
          open={openModal}
          onCancel={() => setOpenModal(false)}
          footer={null}
        >
          <Form form={form} onFinish={onFinish}>
            <Form.Item name="role" label="Vai trò">
              <Select placeholder="Chọn vai trò" allowClear>
                {/* <Option value="Admin">Admin</Option> */}
                <Option value="Reservation Manager">Reservation Manager</Option>
                <Option value="Human Resources Manager">
                  Human Resources Manager
                </Option>
                <Option value="Room Manager">Room Manager</Option>
                <Option value="Facilities Manager">Facilities Manager</Option>
                <Option value="User">User</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
      )}

      {info && (
        <InfoUserDrawn
          info={info}
          isOpen={open}
          onClosed={onClosed}
          loading={resultGetInfo.isLoading}
        />
      )}
    </>
  );
};

export default UserManager;
