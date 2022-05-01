import { CategoryType } from "@prisma/client";
import client from "libs/server/client";
import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  let CateType: CategoryType;

  if (!!id) {
    console.log("id : ", id);

    const post = await client.posts.findMany({
      include: {
        _count: {
          select: {
            postFav: true,
            postsComments: true,
          },
        },
      },
      where: {
        categories: {
          some: {
            category: {
              name: "FREE",
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
