import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";

export default function useUser() {
  const { data, error, isLoading }: any = useQuery("loadInfo");
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      //   뒤로가기 시 back history 제거 404 or 401인 경우 기록 제거
      router.replace("/community");
    }
  }, [data, router]);

  return { user: data?.profile, isLoading };
}
