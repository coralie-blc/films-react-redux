import React from 'react';

import { Card } from 'react-bootstrap';

 import {connect} from 'react-redux';

// 1 - Composant de présentation
const FilmDetail = ({
  currentView,
  currentFilm,
  handleClickAccueil
  }) => {
    return (
      <div>
      <button className="accueil-button" onClick={handleClickAccueil}>Retour Accueil</button>
      <div className="fiche-film">
      <h3 className="film-title-details">{currentFilm.title} - {currentFilm.year}</h3>
        {/* <div>
          <p className="title">{film.title} - {film.year}</p>
        </div> */}

        <div>
        <p>{currentFilm.author}</p>
        </div>

        <div>
          <p>{currentFilm.synopsis}</p>
        </div>
        
        <div>
          <p>{currentFilm.registered}</p>
        </div>

        <div>
          <img src="https://picsum.photos/200/300"/>
        </div>

        <div>
          <p className="id-currentFilm">{currentFilm._id}</p>
        </div>
      </div>
    </div>
  );
}


// LECTURE
const mapStateToProps = (state) => {
  const { currentView, currentFilm } = state;
   return {
     currentView,
     currentFilm
   }
 };


// ECRITURE
const mapDispatchToProps = (dispatch) => {
  return {
  handleClickAccueil: () => {
    dispatch({ type: 'GO_ACCUEIL'});
  }
  };
};




// 2 - Composant Container qui fourni les props !!
const FilmDetailContainer = connect(
  mapStateToProps, // stratégie de lecture depuis le store/state, logique de mapping
  mapDispatchToProps          // stratégie d'écriture dans le store/state
)(FilmDetail);
export default FilmDetailContainer;
