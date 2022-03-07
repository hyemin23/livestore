import { SignupStep } from "@/components/constant/enum.constant";
import React, { useCallback, useState } from "react";
import SignupPageTemplate from "templates/SignupPage.template";

const SignUp = () => {
  const [step, setStep] = useState<SignupStep>(SignupStep.TERM_CONFIRM);

  const [confirm, setConfirm] = useState<boolean>(false);

  const isStepCompleted = () => ({
    [SignupStep.TERM_CONFIRM]: confirm,
    [SignupStep.PHONE_VALID]: false,
    [SignupStep.USER_INFO]: false,
  });

  const onClickPlus = useCallback(() => {
    setStep((prev) => (prev + 1) as SignupStep);
  }, [step]);

  const onClickMinus = useCallback(() => {
    setStep((prev) => (prev - 1) as SignupStep);
  }, [step]);
  return (
    <SignupPageTemplate
      step={step}
      isStepCompleted={isStepCompleted}
      confirm={confirm}
      setConfirm={setConfirm}
      onClickPlus={onClickPlus}
      onClickMinus={onClickMinus}
    />
  );
};

export default SignUp;
