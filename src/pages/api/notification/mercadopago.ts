// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../server/db/client";
import { env } from "../../../env/server.mjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.body.action === "payment.created") {
      const response = await fetch(
        `https://api.mercadopago.com/v1/payments/${req.body.data.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${env.MERCADOPAGO_ACCESS_TOKEN}`,
          },
        }
      );
      const data = await response.json();
  
      const order = await prisma.orders.update({
        where: {
          id: data.external_reference,
        },
        data: {
          paymentAt: new Date(),
        },
        select: {
          plan: true,
        }
      })
      if(order) {
        prisma.user.update({
          where: {
            id: data.additional_info.payer.first_name,
          },
          data: {
            Bots: {
              create: {
                plan: order.plan,
              }
            },
          }
        })
      }
    }
    res.status(200).json({
      error: false,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "error" });
  }
}
