'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('newPlaylist', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlaylistsCtrl'
    // resolve: {
    //   allPlaylists: function (PlaylistFactory) {
    // //     return PlaylistFactory.fetchAll();
    // //   }
    // }
  });
});
