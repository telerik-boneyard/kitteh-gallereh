ImageGallery.Router = (function(){
  var Router = new kendo.Router();

  Router.route("/", function(){
    ImageGallery.Controller.addImage();
  });

  Router.route("/images/:id", function(id){
    ImageGallery.Controller.showImageById(id);
  });

  return Router;
})();
