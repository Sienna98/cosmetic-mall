import React from "react";

const SideBar = ({ setProductByBrand, originData }) => {
  return (
    <ul style={{ width: "230px", padding: "40px", flexShrink: "0" }}>
      <li
        style={{ marginBottom: "8px", cursor: "pointer" }}
        onClick={() => setProductByBrand(originData)}
      >
        All
      </li>
      {originData.map((i) => {
        return (
          <li
            style={{ marginBottom: "8px", cursor: "pointer" }}
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
