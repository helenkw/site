import React from 'react';

import '../Styles/Home.css';
import ProfileImg from "../Assets/helen.png";

import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const Home = () => (
  <Grid className='home-grid'>
    <Grid container className='home-container'>

      <Grid item xs={12} md={4}>
        <img src={ProfileImg} className='profileimg' alt='helen' /> 
        <p className='hello'>Hello, I'm Helen!</p>

        <a href='https://github.com/helenkw' target='_blank' rel='noopener noreferrer'>
          <GitHubIcon fontSize='small' className='home-icon' /></a> 
        <a href='https://twitter.com/helenwang07' target='_blank' rel='noopener noreferrer'>
          <TwitterIcon fontSize='small' className='home-icon' /></a> 
        <a href='https://www.linkedin.com/in/helenkwang/' target='_blank' rel='noopener noreferrer'>
          <LinkedInIcon fontSize='small' className='home-icon' /></a> 
        <a href='mailto:helenwang@mit.edu' target='_blank' rel='noopener noreferrer'>
          <EmailIcon fontSize='small' className='home-icon' /></a> 
      </Grid>

      <Grid item xs={12} md={8} className='bio'>
        <p>
          I study computer science at MIT. 
          This summer, I'm working with the Enterprise Engineering team at Two Sigma. 
          In the past, I've conducted research in math and CS at Texas State University.
          <br/> <br/>
          On campus, I'm involved with {' '} 
          <a href='https://hackmit.org/' target='_blank' rel='noopener noreferrer'>
            HackMIT</a>, {' '} 
          <a href='https://campkesem.org/find-a-camp/camp-kesem-at-mit' target='_blank' rel='noopener noreferrer'>
            Camp Kesem</a>, and the {' '} 
          <a href='https://www.instagram.com/mitclassof2024/' target='_blank' rel='noopener noreferrer'>
            MIT 2024 Class Council</a>. {' '} 
          I enjoy graphic design and working through my list of unread books, {' '} 
          and there's also a good chance you'll find me biking around Boston or making redundant spreadsheets.
          <br/> <br/>
          Reach me at <a href='mailto:helenwang@mit.edu'>helenwang@mit.edu</a>; I'm happy to talk! 

          <p className='note'><br/>This site's currently a work in progress—feel free to reach out about anything!</p>
        </p>
      </Grid>

    </Grid>
  </Grid>
);

export default Home;