import { CategoryType } from "@prisma/client";
import client from "libs/server/client";
import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!!id) {
    let cateName: CategoryType = "FREE";
    switch (Number(id)) {
      //   자유 게시판
      case 1:
        cateName = "FREE";
        break;
      // 매장 평가
      case 2:
        cateName = "SCORE";
        break;
      // 구인 구직
      case 3:
        cateName = "RECURIT";
        break;
      default:
        cateName = "FREE";
        break;
    }
    const post = await client.posts.findMany({
      where: {
        categories: {
          some: {
            category: {
              name: cateName,
            },
          },
        },
      },
    });

    return res.json({
      ok: true,
      post,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handlerFunction: handler,
    isPrivate: true,
  })
);
