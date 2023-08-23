// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log("req", req);
  console.log("res", res);

  res.status(200).json({ name: "John Doe" });
}
