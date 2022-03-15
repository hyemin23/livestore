import { cls } from "libs";
import React from "react";
import CheckIcon from "../icons/CheckIcon";
import SmallRightArrowIcon from "../icons/SmallRightArrow.icon";

const TermCheckButtonComponent = ({
  confirm,
  title,
  setConfirm,
  setPopup,
}: {
  confirm: boolean;
  title: string;
  setConfirm: () => void;
  setPopup: () => void;
}) => {
  return (
    <div className="flex items-center justify-center pl-4" onClick={setConfirm}>
      <div className="flex items-center justify-start">
        <div
          className={cls(
            `cursor-pointer border border-gray-500 rounded-full w-9 flex justify-center items-center mr-`,
            confirm ? `bg-white` : "bg-white"
          )}
        >
          <CheckIcon color={confirm ? `blue` : "white"} />
        </div>
      </div>

      <button
        className="flex justify-between items-center bg-transparent border-0 w-full text-center cursor-pointer"
        onClick={setPopup}
      >
        <span className="pl-4">{title}</span>
        <SmallRightArrowIcon />
      </button>
    </div>
  );
};

export default TermCheckButtonComponent;
