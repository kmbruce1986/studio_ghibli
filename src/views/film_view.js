const PubSub = require('../helpers/pub_sub.js');

const FilmView = function (container, film) {
  this.filmsContainer = container;
  this.film = film;
};


FilmView.prototype.render = function () {
  const filmContainer = document.createElement('div');
  filmContainer.classList.add('film');
  const title = this.createFilmHeading();
  filmContainer.appendChild(title);
  const filmsList = this.createFilmDetailsList();
  filmContainer.appendChild(filmsList);
  this.filmsContainer.appendChild(filmContainer);
};

FilmView.prototype.createFilmHeading = function () {
  const title = document.createElement('h2');
  title.classList.add('film-title');
  title.textContent = this.film.title;
  return title;
}

FilmView.prototype.createFilmDetailsList = function () {
  const filmDetailsList = document.createElement('ul');
  filmDetailsList.classList.add('details');
  this.populateList(filmDetailsList);
  return filmDetailsList;
}

FilmView.prototype.populateList = function (list) {
    const filmDirectorListItem = document.createElement('li');
    filmDirectorListItem.textContent = `Director: ${this.film.director}`;
    list.appendChild(filmDirectorListItem);
    const filmProducerListItem = document.createElement('li');
    filmProducerListItem.textContent = `Producer: ${this.film.producer}`;
    list.appendChild(filmProducerListItem);
    const filmReleaseDateListItem = document.createElement('li');
    filmReleaseDateListItem.textContent = `Release Date: ${this.film.release_date}`;
    list.appendChild(filmReleaseDateListItem);

    // const filmLocationsList = document.createElement('ul');
    // this.populateLocationsList(this.film.locations, filmLocationsList);
    // list.appendChild(filmLocationsList);

    const filmDescriptionListItem = document.createElement('li');
    filmDescriptionListItem.textContent = `Description: ${this.film.description}`;
    list.appendChild(filmDescriptionListItem);
  }

//   FilmView.prototype.populateLocationsList = function (locations, list) {
//   locations.forEach((location) => {
//     const listItem = document.createElement('li');
//     listItem.textContent = location.name;
//     list.appendChild(listItem);
//   });
// };


  // filmLocationsListItem.textContent = `Locations: ${this.film.locations}`;
  // list.appendChild(filmLocationsListItem);

module.exports = FilmView;
