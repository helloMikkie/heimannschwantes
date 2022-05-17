// https://flickity.metafizzy.co/

var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
//   autoPlay: 1000,
  wrapAround: true,
  pageDots: false

});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.carousel', {
  // options
});