import { ResponseType } from "@/types/index";
import bcrypt from "bcryptjs";
import client from "libs/server/client";
import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { password: inputPw, email } = req.body;

  if (email) {
    const existUser = await client.user.findUnique({
      where: {
        email,
      },
    });

    if (!existUser) res.status(404).end();
    else {
      const { password, id } = existUser;

      const isPAsswordMatched = bcrypt.compareSync(inputPw, password);

      if (!isPAsswordMatched) {
        return res.status(401).json({
          ok: false,
          message: "아이디 혹은 비밀번호를 확인해주세요.",
        });
      }

      if (isPAsswordMatched) {
        // session 저장
        req.session.user = {
          id,
        };

        await req.session.save();

        return res.status(200).json({
          ok: true,
        });
      }
    }
  }
}

export default withApiSession(
  withHandler({
    method: "POST",
    handlerFunction: handler,
    isPrivate: false,
  })
);
