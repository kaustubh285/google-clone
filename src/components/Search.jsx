import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "./search.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ClearIcon from "@material-ui/icons/Clear";

import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons, term = "" }) {
  const [{}, dispatch] = useStateValue();
  const [searchQuery, setSearchQuery] = useState(term);

  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: searchQuery,
    });

    history.push("/search");
  };

  return (
    <form className='search'>
      <div className='search__input'>
        {!hideButtons && (
          <SearchIcon color='default' className='search__inputIcon' />
        )}
        <input
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery === "" ? (
          !hideButtons ? (
            <MicIcon color='primary' />
          ) : (
            <SearchIcon color='default' className='search__inputIcon' />
          )
        ) : (
          <ClearIcon
            className='search__clearSearch'
            onClick={() => setSearchQuery("")}
          />
        )}
      </div>
      {!hideButtons ? (
        <div className='search__buttons'>
          <Button
            type='submit'
            onClick={search}
            variant='outlined'
            color='default'>
            Google Search
          </Button>
          <Button variant='outlined' color='default'>
            I'm feeling lucky
          </Button>
        </div>
      ) : (
        <div className='search__buttons'>
          <Button
            className='search__buttonsHidden'
            type='submit'
            onClick={search}
            variant='outlined'
            color='default'>
            Google Search
          </Button>
          <Button
            className='search__buttonsHidden'
            variant='outlined'
            color='default'>
            I'm feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
