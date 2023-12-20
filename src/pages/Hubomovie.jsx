import React, { useState } from 'react'
import Navbar from '../components/Navbar';
export default function hubomovie() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ isScrolled, setisScrolled] = useState(false);
  window.onscroll = ()=>{
    setisScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }
  return <div>
    <Navbar isScrolled = {isScrolled} />
    </div>
  
}
