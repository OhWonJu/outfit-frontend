import { NextApiRequest, NextApiResponse } from "next";
import client from "@lib/server/client";
import withHandler from "@lib/server/withHandler";

async function logInHandler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  return res.status(200).end();
}

export default withHandler("POST", logInHandler);
