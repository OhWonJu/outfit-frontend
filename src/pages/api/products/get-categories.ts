import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const client = new PrismaClient();

async function getCategories() {
  try {
    const response = await client.kategorie.findMany({});
    return response;
  } catch (e) {
    console.error(JSON.stringify(e));
  }
}

type Data = {
  items?: any;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const categories = await getCategories();
    res.status(200).json({ items: categories, message: "Success" });
  } catch (e) {
    res.status(400).json({ message: "Failed" });
  }
}
