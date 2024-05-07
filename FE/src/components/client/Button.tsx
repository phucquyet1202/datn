import { IconType } from "react-icons";

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
  icon?: IconType;
};

const Button = ({
  label,
  onClick,
  disabled,
  outline,
  icon: Icon,
}: ButtonProps) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`relative flex items-center justify-center w-full h-10 rounded-md mt-4 transition ease-in-out duration-100 text-textLight dark:text-textDark hover:bg-blue-500 dark:hover:bg-blue-500 disabled:opacity-70 disabled:cursor-not-allowed
        ${
          outline
            ? "bg-divideLight dark:bg-divideDark"
            : "bg-divideLight dark:bg-divideDark"
        }
        `}
      >
        {Icon && <Icon size={24} className="absolute left-4 top-2" />}

        {label}
      </button>
    </>
  );
};

export default Button;
