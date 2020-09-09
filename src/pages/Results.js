import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import { Link } from "react-router-dom";
import Response from "../response";
import "./results.css";
import Search from "../components/Search";

import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

function Results() {
  const [{ term }, dispatch] = useStateValue();

  // const data = useGoogleSearch(term); LIVE

  const data = Response;

  console.log(data);

  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <Link to='/'>
          <img
            className='searchPage_logo'
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            alt='Google Logo'
          />
        </Link>

        <div className='searchPage_bar'>
          <Search hideButtons />
          <div className='searchPage__options'>
            <div className='searchPage__optionsLeft'>
              <div className='searchPage__option selected '>
                <div style={{ maxWidth: 16, paddingBottom: 7 }}>
                  <span class='' style={{ height: 8, width: 8 }}>
                    <svg focusable='false' viewBox='0 0 24 24'>
                      <path
                        fill='#34a853'
                        d='M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8'></path>
                      <path
                        fill='#ea4335'
                        d='M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6'></path>
                      <path
                        fill='#fbbc04'
                        d='M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6'></path>
                      <path
                        fill='#4285f4'
                        d='M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59'></path>
                    </svg>
                  </span>
                </div>
                <Link to='/all'>All</Link>
              </div>
              <div className='searchPage__option'>
                <DescriptionOutlinedIcon />
                <Link to='/all'>News</Link>
              </div>
              <div className='searchPage__option'>
                <ImageOutlinedIcon />
                <Link to='/all'>Images</Link>
              </div>
              <div className='searchPage__option'>
                <LocalOfferOutlinedIcon />
                <Link to='/all'>Shopping</Link>
              </div>
              <div className='searchPage__option'>
                <RoomOutlinedIcon />
                <Link to='/all'>Maps</Link>
              </div>
              <div className='searchPage__option'>
                <MoreVertIcon />
                <Link to='/all'>More</Link>
              </div>
            </div>

            <div className='searchPage__optionsRight'>
              <div className='searchPage__option'>
                <Link to='/all'>Settings</Link>
              </div>
              <div className='searchPage__option'>
                <Link to='/all'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='searchPage__results'></div>
    </div>
  );
}

export default Results;
