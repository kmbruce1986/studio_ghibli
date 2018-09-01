const Ghibli = require('./models/ghibli.js');
const FilmList = require('./views/film_list_view.js');
const FilmView = require('./views/film_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const filmListContainer = document.querySelector("#films");
  const filmList = new FilmList(filmListContainer);
  filmList.bindEvents();

  const ghibli = new Ghibli('https://ghibliapi.herokuapp.com/films');
  ghibli.getFilms();
});
