"use client";
import { slide as Menu } from "react-burger-menu";
import navLinks from "../config/navLinks";
import NavLink from "../components/homeComponents/navLink";

export default function Home() {
  // burger menu styles
  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "18px",
      height: "14px",
      left: "34px",
      top: "34px",
    },
    bmBurgerBars: {
      background: "dimgrey",
      // opacity: "0.5",
    },
    bmBurgerBarsHover: {
      background: "black",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "white",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      top: "0",
      left: "0",
    },
    bmMenu: {
      background: "black",
      opacity: "0.75",
      padding: "2.5em 1em 0",
      fontSize: "1.25em",
    },
    bmItemList: {
      color: "white",
      padding: "0.75em 0.25em",
      fontFamily: "Inter",
    },
    bmItem: {
      display: "block",
      padding: "0.5em 0",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.25)",
      position: "fixed",
      height: "100%",
      top: "0",
      left: "0",
      width: "100%",
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Menu styles={styles} width={"33%"}>
        <a id="home" className="menu-item" href={"/"}>
          Home
        </a>
        <a id="about" className="menu-item" href={"/about"}>
          About
        </a>
        <a id="gallery" className="menu-item" href={"/gallery"}>
          Gallery
        </a>
        <a id="contact" className="menu-item" href={"/contact"}>
          Contact
        </a>
      </Menu>
      
      <h1
        data-testid="homepage-title"
        className={`font-mono text-center mb-3 text-7xl`}
      >
        Carolina Calligraphy
      </h1>

      <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {navLinks.map((link) => (
          <NavLink
            key={link.pageTitle}
            pathName={link.pathName}
            pageTitle={link.pageTitle}
            pageDescription={link.pageDescription}
          />
        ))}
      </div>
    </main>
  );
}
