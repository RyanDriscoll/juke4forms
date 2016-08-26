'use strict';

juke.controller('SidebarCtrl', function ($scope, PlaylistFactory) {

 PlaylistFactory.fetchAll()
  .then( function (playlists) {
  	$scope.playlists = [];
  	playlists.forEach(function(e) {$scope.playlists.push(e.name)})
  	console.log($scope.playlists, "AND", playlists);
  });


});
