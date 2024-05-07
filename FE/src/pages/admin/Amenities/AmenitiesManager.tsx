import { useState } from "react";

import type { ColumnsType } from "antd/es/table";
import { Button, Select, Space, Table, message } from "antd";

import { IAmenities } from "../../../interface";
import { CreateAmenitiesModal, EditAmenitiesModal } from "../../../components";
import {
  // useDeleteAmenitiesMutation,
  useGetAllAmenitiesQuery,
  useGetOneAmenitiesQuery,
  useUpdateAmenitiesMutation,
} from "../../../api";

const AmenitiesManager = () => {
  // const key0 = "deleteAmenitiesMutation";
  // const [contextHolder] = message.useMessage();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [idAmenities, setIdAmenities] = useState("");

  const { data, isLoading } = useGetAllAmenitiesQuery("");
  const { data: dataOneAmenities, isFetching } =
    useGetOneAmenitiesQuery(idAmenities);
  const [editAmenities] = useUpdateAmenitiesMutation();
  // const [deleteAmenities] = useDeleteAmenitiesMutation();

  // const onDelete = (id: string) => {
  //   messageApi.open({
  //     key: key0,
  //     type: "loading",
  //     content: "Loading...",
  //   });

  //   deleteAmenities(id)
  //     .unwrap()
  //     .then((response) => {
  //       messageApi.open({
  //         key: key0,
  //         type: "success",
  //         content: response.message,
  //         duration: 2,
  //       });
  //     })
  //     .catch((error) => {
  //       messageApi.open({
  //         key: key0,
  //         type: "error",
  //         content: error.data.message,
  //         duration: 2,
  //       });
  //     });
  // };
  const handleChange = (value: string) => {
    editAmenities({ status: value, _id: idAmenities })
      .unwrap()
      .then(() => {
        message.success("Cập nhật trạng thái thành công");
      })
      .catch((error) => {
        message.error(error.data.message);
      });
  };
  const columns: ColumnsType<IAmenities> = [
    {
      title: "STT",
      dataIndex: "_id",
      key: "_id",
      render: (_id, {}, index) => index + 1,
    },
    {
      title: "Tên tiện ích",
      dataIndex: "name",
      key: "name",
    },
    // {
    //   title: "Features",
    //   dataIndex: "features",
    //   key: "features",
    //   render: (features) => (
    //     <Space direction="vertical" size="small">
    //       {features.map(
    //         (item: { name: string; surcharge: boolean }, index: number) => (
    //           <Space key={item.name} direction="horizontal">
    //             <div>
    //               {index + 1}. {item.name}
    //             </div>
    //             {/* {item.surcharge && <Tag>Phụ phí</Tag>} */}
    //           </Space>
    //         )
    //       )}
    //     </Space>
    //   ),
    // },
    // {
    //   title: "Trạng thái",
    //   key: "status",
    //   render: ({ _id, status }) => (
    //     <Space wrap>
    //       <Select
    //         defaultValue={status}
    //         style={{ width: 120 }}
    //         onChange={(value) => handleChange(value)}
    //         onClick={() => setIdAmenities(_id)}
    //         options={[
    //           { value: "Đang áp dụng", label: "Đang áp dụng" },
    //           { value: "Không được áp dụng", label: "Không được áp dụng" },
    //         ]}
    //       />
    //     </Space>
    //   ),
    // },
    {
      title: "Hành động",
      key: "action",
      render: (_, { _id }) => (
        <>
          <Space>
            <Button
              onClick={() => {
                setShowEditModal(true);
                setIdAmenities(_id);
              }}
            >
              Sửa
            </Button>

            {/* <Popconfirm
              placement="left"
              title="Bạn có chắc chắn muốn xóa tiện ích này không?"
              description="Hành động này không thể hoàn tác."
              onConfirm={() => onDelete(_id)}
              okText="Đồng ý"
              okType="danger"
              cancelText="Hủy"
            >
              <Button danger>Xóa</Button>
            </Popconfirm> */}
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
      {/* {contextHolder} */}

      <Table
        title={() => (
          <div className="flex items-center justify-end">
            <Button onClick={() => setShowCreateModal(true)}>Thêm mới</Button>
          </div>
        )}
        bordered
        rowKey="_id"
        columns={columns}
        dataSource={data?.data}
        loading={isLoading}
        pagination={paginationConfig}
      />

      <CreateAmenitiesModal
        isOpenCreate={showCreateModal}
        onCancel={() => setShowCreateModal(false)}
      />

      <EditAmenitiesModal
        key={dataOneAmenities?.data._id}
        isOpenEdit={showEditModal}
        onCancel={() => setShowEditModal(false)}
        data={dataOneAmenities?.data}
        loading={isFetching}
      />
    </>
  );
};

export default AmenitiesManager;
