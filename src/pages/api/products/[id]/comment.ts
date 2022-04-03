import { ResponseType } from "@/types/index";
import client from "libs/server/client";
import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    body: { contents },
    session: { user },
    query: { id },
  } = req;

  const newComment = await client.comments.create({
    data: {
      user: {
        connect: {
          id: user?.id,
        },
      },
      product: {
        connect: {
          id: +id.toString(),
        },
      },
      contents,
    },
  });

  return res.json({
    ok: true,
    comment: newComment,
  });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handlerFunction: handler,
    isPrivate: true,
  })
);
