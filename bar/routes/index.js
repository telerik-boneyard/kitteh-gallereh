exports.index = function(req, res){
  var imageArray = getImages();
  res.render('layout', {images: imageArray});
};

exports.getImages = function(req, res){
  res.send(JSON.stringify(getImages()));
};

exports.getImageById = function(req, res){
  var id = req.params.id;
  var image = getImageById(id);
  res.send(JSON.stringify(image));
};

exports.createImage = function(req, res){
  var image = createImage(req.body);
  res.send(JSON.stringify(image));
};

exports.updateImage = function (req, res){
  var image = updateImage(req.body);
  res.send(JSON.stringify(image));
};

exports.deleteImage = function(req, res){
  var image = deleteImage(req.params.id);
  res.send(JSON.stringify({}));
};

// --------------------

function getImages(){
  var imgs = [];
  for (var imgId in images){
    if (images.hasOwnProperty(imgId)){
      imgs.push(images[imgId]);
    }
  }
  return imgs;
}

function getImageById(id){
  return images[id];
}

function createImage(data){
  var image = data;

  maxId += 1;
  image.id = maxId;

  images[image.id] = image;

  return image;
}

function updateImage(data){
  var image = data;

  images[image.id] = image;

  return image;
}

function deleteImage(id){
  delete images[id];
}

var maxId = 4;
var images = {};

images[1] = {
  id: 1,
  url: "http://placekitten.com/300/200",
  name: "KITTEH",
  description: "sooooo cutez!"
}

images[2] = {
  id: 2,
  url: "http://placekitten.com/301/200",
  name: "nuther KITTEH",
  description: "fuzzy cutez!"
}

images[3] = {
  id: 3,
  url: "http://placekitten.com/300/201",
  name: "MOAR KITTEH",
  description: "also cutez!"
}

images[4] = {
  id: 4,
  url: "http://placekitten.com/301/201",
  name: "THIS KITTEH",
  description: "sooooo cutez, TOO!"
}

