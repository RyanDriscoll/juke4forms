'use strict';

juke.controller('SidebarCtrl', function($scope, PlaylistFactory) {

    PlaylistFactory.fetchAll()
        .then(function(cachedPlaylists) {
        	// console.log(playlists)
            $scope.playlists = cachedPlaylists;
            // playlists.forEach(function(e) { $scope.playlists.push(e.name) })
        });


});
