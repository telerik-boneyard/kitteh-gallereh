ImageGallery.ImageList = (function(){

  var images = kendo.observable({
    imageClicked: function(e){
      e.preventDefault();
      var id = $(e.currentTarget).data("id");
      ImageGallery.Router.navigate("/images/" + id);
    }
  });

  var ImageList = {
    init: function(imageDataSource){
      images.imageSource = imageDataSource;
    },

    getImageListView: function(){
      return new kendo.View("image-listview-template", {
        wrap: false,
        model: images
      });
    }
  };

  return ImageList;
})();
