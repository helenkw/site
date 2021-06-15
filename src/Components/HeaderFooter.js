import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/HeaderFooter.css';

import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import BuildIcon from '@material-ui/icons/Build';

const Header = () => (
	<div className='stuck header-container'>
	  <Hidden xsDown>
      <Link to='/' className='header-name'>HELEN WANG</Link>
	  </Hidden>

    <div className='navigation'>
    </div>
	</div>
);

const Footer = () => (
	<div className='stuck footer-container'>
	  <div className='footer-info'>

		  <Hidden xsDown>
		    <Tooltip title='Source code' TransitionComponent={Zoom} arrow>
	        <a href='https://github.com/helenkw/site' target='_blank' rel='noopener noreferrer'>
	          <BuildIcon fontSize='small' className='home-icon'/></a> 
		    </Tooltip>
		  </Hidden>

	  </div>
	</div>
);

export { Header, Footer };