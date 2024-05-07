import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="success"
      title="Thanh toán thành công"
      subTitle="Bạn đã thanh toán đơn hàng thành công!"
      extra={<Button onClick={() => navigate("/")}>Trở về</Button>}
    />
  );
};

export default Success;
