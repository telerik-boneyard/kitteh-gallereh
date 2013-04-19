ImageGallery.Controller = (function(){

  var obj = kendo.observable({
    selectedImageId: 0
  });

  var Controller = {

    init: function(imageDataSource){
      this.imageSource = imageDataSource;

      var that = this;
      this.imageSource.bind("change", function(){
        that.showImageById(obj.get("selectedImageId"));
      });

      ImageGallery.ImageList.init(imageDataSource);
      ImageGallery.AddEdit.init(imageDataSource);

      this.showLayout();
      this.showImageList();
    },

    addImage: function(){
      var addImageView = ImageGallery.AddEdit.getAddImageView();
      this.layout.showIn("#main", addImageView);
    },

    editImageById: function(id){
      this._getById(id, function(image){
        var editImageView = ImageGallery.AddEdit.getEditImageView(image);
        this.layout.showIn("#main", editImageView);
      });
    },

    showImageById: function(id){
      this._getById(id, function(image){
        var showImageView = ImageGallery.ImageViewer.getImageView(image);
        this.layout.showIn("#main", showImageView);
      });
    },

    showLayout: function(){
      this.layout = new kendo.Layout("gallery-layout-template");
      this.layout.render("body")
    },

    showImageList: function(){
      var imageListView = ImageGallery.ImageList.getImageListView();
      this.layout.showIn("#image-list", imageListView);
    },

    _getById: function(id, callback){
      var image = this.imageSource.get(id);
      obj.set("selectedImageId", id);

      if (image){
        callback.call(this, image);
      }
    }

  };

  return Controller;
})();
