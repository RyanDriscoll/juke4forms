'use strict';

/* ARTISTS (PLURAL) CONTROLLER */

juke.controller('PlaylistsCtrl', function ($scope, PlaylistFactory) {
	$scope.createPlaylist = function (data) {
    return PlaylistFactory.create(data);
  };
  $scope.setClean = function() {
  	$scope.playlistSubmission.$dirty = false;
  	$scope.newPlaylist = "";
  };

});
