import React from 'react';
import imgSpinner from '../assets/Preloader.gif'

function Spinner() {
  return (
    <img src={imgSpinner} alt='Loading...' style={{width:400,display:'block',margin:'auto'}} />
  )
}

export default Spinner