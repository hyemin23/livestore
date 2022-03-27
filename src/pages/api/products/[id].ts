import client from "libs/server/client";
import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const product = await client.product.findUnique({
    where: {
      id: Number(id.toString()),
    },
  });
  res.json({
    ok: true,
    product,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handlerFunction: handler,
    isPrivate: false,
  })
);
