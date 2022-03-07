import React from "react";
import CheckIcon from "../icons/CheckIcon";
import TermPopupComponent from "./TermPopup.component";

const TermConfirmStepComponent = ({
  confirm,
  setConfirm,
}: {
  confirm: boolean;
  setConfirm: (conf: boolean) => void;
}) => {
  return (
    <div>
      <TermPopupComponent />
      <TermPopupComponent />
      <button>
        <div className="flex items-center justify-start">
          <div className="cursor-pointer border border-gray-500 rounded-full w-9 flex justify-center items-center mr-">
            <CheckIcon color={confirm ? "#fc1150" : "gray"} />
          </div>
          약관 전체 동의
        </div>
      </button>
    </div>
  );
};

export default TermConfirmStepComponent;
