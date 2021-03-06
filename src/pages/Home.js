import React from "react";
import "./home.css";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import { Link } from "react-router-dom";
// eslint-disable-next-line
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";

function Home() {
  return (
    <>
      <div className='home'>
        <div className='home__header'>
          <div className='home__headerLeft'>
            <Link to='/about'>About</Link> <Link to='/store'>Store</Link>
          </div>
          <div className='home__headerRight'>
            <Link to='/gmail'>Gmail</Link> <Link to='/images'>Images</Link>
            <AppsIcon />
            <AccountCircleSharpIcon className='avatar' />
            {/* <Avatar className='avatar' /> */}
          </div>
        </div>

        <div className='home__body'>
          <img
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            alt='Google Logo'
          />

          <div className='home__seachContainer' style={{ marginTop: 40 }}>
            <Search />
          </div>
        </div>
      </div>

      <footer className='author'>
        <a href='https://github.com/kaustubh285'>
          <p>Developed by Kaustubh Deshpande</p>
        </a>
      </footer>
    </>
  );
}

export default Home;
