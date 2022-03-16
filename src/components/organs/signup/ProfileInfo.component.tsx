import ProfileImageContainerComponent from "@/components/molecules/ProfileImageContainer.component";
import React, { useCallback, useState } from "react";
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
    handleSubmit,
  } = useForm<ProfileForm>();

  const [nickname, setNickname] = useState<string>("");

  const onUploadImage = useCallback((uploaded: Resource[]) => {
    // 해당 유저에 profile path 넣어주기
  }, []);

  const onValid = (data: any) => {
    // 해당 유저 email에 nickname 넣기
    // redux를 써야하나
  };

  const onChnageInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNickname(e.target.value);
    },
    [nickname]
  );

  return (
    <div>
      <div className="relative flex flex-col items-center justify-center">
        <ProfileImageContainerComponent onUploadImage={onUploadImage} />

        {/* nickname */}
        {/* 이메일을 들고 있어야 어떤 유저인지 파악할 수 있음. */}
        <div className="mt-10">
          <form onSubmit={handleSubmit(onValid)}>
            <Input
              label="닉네임"
              type="nickname"
              name="nickname"
              required
              onChange={onChnageInput}
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
            {errors.nickname && errors.nickname.type && (
              <p className="text-red-500">{errors.nickname.message}</p>
            )}

            <div className="px-2 pb-2 fixed bottom-0 right-0 left-0 w-full bg-white text-center">
              <button
                type="submit"
                disabled={!nickname}
                className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                완료
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfoComponent;
