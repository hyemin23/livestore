import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface SelectBoxType {
  options: Array<String>;
  register: UseFormRegisterReturn;
  id?: string;
}

const SelectBox: React.FC<SelectBoxType> = ({
  options,
  register,
  id,
  ...props
}) => {
  return (
    <select
      className="w-full rounded-lg border-gray-300"
      defaultValue="FREE"
      defaultChecked={true}
      id={id}
      {...register}
      {...props}
    >
      {options.map((name, idx) => {
        return (
          <option key={idx} value={idx + 1}>
            {name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectBox;
