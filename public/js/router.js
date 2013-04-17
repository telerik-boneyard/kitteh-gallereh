ImageGallery.Router = (function(){
  var Router = new kendo.Router();

  Router.route("/", function(){
    Router.navigate("/images/new");
  });

  Router.route("/images/new", function(){
    ImageGallery.Controller.addImage();
  });

  Router.route("/images/:id", function(id){
    ImageGallery.Controller.showImageById(id);
  });

  Router.route("/images/:id/edit", function(id){
    ImageGallery.Controller.editImageById(id);
  });

  return Router;
})();
