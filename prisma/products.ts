import { PrismaClient, Prisma } from "@prisma/client";

const client = new PrismaClient();

const productData: Prisma.TProductCreateManyInput[] = Array.apply(
  null,
  Array(100),
).map((_, index) => ({
  name: `Dark Jean ${index + 1}`,
  thumbNails: JSON.parse(
    `{"urls": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-2L9N486F.png"]}`,
  ),
  kategorieId: "20ca7f22-d3e4-45ea-b243-d5acad3b3328",
  typeId: "a4a42140-af40-4d26-b874-6d829ce283b5",
  content: "Dark color deim pants",
  price: Math.floor(Math.random() * (100000 - 20000) + 20000),
}));

async function main() {
  await client.tProduct.deleteMany({});

  for (const p of productData) {
    const tProduct = await client.tProduct.create({
      data: {
        name: p.name,
        thumbNails: p.thumbNails,
        kategorie: {
          connect: {
            kategorie: "shoes",
          },
        },
        type: {
          connect: {
            type: "sneackers",
          },
        },
        content: p.content,
        price: p.price,
      },
    });
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
