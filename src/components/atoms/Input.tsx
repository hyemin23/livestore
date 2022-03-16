import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  kind?: "text" | "phone" | "price";
  type: string;
  register: UseFormRegisterReturn;
  required: boolean;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  kind = "text",
  register,
  type,
  required,
  placeholder = "",
  ...rest
}) => {
  return (
    <div>
      <label
        className="mb-1 block text-sm font-medium text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>

      {kind === "text" ? (
        <div className="rounded-md relative flex  items-center shadow-sm">
          <input
            placeholder={placeholder}
            id={name}
            required={required}
            type={type}
            {...register}
            {...rest}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary
            "
          />
        </div>
      ) : null}
      {kind === "price" ? (
        <div className="rounded-md relative flex  items-center shadow-sm">
          <div className="absolute left-0 pointer-events-none pl-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            {...rest}
            placeholder={placeholder}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary
            "
          />
          <div className="absolute right-0 pointer-events-none pr-3 flex items-center">
            <span className="text-gray-500">KRW</span>
          </div>
        </div>
      ) : null}
      {kind === "phone" ? (
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm select-none">
            +82
          </span>
          <input
            id={name}
            required={required}
            {...register}
            {...rest}
            type={type}
            placeholder={placeholder}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
      ) : null}
    </div>
  );
};

export default React.memo(Input);
