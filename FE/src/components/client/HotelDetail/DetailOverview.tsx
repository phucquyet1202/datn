import {
  BsChat,
  CiLocationOn,
  AiOutlineLock,
  LiaWalletSolid,
  MdManageHistory,
} from "../../../icons";
import { Container } from "../..";

type DetailOverviewProps = {
  description: string;
};

const DetailOverview = ({ description }: DetailOverviewProps) => {
  const data = [
    { icon: <LiaWalletSolid size={20} />, span: "Giá không thể tốt hơn" },
    { icon: <AiOutlineLock size={20} />, span: "Đặt phòng an toàn" },
    {
      icon: <MdManageHistory size={20} />,
      span: "Quản lý đặt phòng trực tuyến",
    },
    { icon: <CiLocationOn size={20} />, span: "Tiện nghi và vị trí tuyệt vời" },
    { icon: <BsChat size={20} />, span: "Nhân viên nói tiếng Việt & Anh" },
  ];

  return (
    <>
      <Container>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-auto md:w-[70%] text-justify">
            <div className="box-border">
              <p className="text-textLight2nd dark:text-textDark2nd">
                {description}
              </p>
            </div>
          </div>

          <div className="w-30 p-8 rounded-md bg-divideLight dark:bg-divideDark">
            <h6 className="text-uppercase text-base font-bold text-textLight dark:text-textDark">
              Vì sao nên chọn Seven Teen?
            </h6>

            {data.map((item) => (
              <div
                key={item.span}
                className="flex items-center mt-3 text-textLight2nd dark:text-textDark2nd"
              >
                <span className="text-[#002864]">{item.icon}</span>

                <span className="ml-2">{item.span}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default DetailOverview;
