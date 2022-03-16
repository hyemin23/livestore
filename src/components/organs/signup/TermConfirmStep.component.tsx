import { cls } from "libs";
import React, { useCallback, useEffect } from "react";
import useVisibleHook from "src/hooks/useVisible.hook";
import Privacy from "../../atoms/terms/Privacy";
import Require from "../../atoms/terms/Require";
import CheckIcon from "../../icons/CheckIcon";
import TermCheckButtonComponent from "../../molecules/TermCheckButton.component";
import TermPopupComponent from "./TermPopup.component";

const TermConfirmStepComponent = ({
  confirm,
  setConfirm,
}: {
  confirm: boolean;
  setConfirm: (conf: any) => void;
}) => {
  // 필수 이용약관
  const [
    requireConfirm,
    setRequireConfirm,
    setRequiremNotConfirmed,
    toggleRequireConfirmed,
  ] = useVisibleHook(false);

  // 개인정보
  const [
    privacyConfirmed,
    setPrivacyConfirmed,
    setPrivacyNotConfirmed,
    togglePrivacyConfirmed,
  ] = useVisibleHook(false);

  // 이용약관 팝업
  const [termVisible, setRequireVisible, setTermInvisible] =
    useVisibleHook(false);

  // 개인정보 팝업
  const [privacyVisible, setPrivacyVisible, setPrivacyInvisible] =
    useVisibleHook(false);

  const onClickConfirmAll = useCallback(() => {
    if (!confirm) {
      setRequireConfirm();
      setPrivacyConfirmed();
      setConfirm(true);
    } else {
      setRequiremNotConfirmed();
      setPrivacyNotConfirmed();
      setConfirm(false);
    }
  }, [
    confirm,
    setConfirm,
    setPrivacyConfirmed,
    setPrivacyNotConfirmed,
    setRequireConfirm,
    setRequiremNotConfirmed,
  ]);

  useEffect(() => {
    if (requireConfirm && privacyConfirmed && !confirm) {
      setConfirm(true);
    } else if (!requireConfirm || !privacyConfirmed) {
      setConfirm(false);
    } else {
      setConfirm(true);
    }
  }, [requireConfirm, privacyConfirmed, confirm, setConfirm]);

  return (
    <div className="space-y-5">
      <TermPopupComponent
        Invisible={setTermInvisible}
        visible={termVisible}
        popupTitle="이용약관"
      >
        <Require />
      </TermPopupComponent>

      <TermPopupComponent
        visible={privacyVisible}
        Invisible={setPrivacyInvisible}
        popupTitle="개인정보처리방침"
      >
        <Privacy />
      </TermPopupComponent>

      <button onClick={onClickConfirmAll}>
        <div className="flex items-center justify-start">
          <div
            className={cls(
              `cursor-pointer border border-gray-500 rounded-full w-9 flex justify-center items-center mr-`,
              confirm ? `bg-white` : "bg-white"
            )}
          >
            <CheckIcon color={confirm ? `blue` : "white"} />
          </div>
          <span className="pl-4">약관 전체 동의</span>
        </div>
      </button>

      <TermCheckButtonComponent
        confirm={requireConfirm}
        setConfirm={toggleRequireConfirmed}
        title="(필수) 이용약관"
        setPopup={setRequireVisible}
      />

      <TermCheckButtonComponent
        confirm={privacyConfirmed}
        setConfirm={togglePrivacyConfirmed}
        title="(필수) 개인정보 처리방침"
        setPopup={setPrivacyVisible}
      />
    </div>
  );
};

export default TermConfirmStepComponent;
