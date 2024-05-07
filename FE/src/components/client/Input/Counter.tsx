import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type CounterProps = {
  title: string;
  subtitle?: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
};

const Counter = ({
  title,
  subtitle,
  value,
  onChange,
  min = 1,
  max,
}: CounterProps) => {
  const onAdd = useCallback(() => {
    if (value === max) return;

    onChange(value + 1);
  }, [onChange, value, max]);

  const onReduce = useCallback(() => {
    if (value === min) return;

    onChange(value - 1);
  }, [onChange, value, min]);

  return (
    <div className="flex flex-row items-center justify-between w-full gap-3">
      <div className="flex flex-col">
        <div className="font-medium text-textLight dark:text-textDark">
          {title}
        </div>
        <div className="font-light text-textLight2nd dark:text-textDark2nd">
          {subtitle}
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <button
          onClick={onReduce}
          className="w-8 h-8 rounded-full border-[1px] border-divideLight dark:border-divideDark flex items-center justify-center text-textLight2nd dark:text-textDark2nd cursor-pointer hover:opacity-80 transition"
        >
          <AiOutlineMinus />
        </button>

        <div className="font-light text-xl text-neutral-600 -mt-1">{value}</div>

        <button
          onClick={onAdd}
          className="w-8 h-8 rounded-full border-[1px] border-divideLight dark:border-divideDark flex items-center justify-center text-textLight2nd dark:text-textDark2nd cursor-pointer hover:opacity-80 transition"
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default Counter;
