'use strict';

juke.factory('PlaylistFactory', function($http) {

    var cachedPlaylists = [];

    var PlaylistFactory = {};

    PlaylistFactory.fetchAll = function() {
        return $http.get('/api/playlists')
            .then(function(response) {
                angular.copy(response.data, cachedPlaylists);
                return cachedPlaylists;
            });
    };

    PlaylistFactory.fetchById = function(id) {
        return $http.get('/api/playlists/' + id)
            .then(function(res) {
                return res.data;
              })
            .then(function(playlist) {
                return playlist;
              });
    };
    //   	return $http.get('/api/albums/' + id)
    //   .then(function (response) { return response.data; })
    //   .then(AlbumFactory.convert)
    //   .then(function (album) {
    //     album.songs = album.songs.map(SongFactory.convert);
    //     return album;
    //   });
    // };

    PlaylistFactory.create = function(data) {
        return $http.post('/api/playlists', data)
            .then(function(response) {
                var playlist = response.data
                cachedPlaylists.push(playlist);
                return playlist;
            });
    };

    return PlaylistFactory;


});
