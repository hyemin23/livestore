import { ResponseType } from "@/types/index";
import client from "libs/server/client";
import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  // 게시글 조회 (타입별 조회)
  if (req.method === "GET") {
    const commonProps: any = {
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        _count: {
          select: {
            postsComments: true,
            postFav: true,
          },
        },
      },
    };

    const freePosts = await client.posts.findMany({
      ...commonProps,
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

    const jobPosts = await client.posts.findMany({
      ...commonProps,
      where: {
        categories: {
          some: {
            category: {
              name: "RECURIT",
            },
          },
        },
      },
    });

    const recuritPosts = await client.posts.findMany({
      ...commonProps,
      where: {
        categories: {
          some: {
            category: {
              name: "SCORE",
            },
          },
        },
      },
    });

    return res.json({
      ok: true,
      posts: {
        freePosts,
        jobPosts,
        recuritPosts,
      },
    });
  }

  // POST
  const {
    body: { cateType, title, description },
    session: { user },
  } = req;

  const getCateIndex = await client.category.findFirst({
    where: {
      id: Number(cateType),
    },
  });

  const { id }: any = getCateIndex;

  const createPost = await client.posts.create({
    data: {
      title,
      description,
      user: {
        connect: {
          id: user?.id,
        },
      },
      categories: {
        create: [
          {
            categoryId: id,
          },
        ],
      },
    },
  });

  return res.json({
    ok: true,
  });
}
export default withApiSession(
  withHandler({
    methods: ["POST", "GET"],
    handlerFunction: handler,
    isPrivate: true,
  })
);
