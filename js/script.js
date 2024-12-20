// init Masonry
var grid = document.querySelector(".masonary-grid");

var msnry = new Masonry(grid, {
  itemSelector: ".grid-item",
  percentPosition: true,
});

imagesLoaded(grid).on("progress", function () {
  // layout Masonry after each image loads
  msnry.layout();
});
