var ImageGallery = (function(){
  var App = {};

  App.init = function(imageData){
    var imageDataSource = new kendo.data.DataSource({
      data: imageData
    });

    imageDataSource.read();
    ImageGallery.Controller.init(imageDataSource);
    ImageGallery.Router.start();
  };

  return App;
})();
