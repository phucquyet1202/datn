import { Container, Search } from "../..";
import { useState, useEffect } from "react";

const Top = () => {
  const image = [
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/498024122.jpg?k=9cee0dae48e8b9e5406974666fbbe4aea43812be57da568d3f6de93f68654b2d&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/498053205.jpg?k=14d4a832939d99f29e912e76450e8b9fdf3a961a285cc161544dd3f62042bcbe&o=&hp=1",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <Container>
        <div className="flex flex-row mx-auto max-w-7xl ">
          <div className="w-1/2 flex flex-col justify-center items-center p-4">
            <h1 className="md:text-[3.2rem] text-[2rem] font-semibold mt-[1rem] mb-[2rem] text-textLight dark:text-textDark select-none">
              Tạo dấu ấn trong kỳ nghỉ của bạn với
              <br className="block sm:hidden" />
              <span className="text-neutral-400"> MeliaHanoi</span>
            </h1>

            <p className="text-[1.1rem] leading-[2rem] text-textLight2nd dark:text-textDark2nd select-none">
              Choáng ngợp trước vẻ đẹp của thành phố khi ngắm nhìn từ bể bơi vô
              cực của INNSiDE Kuala Lumpur Cheras. Nhận ưu đãi giảm đến 15% hoặc
              20% cho thành viên MeliaHanoi.
            </p>
          </div>

          <div className="w-1/2 overflow-hidden">
            <div className="flex justify-center items-center ">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className={`w-full transition-transform transform ${
                    index === 1
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
                  style={{
                    transition: "transform 1s, opacity 1s",
                    flex: " 0 0 100%",
                  }}
                >
                  <img
                    className="h-[600px] w-full object-cover dark:border-divideDark"
                    src={image[(currentImageIndex + index) % image.length]}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr />

        <div className="flex-col justify-center items-center p-4 mx-auto max-w-7xl">
          <h1 className="md:text-[2.2rem] text-[2rem] font-mono mt-[1rem] text-textLight dark:text-textDark select-none text-center">
            Một trải nghiệm thú vị và đáng nhớ ở trung tâm của Hà Nội
            <br className="block sm:hidden" />
            {/* <span class="text-neutral-400"> MeliaHanoi</span> */}
          </h1>
          <p className="text-[1.1rem] leading-[2rem] text-textLight2nd dark:text-textDark2nd select-none text-center">
            Bạn sẽ không hối hận khi chọn khách sạn tiện nghi và có vị trí tốt
            này khi đến thăm thủ đô của Việt Nam. Với một trung tâm thành phố
            tuyệt vời với vị trí đắc địa, khách sạn hiện đại này cung cấp những
            tiện nghi hạng nhất và một dịch vụ đặc biệt. Một cơ hội tuyệt vời để
            khám phá một trong những Những điểm đến thú vị tại Hà Nội.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Top;
