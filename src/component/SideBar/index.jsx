import React from "react";

const SideBar = (data) => {
  console.log("data", data);

  return (
    <ul style={{ width: "230px", padding: "40px", flexShrink: "0" }}>
      {data.brandName.map((i) => {
        return <li style={{ marginBottom: "8px" }}>{i.brand}</li>;
      })}
    </ul>
  );
};

export default SideBar;
