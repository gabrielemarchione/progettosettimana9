import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import React from 'react';
class Saga extends Component {
  state = {
    films: [],
    isLoading: true,
  };

  componentDidMount = () => {
    this.fetchFilms();
  };

  fetchFilms = () => {
    fetch(`https://www.omdbapi.com/?apikey=17c32352&s=${this.props.saga}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("La chiamata non è andata a buon fine");
        }
      })
      .then((search) => {
        console.log("FILM RECUPERATE DAL SERVER", search);
        this.setState({
          films: search.Search,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log("ERRORE NEL RECUPERO DATI ", err);
      });
  };

  render() {
    return (
      <>
        <h4 className="mb-4">{this.props.saga}</h4>
        <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-6 mb-5 franco latos justify-content-between">
          {this.state.films.map((film, i) => {
            if(i < 6){
            return (
              <>
                <Col key={film.imdbID} className="col mb-2 text-center px-1" >
                  <img src={film.Poster} />
                  <p className="text-center mt-2 titoloFilm">{film.Title}</p>
                </Col>
              </>
            )};
          })}
        </Row>
      </>
    );
  }
}

export default Saga;
