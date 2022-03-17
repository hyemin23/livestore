import { ResponseType } from "@/types/axiosType";
import bcrypt from "bcryptjs";
import { withIronSessionApiRoute } from "iron-session/next";
import client from "libs/server/client";
import withHandler from "libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

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

      req.session.user = {
        id,
      };
      // session 저장
      await req.session.save();
      const isPAsswordMatched = bcrypt.compareSync(inputPw, password);

      if (isPAsswordMatched) {
        return res.status(200).json({
          ok: true,
        });
      }
    }
  }
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "zzic9",
  password: process.env.IRON_KEY!,
});
