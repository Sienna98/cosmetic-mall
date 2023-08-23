// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import productsMock from "/public/mock.json";

export default async function handler(req, res) {
  console.log(productsMock);
  res.status(200).json(productsMock);
}
