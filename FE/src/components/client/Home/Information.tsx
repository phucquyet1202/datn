const Information = () => {
  return (
    <div className="flex flex-row mx-auto max-w-7xl select-none">
      <div className="w-1/2 flex flex-col justify-center items-center p-4">
        <h3 className="md:text-[3rem] text-[2rem] font-semibold mt-[1rem] mb-[2rem] text-textLight2nd dark:text-textDark2nd ">
          MeliaHanoi
          <br className="block sm:hidden" />
        </h3>
        <p className="text-[1.1rem] leading-[2rem] text-textLight dark:text-textDark">
          Mở cửa đón khách vào hè năm 2023, MeliaHanoi đầu tiên tại Việt Nam hứa
          hẹn mang đến nét tinh tế đẳng cấp mới cho Hà Nội. MeliaHanoi có bể bơi
          riêng hòa vào khung cảnh thiên nhiên, nhà hàng Hispania đẳng cấp đầu
          tiên tại châu Á cùng dịch vụ chăm sóc sức khỏe tại suối nước nóng và
          phòng xông hơi.
        </p>
      </div>

      <div className="w-1/2 overflow-hidden">
        <div className="flex justify-center items-center">
          <img
            src="https://dam.melia.com/melia/file/kJcT26dQQRooAoGt5FxD.jpg?im=RegionOfInterestCrop=(1020,765),regionOfInterest=(1771.5,1181.5)"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Information;
