import React from "react";

import "../Styles/Home.css";
import ProfileImg from "../Assets/helen.png";

import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

const Home = () => (
  <Grid className="home-grid">
    <Grid container className="home-container">
      <Grid item xs={12} md={4}>
        <img src={ProfileImg} className="profileimg" alt="helen" />
        <p className="hello">Hello, I'm Helen!</p>

        <a
          href="https://github.com/helenkw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="small" className="home-icon" />
        </a>
        <a
          href="https://twitter.com/helenwang07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon fontSize="small" className="home-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/helenkwang/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="small" className="home-icon" />
        </a>
        <a
          href="mailto:helenwang@mit.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon fontSize="small" className="home-icon" />
        </a>
      </Grid>
      <Grid item xs={12} md={8} className="bio">
        <p>
          I study computer science and political science at MIT.
          I've worked on trading systems during internships at{" "}
          <a
            href="https://www.twosigma.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Two Sigma
          </a>
          {" "}and{" "}
          <a
            href="https://fiverings.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Five Rings
          </a>
          , and most recently I helped build emissions calculators at the climate startup{" "}
          <a
            href="https://watershed.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watershed
          </a>.

          <br /> <br />
          On campus, I'm{" "}
          <a
            href="https://bc.mit.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            involved
          </a>
          {" "}in a{" "}
          <a
            href="http://ua.mit.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            handful
          </a>
          {" "}of{" "}
          <a
            href="https://dancetroupe.mit.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            student
          </a>
          {" "}
          <a
            href="https://www.instagram.com/mitclassof2024/"
            target="_blank"
            rel="noopener noreferrer"
          >
            clubs
          </a>
          , and I used to be a {" "}
          <a
            href="https://hackmit.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HackMIT
          </a>
          {" "}organizer. I enjoy graphic design and working through my list of{" "}
          <a
            href="https://www.goodreads.com/helenkw"
            target="_blank"
            rel="noopener noreferrer"
          >
            unread books
          </a>
          , and there's also a good chance you'll find me taking long walks
          through Boston or making spreadsheets.
          <br /> <br />
          Reach me at <a href="mailto:helenwang@mit.edu">helenwang@mit.edu</a>;
          I'm happy to talk!
        </p>
      </Grid>
    </Grid>
  </Grid>
);

export default Home;
