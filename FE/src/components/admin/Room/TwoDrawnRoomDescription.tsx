import { Drawer } from "antd";

type TwoDrawnRoomDescriptionProps = {
  dataDescription: string;
  openDrawnDescription: boolean;
  isClosedDrawnDescription: () => void;
};

const TwoDrawnRoomDescription = ({
  dataDescription,
  openDrawnDescription,
  isClosedDrawnDescription,
}: TwoDrawnRoomDescriptionProps) => {
  return (
    <Drawer
      title="Mô tả phòng"
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

export default TwoDrawnRoomDescription;
