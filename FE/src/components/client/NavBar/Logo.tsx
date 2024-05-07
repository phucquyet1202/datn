import { useNavigate } from "react-router-dom";

type LogoProps = {
  url: string;
};

const Logo = ({ url }: LogoProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(url)}
      className="cursor-pointer p-3 text-center md:text-left" // Added text-center for centering on small screens
    >
      <span className="text-2xl italic text-textLight dark:text-textDark">
        MeliaHanoi
      </span>
    </div>
  );
};

export default Logo;
