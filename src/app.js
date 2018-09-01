const Ghibli = require('./models/ghibli.js');
const FilmList = require('./views/film_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("js loaded");
  const filmList = new FilmList();
  filmList.bindEvents();

  const ghibli = new Ghibli('https://ghibliapi.herokuapp.com/films');
  ghibli.getFilms();
});
