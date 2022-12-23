// external import
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Icon Import
import { TiShoppingCart, TiHeartOutline } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

// internal import
import Style from "./NavBar.module.css";
import { Explore, HelpCenter, NavIcons, Profile, SlideBar } from "./index";
import { Button } from "../index";
import images from "../../img";

const NavBar = () => {
  // usestate
  const [explore, setexplore] = useState(false);
  const [helpcenter, sethelpcenter] = useState(false);
  const [profile, setprofile] = useState(false);
  const [sidebar, setopensidebar] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Explore") {
      setexplore(true);
      sethelpcenter(false);
      setprofile(false);
    } else if (btnText == "Help Center") {
      setexplore(false);
      sethelpcenter(true);
      setprofile(false);
    } else {
      setexplore(false);
      sethelpcenter(false);
      setprofile(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setprofile(true);
      sethelpcenter(false);
      setexplore(false);
    } else {
      setprofile(false);
    }
  };

  const openSidebar = () => {
    if (!sidebar) {
      setopensidebar(true);
    } else {
      setopensidebar(false);
    }
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        {/* --Left Container-- */}
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.Logo} alt="EShopping" width={90} height={60} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search Products" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>
        {/* right section */}
        <div className={Style.navbar_container_right}>
          {/* EXPLORE */}
          <div className={Style.navbar_container_right_explore}>
            <p onClick={(e) => openMenu(e)}>Explore</p>
            {explore && (
              <div className={Style.navbar_container_right_explore_box}>
                <Explore />
              </div>
            )}
          </div>
          {/* Help Center */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {helpcenter && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>
          {/* Cart */}
          <div className={Style.navbar_container_right_cart}>
            <TiShoppingCart className={Style.cart} />
          </div>
          {/* WishList */}
          <div className={Style.navbar_container_right_wishlist}>
            <TiHeartOutline className={Style.cart} />
          </div>
          {/* Profile */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.User_1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              />
              {profile && <Profile />}
            </div>
          </div>
          {/* Menu Button */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSidebar()}
            />
          </div>
        </div>
      </div>
      {/* SideBar Component */}
      {sidebar && (
        <div className={Style.sideBar}>
          <SlideBar setopensidebar={setopensidebar} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
