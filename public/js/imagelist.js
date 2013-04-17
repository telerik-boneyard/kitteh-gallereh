ImageGallery.ImageList = (function(){

  var images = kendo.observable({
    scrollingSize: function(){
      var imageSource = this.get("imageSource");
      var size = imageSource.total() * 160;
      return size + "px";
    },

    imageClicked: function(e){
      e.preventDefault();
      var id = $(e.currentTarget).data("id");
      ImageGallery.Router.navigate("/images/" + id);
    }
  });

  var ImageList = {
    init: function(imageDataSource){
      images.set("imageSource", imageDataSource);
    },

    getImageListView: function(){
      return new kendo.View("image-listview-template", {
        tagName: "ul",
        model: images
      });
    }
  };

  return ImageList;
})();
