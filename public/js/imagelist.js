ImageGallery.ImageList = (function(){

  var images = kendo.observable({
    imageCount: 0,

    scrollingSize: function(){
      console.log("scroll size update");
      var imageCount = this.get("imageCount");
      var size = imageCount * 160;
      return size + "px";
    },

    imageClicked: function(e){
      e.preventDefault();
      var id = $(e.currentTarget).data("id");
      ImageGallery.Router.navigate("/images/" + id);
    },

    setImageSource: function(imageDataSource){
      var that = this;
      this.imageSource = imageDataSource;
      this.imageSource.bind("change", function(){
        console.log("data source change", this.view().length);
        that.set("imageCount", this.view().length);
      });
    }
  });

  var ImageList = {
    init: function(imageDataSource){
      images.setImageSource(imageDataSource);
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
