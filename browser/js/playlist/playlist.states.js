'use strict';

juke.config(function($stateProvider) {

    $stateProvider.state('newPlaylist', {
        url: '/playlists/new',
        templateUrl: '/js/playlist/templates/playlist.html',
        controller: 'PlaylistsCtrl'
            // resolve: {
            //   // load list of all playlists
            // }
    });

    $stateProvider.state('singlePlaylist', {
    url: '/playlists/:playlistId',
    templateUrl: '/js/playlist/templates/single.playlist.html',
    controller: 'PlaylistsCtrl',
    resolve: {
      thePlaylist: function (PlaylistFactory, $stateParams) {
        return PlaylistFactory.fetchById($stateParams.playlistId);
      }
    }
  });
});
