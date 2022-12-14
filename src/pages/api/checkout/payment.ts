// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { configure, preferences } from 'mercadopago'
import prisma from '../../../server/db/client'
import { env } from '../../../env/server.mjs'

configure({
  access_token: env.MERCADOPAGO_ACCESS_TOKEN
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await preferences.create({
      items: [
        {
          title: req.body.description,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),
        },
      ],
      back_urls: {
        success: `http://localhost:3000/user/dashboard`,
        failure: `http://localhost:3000/user/dashboard`,
        pending: `http://localhost:3000/user/dashboard`,
      },
      notification_url: 'http://localhost:3000/api/notification/mercadopago',
      auto_return: 'approved',
    })
    res.status(201).json(data)
  } catch(err) {
    res.status(500).json({ msg: 'error'})
  }
}
