// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../server/db/client";
import { env } from "../../../env/server.mjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('teste')
  if (req.body.action === "payment.created") {
    const response = await fetch(
      `https://api.mercadopago.com/v1/payments/${req.body.data.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.MERCADOPAGO_ACCESS_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  res.status(200);
}
