// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  temperature: [];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({
    // @ts-ignore
    temperature: [
      {
        id: 1,
        date: '03/01',
        average_temp: 15,
      },
      {
        id: 2,
        date: '03/02',
        average_temp: 27,
      },
      {
        id: 3,
        date: '03/03',
        average_temp: 18,
      },
      {
        id: 4,
        date: '03/04',
        average_temp: 20,
      },
      {
        id: 5,
        date: '03/05',
        average_temp: 23,
      },
      {
        id: 6,
        date: '03/06',
        average_temp: 17,
      },
      {
        id: 7,
        date: '03/07',
        average_temp: 15,
      },
    ],
  });
}
