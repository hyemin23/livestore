import client from "libs/client";
import withHandler from "libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  let user;

  if (email) {
    user = client.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      console.log("Did not find.. so will create");

      user = await client.user.create({
        data: {
          name: "Anonymous",
          email,
        },
      });

      console.log("new user : ", user);
    }
  }

  return res.status(200).end();
}

export default withHandler("POST", handler);
