import SideBar from "@/component/SideBar";
import { useEffect, useState } from "react";

const filterByBrand = (products) => {
  return [
    // 중복된 브랜드 제거
    ...new Set(
      products
        // brand 있는 배열만 걸러내기
        .filter((product) => product.brand)
        // brand만 추출하여 새로운 배열 생성
        .map((product) => product.brand)
    ),
    // 브랜드별로 제품 목록을 그룹화
  ].map((brand) => ({
    brand,
    products: products.filter((product) => product.brand === brand),
  }));
};

export default function Home() {
  const [productByBrand, setProductByBrand] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        // 아이템이 10개 이상인 브랜드만 필터링
        const temp = filterByBrand(data).filter((i) => {
          if (i.products.length > 10) {
            return i;
          }
        });
        // 브랜드중 "dior" 찾아서 디올부터 3개 브랜드 삭제하기
        const indexOfDior = temp.findIndex((i) => i.brand === "dior");
        temp.splice(indexOfDior, 3);

        setProductByBrand(temp);
      });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <SideBar brandName={productByBrand} />
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "20px 40px",
            maxWidth: "1600px",
          }}
        >
          {productByBrand &&
            productByBrand.map((item) => {
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
                      marginBottom: "100px",
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
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              style={{
                                objectFit: "cover",
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
      </section>
    </div>
  );
}
