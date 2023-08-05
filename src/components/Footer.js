import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
        </div>
        <p>Ali Cem GEZER</p>
        <p> &copy; 2023</p>
    </div>
  )
}

export default Footer