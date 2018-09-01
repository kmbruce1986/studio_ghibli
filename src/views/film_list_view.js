const PubSub = require('../helpers/pub_sub.js');

const FilmList = function () {

}

FilmList.prototype.bindEvents = function () {
  PubSub.subscribe("Ghibli:data-loaded", (event) => {
    const film = event.detail;
    console.log(film);
  })
};

module.exports = FilmList;
