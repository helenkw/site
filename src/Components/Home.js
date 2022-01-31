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
          I study computer science at MIT. Last summer, I worked with the
          Enterprise Engineering team at Two Sigma. In the past, I've conducted
          research in math and CS at Texas State University, and at MIT, I've
          done work in the intersection of data science and political science.
          <br /> <br />
          On campus, I'm involved with{" "}
          <a
            href="https://hackmit.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HackMIT
          </a>
          , the{" "}
          <a
            href="https://www.instagram.com/mitclassof2024/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT 2024 Class Council
          </a>
          , and the archery club. I enjoy graphic design and working through my
          list of{" "}
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
