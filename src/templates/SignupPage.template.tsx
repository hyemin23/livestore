import { SignupStep } from "src/components/constant/enum.constant";
import { SignupTitleMessages } from "src/components/constant/message.constant";
import LeftArrowIcon from "src/components/icons/LeftArrowIcon";
import TitleHeaderComponent from "src/components/molecules/TitleHeader.component";
import BasicUserInfoComponent from "src/components/organs/signup/BasicUserInfo.component";
import ProfileInfoComponent from "src/components/organs/signup/ProfileInfo.component";
import TermConfirmStepComponent from "src/components/organs/signup/TermConfirmStep.component";
import { cls } from "libs";
import React from "react";

interface SignupTemplateProps {
  step: SignupStep;
  confirm: boolean;
  onClickPlus: () => void;
  onClickMinus: () => void;
  setConfirm: (conf: boolean) => void;
  isStepCompleted: any;
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
      {/* arrow prev header */}
      {step === 0 && <TitleHeaderComponent title="" />}

      {/* back button */}
      <div className=" h-16 pt-10 mb-7">
        {step !== 0 && (
          <div
            className={cls(
              `${SignupTitleMessages[step].allowBack ? "visible" : "invisible"}`
            )}
          >
            <button onClick={onClickMinus}>
              <LeftArrowIcon />
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

      <div>
        {/* 약관동의 */}
        {step === SignupStep.TERM_CONFIRM && (
          <TermConfirmStepComponent confirm={confirm} setConfirm={setConfirm} />
        )}

        {/* 기본정보 입력 */}
        {step === SignupStep.USER_INFO && (
          <BasicUserInfoComponent onClickPlus={onClickPlus} />
        )}
        {/* 추가정보 */}
        {step === SignupStep.PROFILE && <ProfileInfoComponent />}
      </div>

      {/* footer */}
      {step !== 1 && SignupTitleMessages[step].button && (
        <div className="px-2 pb-2 fixed bottom-0 right-0 left-0 w-full bg-white text-center">
          <button
            type="button"
            className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!isStepCompleted[step]}
            onClick={onClickPlus}
          >
            <span className="text-white text-lg">
              {SignupTitleMessages[step].button}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SignupPageTemplate;
