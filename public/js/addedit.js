ImageGallery.AddEdit = (function(){
  var image = kendo.observable({
    url: "",
    name: "",
    description: "",

    addImage: function(e){
      e.preventDefault();

      var data = {
        url: this.get("url"),
        name: this.get("name"),
        description: this.get("description")
      };

      this.imageSource.add(data);
      this.clear();
    },

    cancel: function(e){
      e.preventDefault();
      this.clear();
    },

    clear: function(){
      this.set("url", "");
      this.set("name", "");
      this.set("description", "");
    }
  });
   
  var AddEdit = {

    init: function(imageDataSource){
      image.imageSource = imageDataSource;
    },

    getAddImageView: function(){
      return new kendo.View("add-image-template", {
        model: image
      });
    }
  }

  return AddEdit;
})();
