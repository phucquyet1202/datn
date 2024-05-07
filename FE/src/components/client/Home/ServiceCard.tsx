type ServiceCardProps = {
  url: string;
  title: string;
  desc: string;
};

const ServiceCard = ({ url, title, desc }: ServiceCardProps) => {
  return (
    <>
      <div className=" border-r-divideLight dark:border-r-divideDark rounded-[0.5rem]">
        <div className="">
          <img src={url} alt="Service" className="w-full" />
        </div>

        <h5 className="text-[1.1rem] font-medium text-textLight dark:text-textDark">
          {title}
        </h5>

        <p className="text-sm text-textLight2nd dark:text-textDark2nd">
          {desc}
        </p>
      </div>
    </>
  );
};

export default ServiceCard;
