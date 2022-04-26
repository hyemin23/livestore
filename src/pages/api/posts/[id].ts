import client from "libs/server/client";
import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, user } = req.query;

  if (!!id) {
    const postItems = await client.posts.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        user: {
          select: {
            nickname: true,
          },
        },
        postsComments: {
          select: {
            id: true,
            contents: true,
            updatedAt: true,
            user: {
              select: {
                nickname: true,
                id: true,
              },
            },
          },
        },

        _count: {
          select: {
            postsComments: true,
            PostFav: true,
          },
        },
      },
    });

    return res.json({
      ok: true,
      postItems,
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
