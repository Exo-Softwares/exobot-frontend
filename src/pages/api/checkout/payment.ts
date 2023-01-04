// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { configure, preferences } from "mercadopago";
import prisma from "../../../server/db/client";
import { env } from "../../../env/server.mjs";
import { randomUUID } from "crypto";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";

configure({
  access_token: env.MERCADOPAGO_ACCESS_TOKEN,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getServerAuthSession({ req, res });
    if (!session) return res.status(401).send("Unauthorized");
    const externalId = randomUUID();
    const data = await preferences.create({
      items: [
        {
          title: req.body.description,
          unit_price: req.body.price,
          quantity: 1,
        },
      ],
      back_urls: {
        success: `http://localhost:3000/dashboard`,
        failure: `http://localhost:3000/dashboard`,
        pending: `http://localhost:3000/dashboard`,
      },
      payer: {
        name: session.user?.id,
      },
      external_reference: externalId,
      notification_url: "https://7bb7-2804-7744-81a5-c600-e50a-b7db-ab11-1d24.sa.ngrok.io/api/notification/mercadopago",
      auto_return: "approved",
    });

    await prisma.user.update({
      where: {
        id: session.user?.id,
      },
      data: {
        Orders: {
          create: {
            id: externalId,
            plan: req.body.name,
            totalPrice: req.body.price,
          },
        },
      },
    });
    res.status(201).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "error" });
  }
}
