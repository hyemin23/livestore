import { useQuery } from "react-query";
import { loadMyInfoAPI } from "./../../apis/user";

export default function useUser() {
  const { data, error, isLoading } = useQuery("loadInfo", loadMyInfoAPI);

  //   뒤로가기 시 back history 제거 404 or 401인 경우 기록 제거
  // router.replace("/login ");

  return [data, isLoading];
}
