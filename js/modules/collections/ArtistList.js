define(['libs/backbone','models/Artist'],function (Backbone,Artist) {

  var ArtistList = Backbone.Collection.extend({
  	model : Artist
  });

  return ArtistList;
});
