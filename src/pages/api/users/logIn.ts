import { NextApiRequest, NextApiResponse } from "next";
import client from "@lib/server/client";
import withHandler from "@lib/server/withHandler";

async function logInHandler(req: NextApiRequest, res: NextApiResponse) {
  console.log("api: ", req.body);
  // return res.status(200).end();
  return res.status(200).json({ ...req.body });
}

export default withHandler("POST", logInHandler);
