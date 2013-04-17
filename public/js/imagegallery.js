var ImageGallery = {

  init: function(imageData){
    var imageDataSource = this.configDataSource(imageData);
    imageDataSource.read();

    ImageGallery.Controller.init(imageDataSource);
    ImageGallery.Router.start();
  },

  configDataSource: function(imageData){

    return new kendo.data.DataSource({
      data: imageData,
      schema: {
        model: {
          id: "id",
          name: "string",
          description: "string",
          url: "string"
        }
      },
      transport: {
        create: {
          url: "/images",
          dataType: "json",
          type: "POST"
        },
        read: {
          url: "/images",
          dataType: "json",
          type: "GET"
        },
        update: {
          url: "/images",
          dataType: "json",
          type: "PUT"
        },
        destroy: {
          url: "/images",
          dataType: "JSON",
          type: "DESTROY"
        }
      },
      autoSync: true
    });

  }
};
