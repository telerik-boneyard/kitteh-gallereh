$(function(){

  var image = kendo.observable({
    url: "http://placekitten.com/300/200",

    imageDataSource: new kendo.data.DataSource({
      transport: {
        read: {
          url: "/images",
          dataType: "JSON"
        }
      }
    }),

    imageClicked: function(e){
      var index = e.sender.select().index();
      var image = this.imageDataSource.view()[index];

      this.set("url", image.url);
    }
  });

  var listView = new kendo.View("kitteh-list-template", {
    model: image
  });

  var listHtml = listView.render();
  $("#image-list").html(listHtml);

  var kittehView = new kendo.View("kitteh-view-template", {
    model: image
  });

  var html = kittehView.render();
  $("#main").html(html);

});
