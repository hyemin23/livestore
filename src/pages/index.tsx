import useUser from "libs/client/useUser";
import type { NextPage } from "next";
import IntroPage from "src/templates/IntroPage";

const Home: NextPage = () => {
  const user = useUser();
  console.log("user index : ", user);

  return <IntroPage />;
};

export default Home;
