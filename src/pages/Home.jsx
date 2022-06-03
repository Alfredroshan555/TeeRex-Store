import React from "react";
import Cards from "../components/Cards";

import { ContextFun } from "../context/context";

const Home = () => {
  const { items } = ContextFun();
  console.log("data", items);

  return (
    <div className="">
      <Cards items={items} />
    </div>
  );
};

export default Home;
