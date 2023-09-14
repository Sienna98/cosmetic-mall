/* eslint-disable @next/next/no-img-element */
import SideBar from "@/component/SideBar";
import { useEffect, useState } from "react";

const filterByBrand = (products) => {
  return [
    ...new Set(
      products
        .filter((product) => product.brand)
        .map((product) => product.brand)
    ),
  ].map((brand) => ({
    brand,
    products: products.filter((product) => product.brand === brand),
  }));
};

export default function Home() {
  const [productByBrand, setProductByBrand] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log("res", res);
        const temp = filterByBrand(res).filter((item) => {
          if (item.products.length > 10) {
            return item;
          }
        });
        const indexOfDior = temp.findIndex((i) => i.brand === "dior");
        temp.splice(indexOfDior, 3);
        // console.log(
        //   "brand",
        //   temp.map((i) => i.brand)
        // );
        setProductByBrand(temp);
      })
      .catch((error) => {
        // console.log("error", error);
      });
  }, []);

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <SideBar asdf={productByBrand} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          flexWrap: "nowrap",
        }}
      >
        {productByBrand?.map(({ brand, products }) => (
          <div
            key={brand}
            style={{
              padding: 10,
              border: "1px solid #cccccc",
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              gap: 30,
            }}
          >
            <h1 style={{ fontSize: 22, fontWeight: 600 }}>{brand}</h1>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {products.map((product) => (
                <div
                  key={product.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: 350,
                      height: 350,
                      border: "1px solid #dddddd",
                    }}
                  >
                    <img
                      src={product.image_link}
                      alt={product.name}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <span>
                    {product.name} ${product.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
