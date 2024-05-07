import { Drawer } from "antd";

type TwoDrawnHotelDescriptionProps = {
  dataDescription: string;
  openDrawnDescription: boolean;
  isClosedDrawnDescription: () => void;
};

const TwoDrawnHotelDescription = ({
  dataDescription,
  openDrawnDescription,
  isClosedDrawnDescription,
}: TwoDrawnHotelDescriptionProps) => {
  return (
    <Drawer
      title="Mô tả khách sạn"
      placement="right"
      size="default"
      open={openDrawnDescription}
      closable={false}
      onClose={isClosedDrawnDescription}
    >
      <p className="text-justify">{dataDescription}</p>
    </Drawer>
  );
};

export default TwoDrawnHotelDescription;
