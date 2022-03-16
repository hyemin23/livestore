import client from "libs/server/client";
import withHandler from "libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { nickname, password, phone, email } = req.body;
  let user;

  if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      console.log("Did not find.. so will create");
      user = await client.user.create({
        data: {
          email,
          password,
          phone,
          nickname: nickname
            ? nickname
            : Math.random().toString(36).substring(2, 11),
        },
      });

      console.log("new user : ", user);
    }

    // 이미 존재하는 유저라면 에러 뱉기
    else {
      return res.status(401).end("이미 존재하는 유저입니다.");
    }
  }

  return res.status(200).end();
}

export default withHandler("POST", handler);
