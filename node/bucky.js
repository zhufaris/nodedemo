var movie = require('./movie.js');

var emily = movie();
emily.favMovie = 'The Notebook';
console.log("Emily likes " + emily.favMovie);