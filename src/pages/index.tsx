import useUser from "libs/client/useUser";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import IntroPage from "src/templates/IntroPage";

const Home: NextPage = () => {
  console.log("여기 거치나 ?");
  const router = useRouter();
  const [user, loading] = useUser();
  console.log(user);
  // const { profile } = user;
  // console.log("user index : ", user);

  // if (loading) {
  //   router.push("/community");
  // }

  // 모든 페이지는 여기서 시작됭야함
  return !loading ? <IntroPage /> : <></>;
};

export default Home;
