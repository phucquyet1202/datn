import { Col, Descriptions, Drawer, Image, Row } from "antd";

import { IRoomBooking } from "../../../interface";

type TwoDrawnBookingRoomProps = {
  dataBookingRooms: IRoomBooking[] | undefined;
  openDrawnRoom: boolean;
  isClosedDrawnBookingRoom: () => void;
};

const TwoDrawnBookingRoom = ({
  dataBookingRooms,
  openDrawnRoom,
  isClosedDrawnBookingRoom,
}: TwoDrawnBookingRoomProps) => {
  return (
    <Drawer
      title="Thông tin đặt phòng"
      placement="right"
      size="large"
      open={openDrawnRoom}
      closable={false}
      onClose={isClosedDrawnBookingRoom}
    >
      {dataBookingRooms && dataBookingRooms.length > 0 ? (
        <Row gutter={[16, 16]}>
          {dataBookingRooms.map((info) => (
            <Col key={info.idRoom._id} span={12}>
              <div className="border border-gray-300 p-4 rounded-lg">
                <Image src={info.idRoom.images[0]?.url} preview={false} />

                <Descriptions title={info?.idRoom.id_roomType?.name} column={1}>
                  <Descriptions.Item label="Số lượng">
                    {info.quantity}
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

export default TwoDrawnBookingRoom;
