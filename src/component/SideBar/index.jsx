import React from "react";

const SideBar = ({ productByBrand, setProductByBrand, originData }) => {
  console.log("originData", originData);
  return (
    <ul style={{ position: "sticky", top: "0", height: "fit-content" }}>
      <li onClick={() => setProductByBrand(originData)}>All</li>
      {originData.map((i) => {
        return (
          <li
            key={i.brand}
            onClick={() =>
              setProductByBrand(originData.filter((od) => od.brand === i.brand))
            }
          >
            {i.brand}
          </li>
        );
      })}
    </ul>
  );
};

export default SideBar;
