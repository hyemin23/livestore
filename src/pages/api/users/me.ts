import client from "libs/server/client";
import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const profile = await client.user.findUnique({
    where: {
      id: req.session.user?.id,
    },
  });

  console.log(profile);

  res.json({
    ok: true,
    profile,
  });
}

// pulic handler (not login case )
export default withApiSession(
  withHandler({
    method: "GET",
    handlerFunction: handler,
    isPrivate: false,
  })
);
