import React from "react";

const SideBar = (productByBrand) => {
  return (
    <ul>
      {productByBrand.asdf.map((i) => {
        return <li>{i.brand}</li>;
      })}
    </ul>
  );
};

export default SideBar;
