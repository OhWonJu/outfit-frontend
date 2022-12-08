import { PrismaClient, Prisma } from "@prisma/client";

const client = new PrismaClient();

const productData: Prisma.TProductCreateManyInput[] = Array.apply(
  null,
  Array(100),
).map((_, index) => ({
  name: `Dark Jean ${index + 1}`,
  thumbNails: JSON.parse(
    `{"urls": ["https://github.com/xiaolin/react-image-gallery/tree/master/static/${
      (index + 1) % 10 === 10 ? 10 : (index + 1) % 10
    }.jpg"]}`,
  ),
  kategorieId: "b0db7882-337f-4816-af76-9f8c76af53fb",
  content: "Dark color deim pants",
  typeId: "dc8fcc0d-1a99-4e9c-aafc-59ffcd974b6d",
  price: Math.floor(Math.random() * (100000 - 20000) + 20000),
}));

async function main() {
  await client.tProduct.deleteMany({});

  for (const p of productData) {
    const tProduct = await client.tProduct.create({ data: p });
    console.log(`CREATED: ${tProduct.id}`);
  }
}

// 생성하고 클라이언트 종료
main()
  .then(async () => {
    await client.$disconnect();
  })
  .catch(async e => {
    console.log(e);
    await client.$disconnect();
    process.exit(1);
  });
