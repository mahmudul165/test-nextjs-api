import { useRouter } from "next/router";
import React from "react";

const Details = () => {
  const router = useRouter();
  console.log(router.query.infoId);
  return <div></div>;
};

export default Details;
