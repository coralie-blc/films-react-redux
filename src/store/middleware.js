import axios from 'axios';

export default store => next => action => {

  switch(action.type) {
    case 'SEARCH_FILM_SEND': {
      const state = store.getState()

      const currentSearch = state.currentSearchFilm;

      axios.get('https://api.themoviedb.org/3/search/movie?api_key=89f5514cb2e1944c5d90e71387d1b73b&query='+currentSearch+'&language=fr')
      .then(response => {
        const filmDatas = response.data.results[0]
        store.dispatch( {type: 'ADD_FILM', filmDatas});
      }).catch(error => {
        console.log(error);
      })
      return;
    }   
  }

  next(action);
};
