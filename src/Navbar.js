import React from 'react'
import newsly from './newsly.png';

export default function Navbar() {
  const NavStyle = {
      backgroundColor: 'deepskyblue',
      textAlign: 'center',
      padding: '0.5rem 0rem'
  };
    
  return (
    <div style={NavStyle}>
        <img src={newsly} alt='newsly' width='150px'/>
    </div>
  )
}
