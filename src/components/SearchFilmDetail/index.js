import React from 'react';
import {connect} from 'react-redux';

const SearchFilmDetail = ({
  currentFilm,
  handleClickAccueil,
  film
  }) => {
    const img = film.poster_path;
    const url = "https://image.tmdb.org/t/p/original" + img;

    return (
      <>
      <button className="accueil-button" onClick={handleClickAccueil}>Retour Accueil</button>
  
      <div className="fiche-search-film">

        <div className="title-search-film">
          <h3 className="x">{film.original_title}</h3>
          <p className="x">{film.release_date}</p>
        </div>

        <div>
          <img className="poster-search-film" src={url}/>
        </div>


        <div>
        <p>{currentFilm.author}</p>
        </div>

        <div className="film-search-over-id">
          <p>{film.overview}</p>
        </div>

        <div className="id">
          <p className="id-currentFilm">id: {film.id}</p>
        </div>

      </div>
      </>
    );
  }


// LECTURE
const mapStateToProps = (state) => {
  const { currentFilm, film } = state;
   return {
     currentFilm,
     film
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



const SearchFilmDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFilmDetail);
export default SearchFilmDetailContainer;
