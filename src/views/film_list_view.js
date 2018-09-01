const PubSub = require('../helpers/pub_sub.js');
const FilmView = require('./film_view.js');

const FilmList = function (container) {
  this.container = container;
}

FilmList.prototype.bindEvents = function () {
  PubSub.subscribe("Ghibli:data-loaded", (event) => {
    this.films = event.detail;
    this.render();
    console.log(this.films);

  })
};

FilmList.prototype.render = function() {
  this.films.forEach((film) => {
    const filmView = new FilmView(this.container, film);
    filmView.render();
  })
} 

module.exports = FilmList;
