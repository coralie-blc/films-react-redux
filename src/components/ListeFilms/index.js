import React from 'react';
import {connect} from 'react-redux';

import { Card } from 'react-bootstrap';

import FilmDetail from 'src/components/FilmDetail';


const ListeFilms = ({
  openDetail,
  films,
  currentView,
  currentFilm,
  }) => {

  return <div className="list-films">
    {currentView === 'liste-films' &&
      films.map((film) => {
        return (
        <Card key={film._id} onClick={() => openDetail(film)}>
          <Card.Img className="img-list" variant="top" src="https://picsum.photos/200/300" />
          <Card.Body>
            <Card.Title>{film.title}</Card.Title>
          </Card.Body>
        </Card>
        )
      })
    }

    {currentView === 'film-details' && 
      <FilmDetail
        film={currentFilm}
      />
    }
  </div>;
};


// LECTURE
const mapStateToProps = (state) => {
  const { films, currentView, exampleItems, pageOfItems } = state;
  
   return {
     films,
     currentView,
     pageOfItems,
     exampleItems,
    }
  };
  
  
  // ECRITURE
  const mapDispatchToProps = (dispatch) => {
  return {
    openDetail: (film) => {
      dispatch({ type: 'OPEN_DETAIL', film});
    },
  };
};



const ListeFilmsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListeFilms);
export default ListeFilmsContainer;
