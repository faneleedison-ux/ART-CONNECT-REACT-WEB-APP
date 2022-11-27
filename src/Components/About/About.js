import React from 'react';
import styled from 'styled-components';
import Logo from './Logo/Logo.png';


const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const About = () => (
  <GridWrapper>
    <h2>
    <div>
      <img src={Logo} alt="logo of company" />
      <h1> VERSION 1.0.0</h1>
    </div>
    </h2>
    <p>Art Connect is a South African business and employment-focused online service that runs on websites and mobile apps.</p>
    <br/>

    <p>The platform, which was introduced in November 2022, is largely used for networking and professional development by aspiring creatives and professionals. </p>
    <br/>
    
    <p>It enables both job seekers and employers to advertise jobs and post CVs. </p>
    <br/>
    
    <p>The app also enables users to follow their chosen content creators and use it for entertainment by viewing either free or paid works of art.</p>
    
    <br/>
   
  </GridWrapper>
)