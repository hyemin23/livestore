import Input from "src/components/atoms/Input";
import { registAPI } from "apis/user";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface basicProps {
  onClickPlus: () => void;
}
interface JoinForm {
  email: string;
  password: string;
  phone: string;
  passwordCheck: string;
}
const BasicUserInfoComponent = ({ onClickPlus }: basicProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const password = useRef("");
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinForm>();

  password.current = watch("password");

  const onValid = (data: JoinForm) => {
    // password 빼고 보내야하는데 + 암호화 에어비앤비 참고하기
    setLoading(true);

    registAPI(data)
      .then(() => {
        onClickPlus();
      })
      .catch((error) => {
        console.error(error.response.data);
        return alert(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)} className="space-y-4">
        <div>
          <Input
            label="이메일"
            type="email"
            name="email"
            required
            register={register("email")}
            placeholder="이메일을 입력해주세요."
          />
          {errors.email && errors.email.type === "required" && (
            <p className="text-red-500">필수항목입니다.</p>
          )}
        </div>

        <div>
          <Input
            label="비밀번호"
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            required
            register={register("password", {
              minLength: {
                value: 4,
                message: "5글자 이상 입력해주세요.",
              },
            })}
          />
          {errors.password && errors.password.type === "minLength" && (
            <p className="text-red-500 mt-2">{errors.password.message}</p>
          )}
        </div>

        <div>
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            name="passwordCheck"
            required
            register={register("passwordCheck", {
              validate: (value) => {
                return value === password.current;
              },
            })}
          />
          {errors.passwordCheck && errors.passwordCheck.type === "validate" && (
            <p className="text-red-500 mt-2">비밀번호가 일치하지 않습니다.</p>
          )}
        </div>

        <div>
          <Input
            placeholder="전화번호를 입력해주세요."
            label="전화번호"
            type="phone"
            name="phone"
            required
            register={register("phone")}
          />
        </div>
        <div className="px-2 pb-2 fixed bottom-0 right-0 left-0 w-full bg-white text-center">
          <button
            type="submit"
            className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            가입하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicUserInfoComponent;
