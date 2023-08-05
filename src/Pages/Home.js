import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Ali Cem</h2>
        <div className='prompt'>
          <p> A software developer with a passion for learning and creating</p>
          <EmailIcon />
          <GitHubIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front End</h2>
            <span>React,Redux,Html,Css,Sass,React Native</span>
          </li>
          <li className='item'>
            <h2>Css Library</h2>
            <span>Bulma,Tailwind,Bootstrap,Meterial Ui</span>
          </li>
          <li className='item'>
            <h2>Programming Languages</h2>
            <span>JS</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home