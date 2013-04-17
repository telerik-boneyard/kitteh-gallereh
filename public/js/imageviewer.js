ImageGallery.ImageViewer = (function(){

  var ImageViewer = {
    getImageView: function(image){
      return new kendo.View("image-view-template", {
        wrap: false,
        model: image
      });
    }
  };

  return ImageViewer;
})();
