export type TitleMessageType = {
  title: string;
  description: string;
  button?: string | boolean;
  allowBack?: boolean;
};
export const SignupTitleMessages: TitleMessageType[] = [
  {
    title: "뷰티용이 처음이신가요?",
    description: "약관에 동의하시고 뷰티용(Zzic9)를 이용해보세요!",
    button: "다음 단계로",
    allowBack: true,
  },
  {
    title: "회원가입을 완료해주세요!",
    description: "회원가입을 완료한 후 뷰티용을 사용해 보아요!",
    allowBack: true,
  },
  {
    title: "마지막 단계예요!",
    description: "프로필 사진과 닉네임을 설정해주세요.",
    button: "뷰티용 시작하기",
    allowBack: true,
  },
  {
    title: "",
    description: "",
    button: false,
    allowBack: false,
  },
];
