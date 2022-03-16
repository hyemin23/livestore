import withHandler from "libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { nickname, password, phone, email } = req.body;
  const payload = phone ? { phone } : { email };

  //   const user = await client.user.upsert({
  //     where: {
  //       ...payload,
  //     },
  //     create: {
  //       ...(nickname
  //         ? { nickname }
  //         : { nickname: Math.random().toString(36).substring(2, 11) }),
  //       password,

  //       ...(email && {
  //         email,
  //       }),
  //       ...(phone && {
  //         phone,
  //       }),
  //     },
  //     update: {},
  //   });

  return res.status(401).end("이미 존재하는 유저입니다.");

  return res.status(200).end();
}

export default withHandler("POST", handler);
