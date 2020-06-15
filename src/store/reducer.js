import films from '../data/films'

const initialState = {
  films: films,
  currentView: 'liste-films',
  currentFilm: '',
  searchFilmEnCours: '',
  currentSearchFilm: '',
  film: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GO_ACCUEIL': {
      return {...state, currentView: 'liste-films'};
    }

    case 'OPEN_DETAIL': {
      return {...state, currentView: 'film-details', currentFilm: action.film};
    }

    case 'OPEN_DETAIL_SEARCH_FILM': {
      return {...state, currentView: 'search-film-details', currentFilm: action.film};
    }

    case 'SEARCH_FILM': {
      return {...state, searchFilmEnCours: action.search, currentSearchFilm:action.search}
    }

    case 'SEARCH_FILM_SEND': {
      // action faite sur le middleware : requete axios.
      return;
    }

    case 'ADD_FILM' : {
      return {...state, film: action.filmDatas, currentView: 'search-result'};
    }

    default : {
      return state;
    }
  }
}

export default reducer;
