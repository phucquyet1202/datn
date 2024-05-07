import { Descriptions, Drawer, Image } from "antd";

import { IHotel } from "../../../interface";

type TwoDrawnRoomHotelProps = {
  dataHotel: IHotel;
  openDrawnHotel: boolean;
  isClosedDrawnHotel: () => void;
};

const TwoDrawnRoomHotel = ({
  dataHotel,
  openDrawnHotel,
  isClosedDrawnHotel,
}: TwoDrawnRoomHotelProps) => {
  return (
    <Drawer
      title="Thông tin khách sạn"
      placement="right"
      size="large"
      open={openDrawnHotel}
      closable={false}
      onClose={isClosedDrawnHotel}
    >
      {dataHotel ? (
        <div className="border border-gray-300 p-4 rounded-lg">
          <Image src={dataHotel.images[0]?.url} preview={false} />

          <Descriptions title={dataHotel?.name} column={1}>
            <Descriptions.Item label="Thành phố">
              {dataHotel.city}
            </Descriptions.Item>
            <Descriptions.Item label="Địa chỉ">
              {dataHotel.address}
            </Descriptions.Item>
            <Descriptions.Item label="Trạng thái">
              {dataHotel.status}
            </Descriptions.Item>
            <Descriptions.Item label="Mô tả">
              {dataHotel.description}
            </Descriptions.Item>
          </Descriptions>
        </div>
      ) : (
        "Không có thông tin khách sạn"
      )}
    </Drawer>
  );
};

export default TwoDrawnRoomHotel;
