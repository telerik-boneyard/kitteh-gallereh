$(function(){

  var image = kendo.observable({
    url: "http://placekitten.com/300/200",

    imageDataSource: new kendo.data.DataSource({
      data: [
        {name: "kitteh", url: "http://placekitten.com/300/200"},
        {name: "nuther kitteh", url: "http://placekitten.com/301/200"},
        {name: "cutezee", url: "http://placekitten.com/300/201"},
        {name: "fuzzeh", url: "http://placekitten.com/301/201"}
      ]
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
