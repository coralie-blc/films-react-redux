import React from 'react';
import {connect} from 'react-redux';

// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

import SearchFilmDetail from 'src/components/SearchFilmDetail';

// 1 - Composant de présentation
const Result = ({
  film,
  openDetail,
  handleClickAccueil
  }) => {   
  const img = film.poster_path;
  const url = "https://image.tmdb.org/t/p/original" + img;

 return <div className="result">
  <button className="accueil-button" onClick={handleClickAccueil}>Retour Accueil</button>
  <Card className="card-search-film" key={film._id} onClick={() => openDetail(film)}>
    <Card.Img className="img-list" variant="top" src={url} />
    <Card.Body>
      <Card.Title>{film.original_title}</Card.Title>
      
    </Card.Body>
  </Card>
</div>;
};



// LECTURE
const mapStateToProps = (state) => {
  const { film, currentView } = state
   return {
    film,
    currentView
  }
};

  
  // ECRITURE
  const mapDispatchToProps = (dispatch) => {
  return {
    openDetail: (film) => {
      dispatch({ type: 'OPEN_DETAIL_SEARCH_FILM', film});
   },
   handleClickAccueil: () => {
    dispatch({ type: 'GO_ACCUEIL'});
  }
  };
};




// 2 - Composant Container qui fourni les props !!
const ResultContainer = connect(
  mapStateToProps, // stratégie de lecture depuis le store/state, logique de mapping
  mapDispatchToProps          // stratégie d'écriture dans le store/state
)(Result);
export default ResultContainer;
