import { ConfigType } from "@/types/index";
import { NextApiRequest, NextApiResponse } from "next";

export default function withHandler({
  method,
  isPrivate = true,
  handlerFunction,
}: ConfigType) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<any> {
    if (req.method !== method) {
      return res.status(405).end();
    }

    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, message: "로그인을 해주세요." });
    }

    try {
      await handlerFunction(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
