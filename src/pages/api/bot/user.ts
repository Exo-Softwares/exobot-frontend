// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { configure, preferences } from "mercadopago";
import prisma from "../../../server/db/client";
import { env } from "../../../env/server.mjs";
import { getSession } from 'next-auth/react';

configure({
  access_token: env.MERCADOPAGO_ACCESS_TOKEN,
});

const restricted = async (req: NextApiRequest, res: NextApiResponse) => {
  try { 
    const { id } = req.query
    if(id && typeof id === 'string') {
      const bots = await prisma.user.findUnique({
        where: {
          id: id,
        },
        select: {
          Bots: {
            select: {
              id: true,
              name: true,
              plan: true,
              expired: true,
              createdAt: true,
              clientUserId: true,
            }
          },
        },
      });
      if (!bots) return res.status(400).send("Bad request");
      return res.status(200).json(bots?.Bots);
    }
    res.status(401).send("Unauthorized");
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "error" });
  }
};

export default restricted;