ImageGallery.ImageList = (function(){

  var images = kendo.observable({
    imageCount: 0,

    scrollingSize: function(){
      var imageCount = this.get("imageCount");
      var size = imageCount * 160;
      return size + "px";
    },

    imageClicked: function(e){
      e.preventDefault();
      var id = $(e.currentTarget).data("id");
      this.trigger("selected", id);
    },

    setImageSource: function(imageDataSource){
      var that = this;
      this.imageSource = imageDataSource;
      this.imageSource.bind("change", function(){
        that.set("imageCount", this.view().length);
      });
    }
  });

  var ImageList = {
    init: function(imageDataSource){
      images.setImageSource(imageDataSource);
      images.bind("selected", this.imageSelected.bind(this));
    },

    getImageListView: function(){
      return new kendo.View("image-listview-template", {
        tagName: "ul",
        model: images
      });
    },

    imageSelected: function(id){
      ImageGallery.Router.navigate("/images/" + id);
    }
  };

  return ImageList;
})();
