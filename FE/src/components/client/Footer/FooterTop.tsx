import { Logo } from "../..";

const FooterTop = () => {
  const rules = [
    { url: "/general-terms", label: "Điều khoản chung" },
    {
      url: "/privacy-policy",
      label: "Chính sách quyền riêng tư",
    },
    {
      url: "/complaint-resolution-policy",
      label: "Chính sách giải quyết khiếu nại",
    },
  ];

  const regulations = [
    { url: "/general-rules", label: "Quy định chung" },
    {
      url: "/regulations-booking-information",
      label: "Quy định về xác nhận thông tin đặt phòng",
    },
  ];

  return (
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <Logo url="/" />
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-textLight uppercase dark:text-textDark">
            Về MeliaHanoi
          </h2>
          <ul className="text-textLight2nd dark:text-textDark2nd font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline ">
                Cách đặt chỗ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Liên hệ chúng tôi
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-textLight dark:text-textDark uppercase">
            ĐIỀU KHOẢN
          </h2>
          <ul className="text-textLight2nd dark:text-textDark2nd font-medium">
            {rules.map((item) => (
              <li className="mb-4" key={item.label}>
                <a target="_blank" href={item.url} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-textLight uppercase dark:text-textDark">
            QUY ĐỊNH
          </h2>
          <ul className="text-textLight2nd dark:text-textDark2nd font-medium">
            {regulations.map((item) => (
              <li className="mb-4" key={item.label}>
                <a target="_blank" href={item.url} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
