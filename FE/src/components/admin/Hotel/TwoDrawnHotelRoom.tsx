import { Col, Descriptions, Drawer, Image, Row } from "antd";

import { IRoom } from "../../../interface";

type TwoDrawnHotelRoomProps = {
  dataRoom: IRoom[];
  openDrawnRoom: boolean;
  isClosedDrawnRoom: () => void;
};

const TwoDrawnHotelRoom = ({
  dataRoom,
  openDrawnRoom,
  isClosedDrawnRoom,
}: TwoDrawnHotelRoomProps) => {
  return (
    <Drawer
      title="Thông tin phòng"
      placement="right"
      size="large"
      open={openDrawnRoom}
      closable={false}
      onClose={isClosedDrawnRoom}
    >
      {dataRoom && dataRoom.length > 0 ? (
        <Row gutter={[16, 16]}>
          {dataRoom.map((room) => (
            <Col key={room._id} span={12}>
              <div className="border border-gray-300 p-4 rounded-lg">
                <Image src={room.images[0]?.url} preview={false} />

                <Descriptions title={room?.id_roomType?.name} column={1}>
                  <Descriptions.Item label="Số lượng">
                    {room.quantity}
                  </Descriptions.Item>
                  <Descriptions.Item label="Giá">
                    {room?.id_roomType?.price?.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </Descriptions.Item>
                  <Descriptions.Item label="Trạng thái">
                    {room.status}
                  </Descriptions.Item>
                  <Descriptions.Item label="Mô tả">
                    {room.description}
                  </Descriptions.Item>
                </Descriptions>
              </div>
            </Col>
          ))}
        </Row>
      ) : (
        "Không có thông tin phòng"
      )}
    </Drawer>
  );
};

export default TwoDrawnHotelRoom;
