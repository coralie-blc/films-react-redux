import React from 'react';
import { Card } from 'react-bootstrap';

const Film = ({films}) => {
  return (
    <h3>Film</h3>,
    films.slice(0, 2).map((film) => {
      return (
        <Card onClick={(e, film) => handleClickFilm(e, film)}>
        <Card.Img className="img-list" variant="top" src="https://picsum.photos/200/300" />
        <Card.Body>
          <Card.Title>{film.title}</Card.Title>
        </Card.Body>
        </Card>
      )
    })
  );
}

export default Film;
