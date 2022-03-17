import { ResponseType } from "@/types/axiosType";
import client from "libs/server/client";
import withHandler from "libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { nickname, password, phone, email } = req.body;
  const user = phone ? { phone } : { email };

  if (email) {
    const existUser = await client.user.findUnique({
      where: {
        email,
      },
    });

    // 유저가 존재하는 경우 로그인
    if (!!existUser) {
      // const token = await client.token.create({
      //   data: {
      //     payload,
      //     user: {
      //       create: {
      //         email,
      //         phone,
      //         nickname: "Anonymous",
      //         password: "1234",
      //       },
      //     },
      //   },
      // });
    } else {
      return res.status(400).json({
        ok: false,
        message: "아이디 비밀번호를 확인해주세요.",
      });
    }
  }

  return res.status(200).json({
    ok: true,
  });
}

export default withHandler("POST", handler);
