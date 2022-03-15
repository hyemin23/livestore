import Input from "@/components/atoms/Input";
import DefaultProfileIcon from "@/components/icons/DefaultProfileIcon";
import SpinnerIcon from "@/components/icons/SpinnerIcon";
import UploadComponent from "@/components/molecules/Upload.component";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

interface ProfileForm {
  nickname: string;
  avatar: string;
}
const ProfileInfoComponent = ({ imgSrc = "" }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
  } = useForm<ProfileForm>();

  const image = useMemo(() => {
    if (imgSrc)
      return <img className="h-[56px]" src={imgSrc} alt="프로필 이미지" />;

    return <DefaultProfileIcon />;
  }, [imgSrc, loading]);

  return (
    <div>
      <div className="relative flex flex-col items-center justify-center">
        {/* profile image */}
        {loading ? (
          <SpinnerIcon />
        ) : (
          <>
            <div className="border-4 rounded-full flex items-center justify-center overflow-hidden">
              {image}
            </div>
            <UploadComponent
              // folder={FolderPathType.PROFILE}
              setLoading={setLoading}
            />
          </>
        )}
        {/* nickname */}
        <div className="mt-10">
          <Input
            label="닉네임"
            type="nickname"
            name="nickname"
            required
            register={register("nickname", {
              minLength: {
                value: 2,
                message: "2글자 이상 입력해주세요.",
              },
              maxLength: {
                value: 7,
                message: "7글자를 넘을 수 없습니다.",
              },
            })}
            placeholder="닉네임을 입력해주세요."
          />
          {errors.nickname && errors.nickname.type === "required" && (
            <p className="text-red-500">필수항목입니다.</p>
          )}
          {errors.nickname && errors.nickname.type === "minLength" && (
            <p className="text-red-500">{errors.nickname.message}</p>
          )}
          {errors.nickname && errors.nickname.type === "maxLength" && (
            <p className="text-red-500">{errors.nickname.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoComponent;
