import { PrismaClient, Prisma } from "@prisma/client";

const client = new PrismaClient();

const getRandom = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const shoes = [
  {
    name: "Shoes 1",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-2L9N486F.png"]}`,
    ),
    kategorieId: "20ca7f22-d3e4-45ea-b243-d5acad3b3328",
    typeId: "a4a42140-af40-4d26-b874-6d829ce283b5",
    content: "shoes test",
    price: getRandom(300000, 100000),
  },
  {
    name: "Shoes 2",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-2L9N486F.png"]}`,
    ),
    kategorieId: "20ca7f22-d3e4-45ea-b243-d5acad3b3328",
    typeId: "a4a42140-af40-4d26-b874-6d829ce283b5",
    content: "shoes test",
    price: getRandom(300000, 100000),
  },
  {
    name: "Shoes 3",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-2L9N486F.png"]}`,
    ),
    kategorieId: "20ca7f22-d3e4-45ea-b243-d5acad3b3328",
    typeId: "a4a42140-af40-4d26-b874-6d829ce283b5",
    content: "shoes test",
    price: getRandom(300000, 100000),
  },
  {
    name: "Shoes 4",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-2L9N486F.png"]}`,
    ),
    kategorieId: "20ca7f22-d3e4-45ea-b243-d5acad3b3328",
    typeId: "a4a42140-af40-4d26-b874-6d829ce283b5",
    content: "shoes test",
    price: getRandom(300000, 100000),
  },
  {
    name: "Shoes 5",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-2L9N486F.png"]}`,
    ),
    kategorieId: "20ca7f22-d3e4-45ea-b243-d5acad3b3328",
    typeId: "a4a42140-af40-4d26-b874-6d829ce283b5",
    content: "shoes test",
    price: getRandom(300000, 100000),
  },
  {
    name: "Shoes 6",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-2L9N486F.png"]}`,
    ),
    kategorieId: "20ca7f22-d3e4-45ea-b243-d5acad3b3328",
    typeId: "a4a42140-af40-4d26-b874-6d829ce283b5",
    content: "shoes test",
    price: getRandom(300000, 100000),
  },
  {
    name: "Shoes 7",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-2L9N486F.png"]}`,
    ),
    kategorieId: "20ca7f22-d3e4-45ea-b243-d5acad3b3328",
    typeId: "a4a42140-af40-4d26-b874-6d829ce283b5",
    content: "shoes test",
    price: getRandom(300000, 100000),
  },
  {
    name: "Shoes 8",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-2L9N486F.png"]}`,
    ),
    kategorieId: "20ca7f22-d3e4-45ea-b243-d5acad3b3328",
    typeId: "a4a42140-af40-4d26-b874-6d829ce283b5",
    content: "shoes test",
    price: getRandom(300000, 100000),
  },
  {
    name: "Shoes 9",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-2L9N486F.png"]}`,
    ),
    kategorieId: "20ca7f22-d3e4-45ea-b243-d5acad3b3328",
    typeId: "a4a42140-af40-4d26-b874-6d829ce283b5",
    content: "shoes test",
    price: getRandom(300000, 100000),
  },
  {
    name: "Shoes 10",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-2L9N486F.png"]}`,
    ),
    kategorieId: "20ca7f22-d3e4-45ea-b243-d5acad3b3328",
    typeId: "a4a42140-af40-4d26-b874-6d829ce283b5",
    content: "shoes test",
    price: getRandom(300000, 100000),
  },
  {
    name: "Shoes 11",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-2L9N486F.png"]}`,
    ),
    kategorieId: "20ca7f22-d3e4-45ea-b243-d5acad3b3328",
    typeId: "a4a42140-af40-4d26-b874-6d829ce283b5",
    content: "shoes test",
    price: getRandom(300000, 100000),
  },
  {
    name: "Shoes 12",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-2L9N486F.png"]}`,
    ),
    kategorieId: "20ca7f22-d3e4-45ea-b243-d5acad3b3328",
    typeId: "a4a42140-af40-4d26-b874-6d829ce283b5",
    content: "shoes test",
    price: getRandom(300000, 100000),
  },
  {
    name: "Shoes 13",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-2L9N486F.png"]}`,
    ),
    kategorieId: "20ca7f22-d3e4-45ea-b243-d5acad3b3328",
    typeId: "a4a42140-af40-4d26-b874-6d829ce283b5",
    content: "shoes test",
    price: getRandom(300000, 100000),
  },
  {
    name: "Shoes 14",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-2L9N486F.png"]}`,
    ),
    kategorieId: "20ca7f22-d3e4-45ea-b243-d5acad3b3328",
    typeId: "a4a42140-af40-4d26-b874-6d829ce283b5",
    content: "shoes test",
    price: getRandom(300000, 100000),
  },
  {
    name: "Shoes 15",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-2L9N486F.png"]}`,
    ),
    kategorieId: "20ca7f22-d3e4-45ea-b243-d5acad3b3328",
    typeId: "a4a42140-af40-4d26-b874-6d829ce283b5",
    content: "shoes test",
    price: getRandom(300000, 100000),
  },
  {
    name: "Shoes 16",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-2L9N486F.png"]}`,
    ),
    kategorieId: "20ca7f22-d3e4-45ea-b243-d5acad3b3328",
    typeId: "a4a42140-af40-4d26-b874-6d829ce283b5",
    content: "shoes test",
    price: getRandom(300000, 100000),
  },
  {
    name: "Shoes 17",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-lv8-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-2L9N486F.png"]}`,
    ),
    kategorieId: "20ca7f22-d3e4-45ea-b243-d5acad3b3328",
    typeId: "a4a42140-af40-4d26-b874-6d829ce283b5",
    content: "shoes test",
    price: getRandom(300000, 100000),
  },
];
const tShirt = [
  {
    name: "tShirt 1",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da337439-e46e-4f3c-be38-68cb3830b498/%EC%86%94%EB%A1%9C-%EC%8A%A4%EC%9A%B0%EC%8B%9C-%EB%82%A8%EC%84%B1-%ED%92%80%EC%A7%91-%ED%9B%84%EB%94%94-NwXQ7mmd.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "bf056835-106b-4728-b887-468b93760d97",
    content: "long Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 2",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22b91adf-809e-4295-9161-bad1cd7b103d/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EB%A0%88%EB%94%94-%EB%82%A8%EC%84%B1-%EB%B0%98%ED%8C%94-%ED%94%BC%ED%8A%B8%EB%8B%88%EC%8A%A4-%ED%83%91-MSHGsLcF.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "f2c3a6c3-86cb-4696-9374-0b2dc97dd906",
    content: "short Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 3",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da337439-e46e-4f3c-be38-68cb3830b498/%EC%86%94%EB%A1%9C-%EC%8A%A4%EC%9A%B0%EC%8B%9C-%EB%82%A8%EC%84%B1-%ED%92%80%EC%A7%91-%ED%9B%84%EB%94%94-NwXQ7mmd.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "bf056835-106b-4728-b887-468b93760d97",
    content: "long Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 4",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22b91adf-809e-4295-9161-bad1cd7b103d/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EB%A0%88%EB%94%94-%EB%82%A8%EC%84%B1-%EB%B0%98%ED%8C%94-%ED%94%BC%ED%8A%B8%EB%8B%88%EC%8A%A4-%ED%83%91-MSHGsLcF.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "f2c3a6c3-86cb-4696-9374-0b2dc97dd906",
    content: "short Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 5",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da337439-e46e-4f3c-be38-68cb3830b498/%EC%86%94%EB%A1%9C-%EC%8A%A4%EC%9A%B0%EC%8B%9C-%EB%82%A8%EC%84%B1-%ED%92%80%EC%A7%91-%ED%9B%84%EB%94%94-NwXQ7mmd.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "bf056835-106b-4728-b887-468b93760d97",
    content: "long Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 6",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22b91adf-809e-4295-9161-bad1cd7b103d/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EB%A0%88%EB%94%94-%EB%82%A8%EC%84%B1-%EB%B0%98%ED%8C%94-%ED%94%BC%ED%8A%B8%EB%8B%88%EC%8A%A4-%ED%83%91-MSHGsLcF.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "f2c3a6c3-86cb-4696-9374-0b2dc97dd906",
    content: "short Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 7",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da337439-e46e-4f3c-be38-68cb3830b498/%EC%86%94%EB%A1%9C-%EC%8A%A4%EC%9A%B0%EC%8B%9C-%EB%82%A8%EC%84%B1-%ED%92%80%EC%A7%91-%ED%9B%84%EB%94%94-NwXQ7mmd.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "bf056835-106b-4728-b887-468b93760d97",
    content: "long Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 8",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22b91adf-809e-4295-9161-bad1cd7b103d/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EB%A0%88%EB%94%94-%EB%82%A8%EC%84%B1-%EB%B0%98%ED%8C%94-%ED%94%BC%ED%8A%B8%EB%8B%88%EC%8A%A4-%ED%83%91-MSHGsLcF.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "f2c3a6c3-86cb-4696-9374-0b2dc97dd906",
    content: "short Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 9",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da337439-e46e-4f3c-be38-68cb3830b498/%EC%86%94%EB%A1%9C-%EC%8A%A4%EC%9A%B0%EC%8B%9C-%EB%82%A8%EC%84%B1-%ED%92%80%EC%A7%91-%ED%9B%84%EB%94%94-NwXQ7mmd.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "bf056835-106b-4728-b887-468b93760d97",
    content: "long Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 10",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22b91adf-809e-4295-9161-bad1cd7b103d/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EB%A0%88%EB%94%94-%EB%82%A8%EC%84%B1-%EB%B0%98%ED%8C%94-%ED%94%BC%ED%8A%B8%EB%8B%88%EC%8A%A4-%ED%83%91-MSHGsLcF.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "f2c3a6c3-86cb-4696-9374-0b2dc97dd906",
    content: "short Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 9",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da337439-e46e-4f3c-be38-68cb3830b498/%EC%86%94%EB%A1%9C-%EC%8A%A4%EC%9A%B0%EC%8B%9C-%EB%82%A8%EC%84%B1-%ED%92%80%EC%A7%91-%ED%9B%84%EB%94%94-NwXQ7mmd.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "bf056835-106b-4728-b887-468b93760d97",
    content: "long Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 10",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22b91adf-809e-4295-9161-bad1cd7b103d/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EB%A0%88%EB%94%94-%EB%82%A8%EC%84%B1-%EB%B0%98%ED%8C%94-%ED%94%BC%ED%8A%B8%EB%8B%88%EC%8A%A4-%ED%83%91-MSHGsLcF.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "f2c3a6c3-86cb-4696-9374-0b2dc97dd906",
    content: "short Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 11",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da337439-e46e-4f3c-be38-68cb3830b498/%EC%86%94%EB%A1%9C-%EC%8A%A4%EC%9A%B0%EC%8B%9C-%EB%82%A8%EC%84%B1-%ED%92%80%EC%A7%91-%ED%9B%84%EB%94%94-NwXQ7mmd.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "bf056835-106b-4728-b887-468b93760d97",
    content: "long Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 12",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22b91adf-809e-4295-9161-bad1cd7b103d/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EB%A0%88%EB%94%94-%EB%82%A8%EC%84%B1-%EB%B0%98%ED%8C%94-%ED%94%BC%ED%8A%B8%EB%8B%88%EC%8A%A4-%ED%83%91-MSHGsLcF.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "f2c3a6c3-86cb-4696-9374-0b2dc97dd906",
    content: "short Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 13",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da337439-e46e-4f3c-be38-68cb3830b498/%EC%86%94%EB%A1%9C-%EC%8A%A4%EC%9A%B0%EC%8B%9C-%EB%82%A8%EC%84%B1-%ED%92%80%EC%A7%91-%ED%9B%84%EB%94%94-NwXQ7mmd.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "bf056835-106b-4728-b887-468b93760d97",
    content: "long Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 14",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22b91adf-809e-4295-9161-bad1cd7b103d/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EB%A0%88%EB%94%94-%EB%82%A8%EC%84%B1-%EB%B0%98%ED%8C%94-%ED%94%BC%ED%8A%B8%EB%8B%88%EC%8A%A4-%ED%83%91-MSHGsLcF.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "f2c3a6c3-86cb-4696-9374-0b2dc97dd906",
    content: "short Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 15",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da337439-e46e-4f3c-be38-68cb3830b498/%EC%86%94%EB%A1%9C-%EC%8A%A4%EC%9A%B0%EC%8B%9C-%EB%82%A8%EC%84%B1-%ED%92%80%EC%A7%91-%ED%9B%84%EB%94%94-NwXQ7mmd.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "bf056835-106b-4728-b887-468b93760d97",
    content: "long Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 16",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22b91adf-809e-4295-9161-bad1cd7b103d/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EB%A0%88%EB%94%94-%EB%82%A8%EC%84%B1-%EB%B0%98%ED%8C%94-%ED%94%BC%ED%8A%B8%EB%8B%88%EC%8A%A4-%ED%83%91-MSHGsLcF.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "f2c3a6c3-86cb-4696-9374-0b2dc97dd906",
    content: "short Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 17",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da337439-e46e-4f3c-be38-68cb3830b498/%EC%86%94%EB%A1%9C-%EC%8A%A4%EC%9A%B0%EC%8B%9C-%EB%82%A8%EC%84%B1-%ED%92%80%EC%A7%91-%ED%9B%84%EB%94%94-NwXQ7mmd.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "bf056835-106b-4728-b887-468b93760d97",
    content: "long Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 18",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22b91adf-809e-4295-9161-bad1cd7b103d/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EB%A0%88%EB%94%94-%EB%82%A8%EC%84%B1-%EB%B0%98%ED%8C%94-%ED%94%BC%ED%8A%B8%EB%8B%88%EC%8A%A4-%ED%83%91-MSHGsLcF.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "f2c3a6c3-86cb-4696-9374-0b2dc97dd906",
    content: "short Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 19",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da337439-e46e-4f3c-be38-68cb3830b498/%EC%86%94%EB%A1%9C-%EC%8A%A4%EC%9A%B0%EC%8B%9C-%EB%82%A8%EC%84%B1-%ED%92%80%EC%A7%91-%ED%9B%84%EB%94%94-NwXQ7mmd.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "bf056835-106b-4728-b887-468b93760d97",
    content: "long Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 20",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22b91adf-809e-4295-9161-bad1cd7b103d/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EB%A0%88%EB%94%94-%EB%82%A8%EC%84%B1-%EB%B0%98%ED%8C%94-%ED%94%BC%ED%8A%B8%EB%8B%88%EC%8A%A4-%ED%83%91-MSHGsLcF.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "f2c3a6c3-86cb-4696-9374-0b2dc97dd906",
    content: "short Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 21",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da337439-e46e-4f3c-be38-68cb3830b498/%EC%86%94%EB%A1%9C-%EC%8A%A4%EC%9A%B0%EC%8B%9C-%EB%82%A8%EC%84%B1-%ED%92%80%EC%A7%91-%ED%9B%84%EB%94%94-NwXQ7mmd.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "bf056835-106b-4728-b887-468b93760d97",
    content: "long Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 22",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22b91adf-809e-4295-9161-bad1cd7b103d/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EB%A0%88%EB%94%94-%EB%82%A8%EC%84%B1-%EB%B0%98%ED%8C%94-%ED%94%BC%ED%8A%B8%EB%8B%88%EC%8A%A4-%ED%83%91-MSHGsLcF.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "f2c3a6c3-86cb-4696-9374-0b2dc97dd906",
    content: "short Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 23",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da337439-e46e-4f3c-be38-68cb3830b498/%EC%86%94%EB%A1%9C-%EC%8A%A4%EC%9A%B0%EC%8B%9C-%EB%82%A8%EC%84%B1-%ED%92%80%EC%A7%91-%ED%9B%84%EB%94%94-NwXQ7mmd.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "bf056835-106b-4728-b887-468b93760d97",
    content: "long Tshirt test",
    price: getRandom(300000, 100000),
  },
  {
    name: "tShirt 24",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22b91adf-809e-4295-9161-bad1cd7b103d/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EB%A0%88%EB%94%94-%EB%82%A8%EC%84%B1-%EB%B0%98%ED%8C%94-%ED%94%BC%ED%8A%B8%EB%8B%88%EC%8A%A4-%ED%83%91-MSHGsLcF.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "f2c3a6c3-86cb-4696-9374-0b2dc97dd906",
    content: "short Tshirt test",
    price: getRandom(300000, 100000),
  },
];
const cap = [
  {
    name: "cap 1",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/32d12240-28e0-47fc-b275-039996a0f360/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EC%95%BC%EB%8B%88%EC%8A%A4-%ED%97%A4%EB%A6%AC%ED%8B%B0%EC%A7%8086-%EB%86%8D%EA%B5%AC-%EC%BA%A1-YbTZnNTc.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "583a2e50-d0ec-4646-964d-65aa9a09c67e",
    content: "nice cap",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 2",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95090b9d-8da3-46ce-973b-c4ea46cbb4c8/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EB%B2%84%ED%82%B7-%ED%96%87-UyiItOOj.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "f3ba863a-0f27-4a84-8c4f-8cb0c4e1d51f",
    content: "nice bucket hat",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 3",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/32d12240-28e0-47fc-b275-039996a0f360/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EC%95%BC%EB%8B%88%EC%8A%A4-%ED%97%A4%EB%A6%AC%ED%8B%B0%EC%A7%8086-%EB%86%8D%EA%B5%AC-%EC%BA%A1-YbTZnNTc.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "583a2e50-d0ec-4646-964d-65aa9a09c67e",
    content: "nice cap",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 4",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95090b9d-8da3-46ce-973b-c4ea46cbb4c8/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EB%B2%84%ED%82%B7-%ED%96%87-UyiItOOj.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "f3ba863a-0f27-4a84-8c4f-8cb0c4e1d51f",
    content: "nice bucket hat",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 5",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/32d12240-28e0-47fc-b275-039996a0f360/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EC%95%BC%EB%8B%88%EC%8A%A4-%ED%97%A4%EB%A6%AC%ED%8B%B0%EC%A7%8086-%EB%86%8D%EA%B5%AC-%EC%BA%A1-YbTZnNTc.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "583a2e50-d0ec-4646-964d-65aa9a09c67e",
    content: "nice cap",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 6",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95090b9d-8da3-46ce-973b-c4ea46cbb4c8/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EB%B2%84%ED%82%B7-%ED%96%87-UyiItOOj.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "f3ba863a-0f27-4a84-8c4f-8cb0c4e1d51f",
    content: "nice bucket hat",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 7",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/32d12240-28e0-47fc-b275-039996a0f360/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EC%95%BC%EB%8B%88%EC%8A%A4-%ED%97%A4%EB%A6%AC%ED%8B%B0%EC%A7%8086-%EB%86%8D%EA%B5%AC-%EC%BA%A1-YbTZnNTc.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "583a2e50-d0ec-4646-964d-65aa9a09c67e",
    content: "nice cap",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 8",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95090b9d-8da3-46ce-973b-c4ea46cbb4c8/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EB%B2%84%ED%82%B7-%ED%96%87-UyiItOOj.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "f3ba863a-0f27-4a84-8c4f-8cb0c4e1d51f",
    content: "nice bucket hat",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 9",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/32d12240-28e0-47fc-b275-039996a0f360/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EC%95%BC%EB%8B%88%EC%8A%A4-%ED%97%A4%EB%A6%AC%ED%8B%B0%EC%A7%8086-%EB%86%8D%EA%B5%AC-%EC%BA%A1-YbTZnNTc.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "583a2e50-d0ec-4646-964d-65aa9a09c67e",
    content: "nice cap",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 10",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95090b9d-8da3-46ce-973b-c4ea46cbb4c8/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EB%B2%84%ED%82%B7-%ED%96%87-UyiItOOj.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "f3ba863a-0f27-4a84-8c4f-8cb0c4e1d51f",
    content: "nice bucket hat",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 11",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/32d12240-28e0-47fc-b275-039996a0f360/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EC%95%BC%EB%8B%88%EC%8A%A4-%ED%97%A4%EB%A6%AC%ED%8B%B0%EC%A7%8086-%EB%86%8D%EA%B5%AC-%EC%BA%A1-YbTZnNTc.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "583a2e50-d0ec-4646-964d-65aa9a09c67e",
    content: "nice cap",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 12",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95090b9d-8da3-46ce-973b-c4ea46cbb4c8/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EB%B2%84%ED%82%B7-%ED%96%87-UyiItOOj.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "f3ba863a-0f27-4a84-8c4f-8cb0c4e1d51f",
    content: "nice bucket hat",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 13",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/32d12240-28e0-47fc-b275-039996a0f360/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EC%95%BC%EB%8B%88%EC%8A%A4-%ED%97%A4%EB%A6%AC%ED%8B%B0%EC%A7%8086-%EB%86%8D%EA%B5%AC-%EC%BA%A1-YbTZnNTc.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "583a2e50-d0ec-4646-964d-65aa9a09c67e",
    content: "nice cap",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 14",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95090b9d-8da3-46ce-973b-c4ea46cbb4c8/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EB%B2%84%ED%82%B7-%ED%96%87-UyiItOOj.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "f3ba863a-0f27-4a84-8c4f-8cb0c4e1d51f",
    content: "nice bucket hat",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 15",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/32d12240-28e0-47fc-b275-039996a0f360/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EC%95%BC%EB%8B%88%EC%8A%A4-%ED%97%A4%EB%A6%AC%ED%8B%B0%EC%A7%8086-%EB%86%8D%EA%B5%AC-%EC%BA%A1-YbTZnNTc.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "583a2e50-d0ec-4646-964d-65aa9a09c67e",
    content: "nice cap",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 16",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95090b9d-8da3-46ce-973b-c4ea46cbb4c8/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EB%B2%84%ED%82%B7-%ED%96%87-UyiItOOj.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "f3ba863a-0f27-4a84-8c4f-8cb0c4e1d51f",
    content: "nice bucket hat",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 17",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/32d12240-28e0-47fc-b275-039996a0f360/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EC%95%BC%EB%8B%88%EC%8A%A4-%ED%97%A4%EB%A6%AC%ED%8B%B0%EC%A7%8086-%EB%86%8D%EA%B5%AC-%EC%BA%A1-YbTZnNTc.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "583a2e50-d0ec-4646-964d-65aa9a09c67e",
    content: "nice cap",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 18",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95090b9d-8da3-46ce-973b-c4ea46cbb4c8/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EB%B2%84%ED%82%B7-%ED%96%87-UyiItOOj.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "f3ba863a-0f27-4a84-8c4f-8cb0c4e1d51f",
    content: "nice bucket hat",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 19",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/32d12240-28e0-47fc-b275-039996a0f360/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EC%95%BC%EB%8B%88%EC%8A%A4-%ED%97%A4%EB%A6%AC%ED%8B%B0%EC%A7%8086-%EB%86%8D%EA%B5%AC-%EC%BA%A1-YbTZnNTc.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "583a2e50-d0ec-4646-964d-65aa9a09c67e",
    content: "nice cap",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 20",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95090b9d-8da3-46ce-973b-c4ea46cbb4c8/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EB%B2%84%ED%82%B7-%ED%96%87-UyiItOOj.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "f3ba863a-0f27-4a84-8c4f-8cb0c4e1d51f",
    content: "nice bucket hat",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 21",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/32d12240-28e0-47fc-b275-039996a0f360/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EC%95%BC%EB%8B%88%EC%8A%A4-%ED%97%A4%EB%A6%AC%ED%8B%B0%EC%A7%8086-%EB%86%8D%EA%B5%AC-%EC%BA%A1-YbTZnNTc.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "583a2e50-d0ec-4646-964d-65aa9a09c67e",
    content: "nice cap",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 22",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95090b9d-8da3-46ce-973b-c4ea46cbb4c8/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EB%B2%84%ED%82%B7-%ED%96%87-UyiItOOj.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "f3ba863a-0f27-4a84-8c4f-8cb0c4e1d51f",
    content: "nice bucket hat",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 23",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/32d12240-28e0-47fc-b275-039996a0f360/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EC%95%BC%EB%8B%88%EC%8A%A4-%ED%97%A4%EB%A6%AC%ED%8B%B0%EC%A7%8086-%EB%86%8D%EA%B5%AC-%EC%BA%A1-YbTZnNTc.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "583a2e50-d0ec-4646-964d-65aa9a09c67e",
    content: "nice cap",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 24",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95090b9d-8da3-46ce-973b-c4ea46cbb4c8/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EB%B2%84%ED%82%B7-%ED%96%87-UyiItOOj.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "f3ba863a-0f27-4a84-8c4f-8cb0c4e1d51f",
    content: "nice bucket hat",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 25",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/32d12240-28e0-47fc-b275-039996a0f360/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EC%95%BC%EB%8B%88%EC%8A%A4-%ED%97%A4%EB%A6%AC%ED%8B%B0%EC%A7%8086-%EB%86%8D%EA%B5%AC-%EC%BA%A1-YbTZnNTc.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "583a2e50-d0ec-4646-964d-65aa9a09c67e",
    content: "nice cap",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 26",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95090b9d-8da3-46ce-973b-c4ea46cbb4c8/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EB%B2%84%ED%82%B7-%ED%96%87-UyiItOOj.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "f3ba863a-0f27-4a84-8c4f-8cb0c4e1d51f",
    content: "nice bucket hat",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 27",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/32d12240-28e0-47fc-b275-039996a0f360/%EB%93%9C%EB%9D%BC%EC%9D%B4-%ED%95%8F-%EC%95%BC%EB%8B%88%EC%8A%A4-%ED%97%A4%EB%A6%AC%ED%8B%B0%EC%A7%8086-%EB%86%8D%EA%B5%AC-%EC%BA%A1-YbTZnNTc.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "583a2e50-d0ec-4646-964d-65aa9a09c67e",
    content: "nice cap",
    price: getRandom(300000, 100000),
  },
  {
    name: "cap 28",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95090b9d-8da3-46ce-973b-c4ea46cbb4c8/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EB%B2%84%ED%82%B7-%ED%96%87-UyiItOOj.png"]}`,
    ),
    kategorieId: "c8db63e9-460e-4477-9bd3-6dedcf1add37",
    typeId: "f3ba863a-0f27-4a84-8c4f-8cb0c4e1d51f",
    content: "nice bucket hat",
    price: getRandom(300000, 100000),
  },
];
const hoodie = [
  {
    name: "hoodie 1",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 2",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 3",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 4",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 5",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 6",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 7",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 8",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 9",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 10",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 21",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 22",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 23",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 24",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 25",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 26",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 27",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 28",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 29",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 30",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 11",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 12",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 13",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 14",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 15",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 16",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 17",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 18",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 19",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
  {
    name: "hoodie 20",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bf8d3b5-020c-43b0-af2e-75a1a00a3886/%EC%A1%B0%EB%8D%98-why-not-%EB%82%A8%EC%84%B1-%ED%9B%84%EB%94%94-40euJpc1.png"]}`,
    ),
    kategorieId: "7ad1d25f-f84a-4ba7-bf3d-ed07a4c3c96d",
    typeId: "043befe0-a892-427d-a274-0f9a01e62c4c",
    content: "nice hoodie",
    price: getRandom(300000, 100000),
  },
];
const pants = [
  {
    name: "pants 1",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 2",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 3",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 4",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 5",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 6",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 7",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 8",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 9",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 10",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 11",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 12",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 13",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 14",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 15",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 16",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 17",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 18",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 19",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 20",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 21",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 22",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 23",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 24",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 25",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 26",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 27",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 28",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 29",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
  {
    name: "pants 30",
    thumbNails: JSON.parse(
      `{"urls": ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ff78e15-e003-4e35-b23a-0268695d7b92/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png"]}`,
    ),
    kategorieId: "d8a39f31-adaf-439a-ba7d-20e8cc2aa530",
    typeId: "8a9e6a3d-23d0-41aa-a1ce-64fd6e50d2d0",
    content: "nice long pants",
    price: getRandom(300000, 100000),
  },
];

async function main() {
  await client.tProduct.deleteMany({});

  for (const p of shoes) {
    await client.tProduct.create({
      data: {
        name: p.name,
        thumbNails: p.thumbNails,
        kategorie: {
          connect: {
            id: p.kategorieId,
          },
        },
        type: {
          connect: {
            id: p.typeId,
          },
        },
        content: p.content,
        price: p.price,
      },
    });
  }
  for (const p of tShirt) {
    await client.tProduct.create({
      data: {
        name: p.name,
        thumbNails: p.thumbNails,
        kategorie: {
          connect: {
            id: p.kategorieId,
          },
        },
        type: {
          connect: {
            id: p.typeId,
          },
        },
        content: p.content,
        price: p.price,
      },
    });
  }
  for (const p of cap) {
    await client.tProduct.create({
      data: {
        name: p.name,
        thumbNails: p.thumbNails,
        kategorie: {
          connect: {
            id: p.kategorieId,
          },
        },
        type: {
          connect: {
            id: p.typeId,
          },
        },
        content: p.content,
        price: p.price,
      },
    });
  }
  for (const p of shoes) {
    await client.tProduct.create({
      data: {
        name: p.name,
        thumbNails: p.thumbNails,
        kategorie: {
          connect: {
            id: p.kategorieId,
          },
        },
        type: {
          connect: {
            id: p.typeId,
          },
        },
        content: p.content,
        price: p.price,
      },
    });
  }
  for (const p of hoodie) {
    await client.tProduct.create({
      data: {
        name: p.name,
        thumbNails: p.thumbNails,
        kategorie: {
          connect: {
            id: p.kategorieId,
          },
        },
        type: {
          connect: {
            id: p.typeId,
          },
        },
        content: p.content,
        price: p.price,
      },
    });
  }
  for (const p of pants) {
    await client.tProduct.create({
      data: {
        name: p.name,
        thumbNails: p.thumbNails,
        kategorie: {
          connect: {
            id: p.kategorieId,
          },
        },
        type: {
          connect: {
            id: p.typeId,
          },
        },
        content: p.content,
        price: p.price,
      },
    });
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
