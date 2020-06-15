import React from 'react';
import {connect} from 'react-redux';


import Result from 'src/components/Result';
import SearchFilmDetail from 'src/components/SearchFilmDetail';
import ListeFilms from 'src/components/ListeFilms';

import { Navbar, Form, FormControl} from 'react-bootstrap';


const Search = ({
  films = films,
  handleChange,
  handleSubmit,
  currentSearchFilm,
  currentView,
  film
  }) => {    
 return <div className="test">
 <div className="search-nav">
  <Navbar bg="light" expand="lg">
    <Navbar.Collapse id="basic-navbar-nav">
      <Form 
        inline
        onSubmit={handleSubmit}
      >
        <FormControl
          type="text" 
          placeholder="Votre recherche" 
          className="mr-sm-2" 
          onChange={handleChange}
          value={currentSearchFilm}
          />
          <p>Press Enter</p>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  </div>
    {currentView === 'search-result' && 
      < Result />
    }
    
    {currentView === 'search-film-details' && 
      <SearchFilmDetail
        film={film}
      />
    }

    <ListeFilms />
  </div>;
};


// LECTURE
const mapStateToProps = (state) => {
  const {searchFilmEnCours, currentView } = state;
   return {
    searchFilmEnCours,
    currentView
  }
};

  
  // ECRITURE
  const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => {
      const search = e.target.value
      dispatch( { type: 'SEARCH_FILM', search }); 
    },

    handleSubmit: (e) => {
      e.preventDefault();
      dispatch({ type: 'SEARCH_FILM_SEND'})   
    }
  };
};



const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
export default SearchContainer;
