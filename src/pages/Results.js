import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import { Link, Redirect } from "react-router-dom";
import Response from "../response";
import "./results.css";
import Search from "../components/Search";

import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import AppsIcon from "@material-ui/icons/Apps";

function Results() {
  const [{ term }, dispatch] = useStateValue();

  var { data } = useGoogleSearch(term);

  // Mock
  // const data = Response;

  if (term === "") {
    return <Redirect to='/' />;
  }

  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <div className='searchPage__headerLeft'>
          <Link to='/'>
            <img
              className='searchPage_logo'
              src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
              alt='Google Logo'
            />
          </Link>

          <div className='searchPage_bar'>
            <Search hideButtons term={term} />
            <div className='searchPage__options'>
              <div className='searchPage__optionsLeft'>
                <div id='all' className='searchPage__option selected '>
                  <div
                    style={{ maxWidth: 16, paddingBottom: 10, marginRight: 3 }}>
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
                  <Link>All</Link>
                </div>
                <div id='maps' className='searchPage__option'>
                  <RoomOutlinedIcon />
                  <Link>Maps</Link>
                </div>
                <div id='news' className='searchPage__option '>
                  <DescriptionOutlinedIcon />
                  <Link>News</Link>
                </div>
                <div id='images' className='searchPage__option'>
                  <ImageOutlinedIcon />
                  <Link>Images</Link>
                </div>
                <div id='shopping' className='searchPage__option'>
                  <LocalOfferOutlinedIcon />
                  <Link>Shopping</Link>
                </div>
                <div className='searchPage__option'>
                  <MoreVertIcon />
                  <Link>More</Link>
                </div>
              </div>

              <div className='searchPage__optionsRight'>
                <div className='searchPage__option'>
                  <Link>Settings</Link>
                </div>
                <div className='searchPage__option'>
                  <Link>Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='searchPage__headerRight'>
          <AppsIcon />
          <AccountCircleSharpIcon className='avatar' />
        </div>
      </div>

      <div className='searchPage__results'>
        {!data && (
          <p style={{ color: "red" }}>
            Sorry, the API limit has been reached. Here is the results for
            sample query.
          </p>
        )}

        <p className='searchPage__resultsCount'>
          About {data?.searchInformation?.formattedTotalResults} results (
          {data?.searchInformation?.formattedSearchTime} seconds) for {term}
        </p>

        {data?.items.map((item) => (
          <div className='searchPage__result'>
            <a className='searchPage__resultsTitle' href={item.link}>
              <p>{item.title}</p>
            </a>
            <a className='searchPage__resultsLink' href={item.link}>
              {item.pagemap?.cse_image?.length > 0 &&
                item.pagemap?.cse_image[0]?.src && (
                  <img
                    className='searchPage__resultsImage'
                    src={item.pagemap?.cse_image[0]?.src}
                    alt=''
                  />
                )}
              {item.displayLink}
              <span style={{ fontSize: 10, marginBottom: 2 }}>&#9660; </span>
            </a>

            <p className='searchPage__resultsSnippet'>{item.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
