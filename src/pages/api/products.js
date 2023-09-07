// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import productsMock from "/public/mock.json";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "잘못된 메소드 입니다.", color: "red" });
  } else {
    res.status(200).json(productsMock);
  }
}
