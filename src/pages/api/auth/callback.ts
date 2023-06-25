import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const querySchema = z.object({
  code: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const query = querySchema.safeParse(req.query)

  if (!query.success) {
    return res.send(`<script> window.close() </script>`)
  }

  const { code } = query.data

  const { data } = await axios.get(
    `http://localhost:3001/auth/discord/redirect?code=${code}`,
  )

  res.send(
    `<script> window.opener.postMessage({ accessToken: '${data}' }, window.location.origin); window.close() </script>`,
  )
}
