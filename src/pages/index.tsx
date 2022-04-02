import useUser from "libs/client/useUser";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import IntroPage from "src/templates/IntroPage";

const Home: NextPage = () => {
  const router = useRouter();
  const { user, isLoading } = useUser();

  if (!isLoading && user) {
    router.push("community");
  }
  return <>{!isLoading && !user && <IntroPage />}</>;
};

export default Home;
