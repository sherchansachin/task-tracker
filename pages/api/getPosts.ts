// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await db.task.findMany();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
