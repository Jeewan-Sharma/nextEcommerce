import React from "react";
import Link from "next/link";

// Internal Import
import Style from "./Explore.module.css";

const Explore = () => {
  // Explore navigation menu

  const explore = [
    {
      name: "Discover",
      link: "collection",
    },
    {
      name: "New Arrivals",
      link: "newarrivals",
    },
    {
      name: "Deals&sale",
      link: "dealsandsale",
    },
    {
      name: "Category",
      link: "category",
    },
  ];

  return (
    <div>
      {explore.map((el, i) => (
        <div key={(i = 1)} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Explore;
