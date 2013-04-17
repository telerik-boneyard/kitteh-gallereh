ImageGallery.Controller = (function(){
  var Controller = {

    init: function(imageDataSource){
      this.imageSource = imageDataSource;

      ImageGallery.ImageList.init(imageDataSource);
      ImageGallery.AddEdit.init(imageDataSource);

      this.showLayout();
      this.showImageList();
    },

    addImage: function(){
      var addImageView = ImageGallery.AddEdit.getAddImageView();
      this.layout.showIn("#main", addImageView);
    },

    showImageById: function(id){
      var image = this.imageSource.get(id);
      var showImageView = ImageGallery.ImageViewer.getImageView(image);
      this.layout.showIn("#main", showImageView);
    },

    showLayout: function(){
      this.layout = new kendo.Layout("gallery-layout-template");
      this.layout.render("body")
    },

    showImageList: function(){
      var imageListView = ImageGallery.ImageList.getImageListView();
      this.layout.showIn("#image-list", imageListView);
    }
  }

  return Controller;
})();