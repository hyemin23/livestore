import useUser from "libs/client/useUser";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import IntroPage from "src/templates/IntroPage";

const Home: NextPage = (props) => {
  const router = useRouter();
  const { user, isLoading } = useUser();

  if (!isLoading && user) {
    router.push("community");
  }
  // 모든 페이지는 여기서 시작됭야함
  // "/" 루트로 들어오기 때문에 여기서 로그인 된 상태라면 main page로
  // 로그인 안 된 상태라면 login page로 가도록 만들어준다.
  // 로딩이 끝난 상태에서 user가 있으면 main page 그게 아니면 회원가입 페이지로
  // 로그인이 안 된 상태라면 Intro page로, 로그인이 된 상태라면 community page로

  return <>{!isLoading && !user && <IntroPage />}</>;
};

export default Home;
