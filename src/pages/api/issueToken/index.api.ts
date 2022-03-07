import { CONST } from '@/config/const';
import { ENV } from '@/config/env';
import axios from 'axios';
import { NextApiHandler } from 'next';
import { z } from 'zod';

const reqBodySchema = z.object({
  code: z.string(),
  codeVerifier: z.string(),
});

const handler: NextApiHandler = async (req, res) => {
  const reqBody = await reqBodySchema.parseAsync(req.body).catch(() => {
    res.status(400).send({ message: 'Invalid Arguments' });
  });
  if (!reqBody) {
    return;
  }

  const basic = Buffer.from(`${ENV.PUBLIC.TWITTER_CLIENT_ID}:${ENV.SECRET.TWITTER_CLIENT_SECRET}`).toString('base64');

  const body = new URLSearchParams();
  Object.entries({
    code: reqBody.code,
    grant_type: 'authorization_code',
    client_id: ENV.PUBLIC.TWITTER_CLIENT_ID,
    redirect_uri: ENV.PUBLIC.TWITTER_REDIRECT_URI,
    code_verifier: reqBody.codeVerifier,
  }).map(([key, value]: [key: string, value: string]) => body.append(key, value));

  const tokenRes = await axios
    .post(CONST.TWITTER_TOKEN_URL, body, {
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .catch((err) => {
      if (axios.isAxiosError(err)) {
        console.log(err.response?.data);
      }
    });
  if (!tokenRes) {
    res.status(500).send({ message: 'internal' });
    return;
  }

  res.send({ token: tokenRes.data.access_token });
};

export default handler;
