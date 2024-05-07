import { Drawer, Space, Tag } from "antd";

import { IAmenities } from "../../../interface";

type TwoDrawnHotelAmenitiesProps = {
  dataAmenities: IAmenities[];
  openDrawnAmenities: boolean;
  isClosedDrawnAmenities: () => void;
};

const TwoDrawnHotelAmenities = ({
  dataAmenities,
  openDrawnAmenities,
  isClosedDrawnAmenities,
}: TwoDrawnHotelAmenitiesProps) => {
  return (
    <Drawer
      title="Thông tin tiện nghi"
      placement="right"
      size="default"
      open={openDrawnAmenities}
      closable={false}
      onClose={isClosedDrawnAmenities}
    >
      {dataAmenities && dataAmenities.length > 0 ? (
        <Space direction="vertical" size={"middle"}>
          {dataAmenities.map((item, index: number) => (
            <Space key={item.name} direction="vertical">
              <div>
                {index + 1}. {item.name}
              </div>

              <div>
                <Space direction="vertical">
                  {item.features &&
                    item.features.map((it) => (
                      <Space key={it.name}>
                        -{it.name}
                        {it.surcharge && <Tag>Phụ phí</Tag>}
                      </Space>
                    ))}
                </Space>
              </div>
            </Space>
          ))}
        </Space>
      ) : (
        "Không có thông tin tiện nghi"
      )}
    </Drawer>
  );
};

export default TwoDrawnHotelAmenities;
