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
    query: { id },
    session: { user },
  } = req;

  // findUnique는 unique 필드만 쿼리할 수 있기 때문에 fundUnique는 쓸 수 없음 fav model은 unique filed가 없음
  // 좋아요가 있는 상품 찾기
  const alreadyExists = await client?.fav.findFirst({
    where: {
      productId: +id.toString(),
      userId: user?.id,
    },
  });

  // 좋아요가 있다면 해당 상품 좋아요 제rj
  if (alreadyExists) {
    await client.fav.delete({
      where: {
        id: alreadyExists.id,
      },
    });
  }
  // 존재하지 않으면 생성
  else {
    await client.fav.create({
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
      },
    });
  }
  res.json({ ok: true });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handlerFunction: handler,
  })
);
