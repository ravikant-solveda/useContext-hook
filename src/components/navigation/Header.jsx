import React, { useContext, useState } from "react";
import classes from './Header.module.css';
// import {allTheme} from "../context/Context";

const Header = () => {
    // const allTheme = useContext(allTheme);
    const [score, setScore] = useState(false);
    
    
  return (
    <React.Fragment>
      <div className={`${classes.head}`}>
        <ul className={classes.nav}>
          <li><a href="/">Home</a></li>
          <li><a href="about"> About</a></li>
          <li><a href="contact">Contact</a></li>
          <li><a href="faq">FAQ</a></li>
          <li> <a href="presentScore">Present Score</a> </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Header;
