import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

// internal
import Style from "./SlideBar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";

const SlideBar = ({ setopensidebar }) => {
  //----Usestate

  const [openExplore, setOpenExplore] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

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

  const openExploreMenu = () => {
    if (!openExplore) {
      setOpenExplore(true);
    } else {
      setOpenExplore(false);
    }
  };

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setopensidebar(false);
  };

  return (
    <div className={Style.sidebar}>
      <GrClose
        className={Style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />
      <div className={Style.sideBar_box}>
        <Image src={images.Logo} alt="logo" width={150} height={150} />
        <p>Shop the most outstanding Products on all Categories</p>
        <div className={Style.sideBar_social}>
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialYoutube />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
        </div>
      </div>
      <div className={Style.sideBar_menu}>
        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openExploreMenu()}
          >
            <p>Explore</p>
            <TiArrowSortedDown />
          </div>
          {openExplore && (
            <div className={Style.sideBar_explore}>
              {explore.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>

        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openHelpMenu()}
          >
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {openHelp && (
            <div className={Style.sideBar_explore}>
              {helpcenter.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
