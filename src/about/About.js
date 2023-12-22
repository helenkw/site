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
      <AboutIcon href="mailto:helenwang@mit.edu" icon={EmailIcon} />
    </Grid>
    <Grid item xs={12} md={7} className="bio">
      <p>
        I study computer science and political science at MIT. I've worked on trading
        systems during internships at{" "}
        <Link href="https://www.twosigma.com/" className="c1">
          Two Sigma
        </Link>{" "}
        and{" "}
        <Link href="https://fiverings.com/" className="c1">
          Five Rings
        </Link>
        , and most recently I helped build emissions calculators at the climate
        startup{" "}
        <Link href="https://watershed.com/" className="c1">
          Watershed
        </Link>
        .
        <br /> <br />
        On campus, I'm{" "}
        <Link href="https://bc.mit.edu/" className="c2">
          involved
        </Link>{" "}
        in a{" "}
        <Link href="http://ua.mit.edu/" className="c2">
          handful
        </Link>{" "}
        of{" "}
        <Link href="https://dancetroupe.mit.edu/" className="c2">
          student
        </Link>{" "}
        <Link href="https://www.instagram.com/mitclassof2024/" className="c2">
          clubs
        </Link>
        , and I used to be a{" "}
        <Link href="https://hackmit.org" className="c2">
          HackMIT
        </Link>{" "}
        organizer. I enjoy graphic design and working through my list of{" "}
        <Link href="https://www.goodreads.com/helenkw" className="c2">
          unread books
        </Link>
        , and there's also a good chance you'll find me taking long walks through
        Boston or making spreadsheets.
        <br /> <br />
        Reach me at{" "}
        <a href="mailto:helenwang@mit.edu" className="c3">
          helenwang@mit.edu
        </a>
        ; I'm happy to talk!
      </p>
    </Grid>
  </Grid>
);

export default About;
