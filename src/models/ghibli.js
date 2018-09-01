const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Ghibli = function (url) {
  this.url = url;
  this.films = []
};


Ghibli.prototype.getFilms = function(){
  const request = new Request(this.url);
  request.get()
  .then(data => this.handleData(data))
  .catch((err) => {
    console.error(err);
  })
};


Ghibli.prototype.handleData = function(data){
  this.films = data;
  PubSub.publish("Ghibli:data-loaded", this.films);
};

module.exports = Ghibli;
