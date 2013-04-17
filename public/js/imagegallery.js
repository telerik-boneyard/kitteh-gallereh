var ImageGallery = {

  init: function(imageData){
    var imageDataSource = new kendo.data.DataSource({
      data: imageData
    });

    imageDataSource.read();
    ImageGallery.Controller.init(imageDataSource);
    ImageGallery.Router.start();
  }

};
