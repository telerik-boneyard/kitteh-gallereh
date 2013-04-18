ImageGallery.Controller = (function(){

  var galleryLayout = kendo.observable({
    selectedImageId: 0,

    show: function(){
      this.layout = new kendo.Layout("gallery-layout-template");
      this.layout.render("body")
    },

    showContent: function(view){
      this.layout.showIn("#main", view);
    },

    showList: function(view){
      this.layout.showIn("#image-list", view);
    }

  });

  var Controller = {

    init: function(imageDataSource){
      this.imageSource = imageDataSource;

      var that = this;
      this.imageSource.bind("change", function(){
        that.showImageById(galleryLayout.get("selectedImageId"));
      });

      ImageGallery.ImageList.init(imageDataSource);
      ImageGallery.AddEdit.init(imageDataSource);

      galleryLayout.show();
      this.showImageList();
    },

    addImage: function(){
      var addImageView = ImageGallery.AddEdit.getAddImageView();
      galleryLayout.showContent(addImageView);
    },

    editImageById: function(id){
      this._getById(id, function(image){
        var editImageView = ImageGallery.AddEdit.getEditImageView(image);
        galleryLayout.showContent(editImageView);
      });
    },

    showImageById: function(id){
      this._getById(id, function(image){
        var showImageView = ImageGallery.ImageViewer.getImageView(image);
        galleryLayout.showContent(showImageView);
      });
    },

    showImageList: function(){
      var imageListView = ImageGallery.ImageList.getImageListView();
      galleryLayout.showList(imageListView);
    },

    _getById: function(id, callback){
      var image = this.imageSource.get(id);
      galleryLayout.set("selectedImageId", id);

      if (image){
        callback.call(this, image);
      }
    }
  };

  return Controller;
})();
