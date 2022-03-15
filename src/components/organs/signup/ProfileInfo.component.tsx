import ProfileImageContainerComponent from "@/components/molecules/ProfileImageContainer.component";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import Input from "src/components/atoms/Input";
import { Resource } from "src/models/dto/api-response";

interface ProfileForm {
  nickname: string;
  avatar: string;
}

function ProfileInfoComponent() {
  const {
    register,
    formState: { errors },
  } = useForm<ProfileForm>();

  const onUploadImage = useCallback((uploaded: Resource[]) => {}, []);

  return (
    <div>
      <div className="relative flex flex-col items-center justify-center">
        <ProfileImageContainerComponent onUploadImage={onUploadImage} />

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
}

export default ProfileInfoComponent;
