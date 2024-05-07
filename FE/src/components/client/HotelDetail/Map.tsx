const Map = () => {
  return (
    <div className=" mx-auto xl:px-20 md:px-10 sm:px-2 p-5 bg-white dark:bg-[#111315]">
      <h1 className="font-sans text-[24px] font-bold leading-7 uppercase my-10 dark:text-white">
        Vị trí của khách sạn
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.980454166154!2d105.81632121898227!3d21.022778414009323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1702559388806!5m2!1svi!2s"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
