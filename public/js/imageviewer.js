ImageGallery.ImageViewer = {

  getImageView: function(image){
    return new kendo.View("image-view-template", {
      wrap: false,
      model: image
    });
  }

};
