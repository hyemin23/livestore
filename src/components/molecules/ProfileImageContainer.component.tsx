import Image from "next/image";
import React, { useMemo, useState } from "react";
import { Resource } from "src/models/dto/api-response";
import { FolderPathType } from "../constant/enum.constant";
import DefaultProfileIcon from "../icons/DefaultProfileIcon";
import SpinnerIcon from "../icons/SpinnerIcon";
import UploadComponent from "./Upload.component";

interface ProfileImageProps {
  imgSrc?: string;
  onUploadImage: (e: Resource[]) => void;
}

ProfileImageContainerComponent.defaultProps = {
  imgSrc: "",
  onUploadImage: null,
};

function ProfileImageContainerComponent({
  imgSrc = "",
  onUploadImage,
}: ProfileImageProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const image = useMemo(() => {
    if (imgSrc)
      return <Image className="h-[56px]" src={imgSrc} alt="프로필 이미지" />;

    return <DefaultProfileIcon />;
  }, [imgSrc, loading]);

  return (
    <>
      {/* profile image */}
      {loading ? (
        <SpinnerIcon />
      ) : (
        <>
          <div className="border-4 rounded-full flex items-center justify-center overflow-hidden">
            {image}
          </div>
          <UploadComponent
            onUploadImage={onUploadImage}
            folder={FolderPathType.PROFILE}
            setLoading={setLoading}
          />
        </>
      )}
    </>
  );
}

export default ProfileImageContainerComponent;
