import { cls } from "libs";

interface ButtonProps {
  large?: boolean;
  text?: string;
  [key: string]: any;
  children?: React.ReactNode;
}

export default function Button({
  large = false,
  onClick,
  text,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cls(
        "w-full mt-6  py-2 px-4 border-transparent border border-gray-300 text-primary rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:outline-none hover:bg-primary  hover:text-white disabled:hover:bg-white disabled:bg-slate-50 disabled:cursor-not-allowed",
        large ? "py-3 text-base" : "py-2 text-sm "
      )}
    >
      {text && text}
      {children}
    </button>
  );
}
