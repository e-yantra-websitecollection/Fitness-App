import React from 'react';
import { Outlet } from "react-router-dom";
// import ScrollToTop from "react-scroll-to-top";
// import Navbar from '../../components/Navbar/Nav';
// import Footer from '../../components/Footer/Footer';
// import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';


// import Footer from '../../components/Footer/Footer';
function RootLayout() {
  return (
    <>
      {/* <Navbar /> */}

      
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default RootLayout