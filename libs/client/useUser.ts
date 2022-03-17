import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState();
  const router = useRouter();
  useEffect(() => {
    fetch("/api/users/me")
      .then((res) => res.json())
      .then((data) => {
        if (!data.ok) {
          //   뒤로가기 시 back history 제거 404 or 401인 경우 기록 제거
          router.replace("/login ");
        }
        setUser(data);
      });
  }, [router]);

  return user;
}
