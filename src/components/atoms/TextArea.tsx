import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps {
  label?: string;
  name?: string;
  register: UseFormRegisterReturn;
  [key: string]: any;
}

const TextArea = ({ label, name, register, ...rest }: TextAreaProps) => {
  return (
    <>
      {label ? (
        <label htmlFor={name} className="">
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        {...register}
        className="shadow-sm w-full focus:ring-primary rounded-md border-gray-300 focus:border-primary"
        rows={4}
        {...rest}
      />
    </>
  );
};

export default TextArea;
