import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const client = new PrismaClient();

async function getProducts(skip: number, take: number) {
  try {
    const response = await client.tProduct.findMany({
      skip,
      take,
      include: {
        kategorie: true,
        type: true,
      },
    });
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
  const { skip, take } = req.query;

  if (skip === null || take === null) {
    res.status(400).json({ message: "no skip or take" });
    return;
  }

  try {
    const products = await getProducts(+skip, +take);
    res.status(200).json({ items: products, message: "Success" });
  } catch (e) {
    res.status(400).json({ message: "Failed" });
  }
}
