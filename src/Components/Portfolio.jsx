/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/coder.jpg";

const imageAltText = "coder coding on desktop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "SafeSky: A Revolutionary Aerial Hazard Monitoring System.",
    description:
      "Made a full fledged website within 32 hours during Smart India Hackathon, 2023 held at Chittoor, AP.",
    url: "https://abhi5hek001.github.io/SafeSky/",
    image: require("../images/safesky-project-dp.jpg"),
  },
  {
    title: "NewsMonkey: Your daily News App",
    description:
      "Fetches daily news on different aspects and present it to you at a single place.",
    url: "https://news-monkey-psi-lac.vercel.app/",
    image: require("../images/newsmonkey-project-dp.jpg"),
  },
  {
    title: "Voice Controlled Gaming Studio",
    description:
      "Build a gaming website which is a hub of multiple sound controlled games in Global Gamejam 2023 within 48 hours.",
    url: "https://abhi5hek001.github.io/Gaming-Hub/",
    image: require("../images/gaming-project-dp.jpg"),
  },
  {
    title: "Daily Motivation Quote Generator",
    description:
      "Created a quote generator website that can generate a random quote by a single click.",
    url: "https://abhi5hek001.github.io/Quote-Generator/",
    image: require("../images/quote-project-dp.jpg"),
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{backgroundColor: "#FAFBFD"}}>
      <h2 style={{ textAlign: "center", fontFamily: "garamond" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row-reverse", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "50%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "95%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div style={{maxwidth:"100%"}} className="box" key={project.title}>
              <img src={project.image} style={{maxWidth:"100%"}} alt="project-dp"></img>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px", fontFamily: "garamond", marginTop: "1em"}}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
