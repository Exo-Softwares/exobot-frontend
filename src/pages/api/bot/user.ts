// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { configure, preferences } from "mercadopago";
import prisma from "../../../server/db/client";
import { env } from "../../../env/server.mjs";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";

configure({
  access_token: env.MERCADOPAGO_ACCESS_TOKEN,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query
    if(id && typeof id === 'string') {
      const bots = await prisma.user.findUnique({
        where: {
          id: id,
        },
        select: {
          Bots: true,
        },
      });
      if (!bots) return res.status(401).send("Unauthorized");
      res.status(200).json(bots?.Bots);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "error" });
  }
}
