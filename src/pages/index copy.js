import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("/v1/products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const set = new Set(data.map((cosmeticItem) => cosmeticItem.brand));
        const brands = [...set];
        const temp = brands.map((brand) => {
          return {
            brand,
            products: data.filter((item) => item.brand === brand),
          };
        });
        setData(temp);
      });
  }, []);

  return (
    <article
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          padding: "20px 40px",
          maxWidth: "1600px",
        }}
      >
        {data &&
          data.map((item) => {
            return (
              <>
                <h1
                  style={{
                    width: "100%",
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: "#333",
                    paddingBottom: "15px",
                  }}
                >
                  {item.brand}
                </h1>
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    gap: "30px",
                    flexWrap: "wrap",
                    marginBottom: "40px",
                  }}
                >
                  {item.products.map((product) => {
                    return (
                      <div
                        key={product.id}
                        style={{
                          width: "280px",
                          height: "280px",
                          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                          borderRadius: "10px",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <div
                          style={{
                            width: "200px",
                            height: "200px",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            style={{
                              objectFit: "cover",
                              // objectPosition: "50% 50%",
                            }}
                            src={product.image_link}
                            alt={product.name}
                          />
                        </div>
                        <p>{product.name}</p>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
      </div>
    </article>
  );
}
