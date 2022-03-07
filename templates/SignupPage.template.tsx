import { SignupStep } from "@/components/constant/enum.constant";
import { SignupTitleMessages } from "@/components/constant/message.constant";
import TitleHeaderComponent from "@/components/molecules/TitleHeader.component";
import TermConfirmStepComponent from "@/components/organs/TermConfirmStep.component";
import { cls } from "libs";
import React from "react";

interface SignupTemplateProps {
  step: SignupStep;
  confirm: boolean;
  onClickPlus: () => void;
  onClickMinus: () => void;
  setConfirm: (conf: boolean) => void;
  isStepCompleted: object;
}

const SignupPageTemplate = ({
  step = SignupStep.TERM_CONFIRM,
  isStepCompleted,
  confirm,
  setConfirm,
  onClickPlus,
  onClickMinus,
}: SignupTemplateProps) => {
  return (
    <div className="px-9">
      {step === 0 && <TitleHeaderComponent title="" />}

      {/* back button */}
      <div className=" h-16 pt-4 mb-7">
        {step !== 0 && (
          <div
            className={cls(
              `${SignupTitleMessages[step].allowBack ? "visible" : "invisible"}`
            )}
          >
            <button onClick={onClickMinus}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* title info */}
      <div className="mb-14">
        <h2 className="mb-2 text-xl font-medium leading-6  break-all">
          {SignupTitleMessages[step].title}
        </h2>
        <div className="font-normal leading-5  text-sm break-all">
          {SignupTitleMessages[step].description}
        </div>
      </div>

      {/*  */}
      <div>
        {step === SignupStep.TERM_CONFIRM && (
          <TermConfirmStepComponent confirm={confirm} setConfirm={setConfirm} />
        )}
      </div>
    </div>
  );
};

export default SignupPageTemplate;
