import Link from "next/link";
import classes from "./Header.module.css";
import Menu from "./Menu";
import { useState, useEffect, createRef } from "react";

export default function Header({ children, ...pageProps }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [fixed, setFixed] = useState(false);
  let myHeader = createRef();

  const handleScroll = (e) => {
    if (window.pageYOffset > 0) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleMenuVisibility() {
    setMenuVisible(!menuVisible);
  }

  return (
    <div>
      <header ref={myHeader} className={fixed ? classes.headerFixed : classes.header}>
        <Link className={classes.logo} href={"/"}>
          <h1>Adotta</h1>
        </Link>
        <ul className={classes.navigation}>
          <Link href={"/"} className={classes.linkNoDecor}>
            <li className={classes.navigationItem}>Home</li>
          </Link>
          <Link href={"/adopt"} className={classes.linkNoDecor}>
            <li className={classes.navigationItem}>Adotta</li>
          </Link>
          <Link href={"/city"} className={classes.linkNoDecor}>
            <li className={classes.navigationItem}>La città</li>
          </Link>
        </ul>
        <a className={classes.menuIcon} onClick={handleMenuVisibility}>
          <i className={menuVisible ? classes.activeHamburger : classes.gg_menu} style={menuVisible ? { "&::before": { visibility: "hidden" } } : { visibility: "visible" }}></i>
        </a>
      </header>
      <Menu handleClick={handleMenuVisibility} visible={menuVisible}></Menu>
      <div className={fixed ? classes.pageContent : {}}>{children}</div>
    </div>
  );
}
