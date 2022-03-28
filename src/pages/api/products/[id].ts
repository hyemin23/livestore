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
    include: {
      user: {
        select: {
          id: true,
          nickname: true,
          avatar: true,
        },
      },
    },
  });

  // 검색 품목 배열화
  const terms = product?.name.split(" ").map((word) => ({
    name: {
      contains: word,
    },
  }));

  // 유사 품목 키워드 나눠서 다 찾기
  const relatedProducts = await client.product.findMany({
    where: {
      OR: terms,
      AND: {
        id: {
          not: product?.id,
        },
      },
    },
  });

  res.json({
    ok: true,
    product,
    relatedProducts,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handlerFunction: handler,
    isPrivate: false,
  })
);
