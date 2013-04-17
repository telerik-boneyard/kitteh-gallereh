var ImageGallery = {

  init: function(){
    var imageDataSource = this.configDataSource();
    imageDataSource.read();

    ImageGallery.Controller.init(imageDataSource);
    ImageGallery.Router.start();
  },

  configDataSource: function(){

    return new kendo.data.DataSource({
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
