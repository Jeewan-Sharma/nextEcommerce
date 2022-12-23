import Link from "next/link";
import React from "react";

// internal import

import Style from "./HelpCenter.module.css";

const HelpCenter = () => {
  const helpcenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contactus",
    },
    {
      name: "Sign In",
      link: "signin",
    },
    {
      name: "Sign Up",
      link: "signup",
    },
  ];

  return (
    <div className={Style.box}>
      {helpcenter.map((el, i) => (
        <div className={Style.helpcenter}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
