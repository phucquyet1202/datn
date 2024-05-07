import { IconType } from "react-icons";

type MenuItemItemProps = {
  label: string;
  icon?: IconType;
  onClick: () => void;
};

const MenuItem = ({ label, icon: Icon, onClick }: MenuItemItemProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className="flex justify-start items-center gap-3 px-4 py-3 w-full transition font-semibold cursor-pointer text-textLight2nd dark:text-textDark2nd hover:bg-backgroundLight dark:hover:bg-backgroundDark"
      >
        {Icon && <Icon size={16} />}

        {label}
      </button>
    </>
  );
};

export default MenuItem;
