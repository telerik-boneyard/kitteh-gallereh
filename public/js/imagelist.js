ImageGallery.ImageList = (function(){

  var images = kendo.observable({
    imageCount: 0,

    scrollingSize: function(){
      var imageCount = this.get("imageCount");
      var size = imageCount * 160;
      return size + "px";
    },

    imageClicked: function(e){
      var index = e.sender.select().index();
      var item = this.imageSource.view()[index];
      console.log(item);
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
