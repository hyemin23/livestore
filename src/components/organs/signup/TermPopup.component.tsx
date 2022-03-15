import { cls } from "libs";
import React from "react";
import PopupHeaderTitleComponent from "../../molecules/PopupHeaderTitle.component";

const TermPopupComponent = ({
  visible = false,
  popupTitle,
  Invisible,
  children,
}: {
  visible: boolean;
  popupTitle: string;
  Invisible: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cls(
        `w-full h-screen fixed left-0 right-0 top-0 bottom-0 z-50 bg-white py-10 px-10 overflow-y-auto`,
        visible ? "block" : "hidden"
      )}
    >
      <PopupHeaderTitleComponent
        popupTitle={popupTitle}
        Invisible={Invisible}
      />
      <div>{children}</div>
    </div>
  );
};

export default TermPopupComponent;
