import React from "react";

import "./About.css";
import Link from "../utility/Link";
import ProfileImg from "./helen.png";

import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

const AboutIcon = ({ href, icon: Icon }) => (
  <Link href={href} className="c2">
    <Icon fontSize="small" className="icon" />
  </Link>
);

const About = () => (
  <Grid container className="page-container" id="about">
    <Grid item xs={12} md={5} className="photo">
      <img src={ProfileImg} className="profileimg" alt="helen" />
      <p className="hello">Hello, I'm Helen!</p>

      <AboutIcon href="https://github.com/helenkw" icon={GitHubIcon} />
      <AboutIcon href="https://twitter.com/helenwang07" icon={TwitterIcon} />
      <AboutIcon
        href="https://www.linkedin.com/in/helenkwang/"
        icon={LinkedInIcon}
      />
      <AboutIcon href="mailto:helenkw@alum.mit.edu" icon={EmailIcon} />
    </Grid>
    <Grid item xs={12} md={7} className="bio">
      <p>
        I'm a software engineer at the climate startup{" "}
        <Link href="https://watershed.com/" className="c1">
          Watershed
        </Link>
        , where I help build emissions calculators.
        In past internships, I worked on trading systems at{" "}
        <Link href="https://www.twosigma.com/" className="c1">
          Two Sigma
        </Link>{" "}
        and{" "}
        <Link href="https://fiverings.com/" className="c1">
          Five Rings
        </Link>
        .
        <br /> <br />

        I recently graduated from MIT with a double major in
        computer science and political science. 

        On campus, I was deeply involved in student government 
        and served as a{" "}
        <Link href="https://hackmit.org" className="c2">
          HackMIT
        </Link>{" "}
        organizer. 
        <br /> <br />
        
        I enjoy graphic design and working through my list of{" "}
        <Link href="https://www.goodreads.com/helenkw" className="c3">
          unread books
        </Link>
        , and there's also a good chance you'll find me climbing, crocheting, 
        or making spreadsheets. 
      </p>
    </Grid>
  </Grid>
);

export default About;
