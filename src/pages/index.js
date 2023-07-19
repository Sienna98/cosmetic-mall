import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    fetch("/v1/products.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <>js</>;
}
