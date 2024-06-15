/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import '../styles.css'; 

const Header = () => {
  return (
    <>
     <div
        style={{
          height: "2px",
          backgroundColor: "red",
          animation: "loader 3s ease-in-out",
          zIndex: "11",
          position: "relative" 
        }}>
      </div>
      <div
        style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "3rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1.3rem",
        top: 0,
        fontFamily: "garamond",
        fontSize: "1.2rem",
        width: "100%",
        zIndex: 10,
      }}
      >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#footer">Contact</a>
    </div>
      </>
  );
};

export default Header;
