'use strict';

juke.factory('PlaylistFactory', function($http, $q) {

    var PlaylistFactory = {};

    function getData(res) {
        return res.data; }

    PlaylistFactory.create = function(data) {
        return $http.post('/api/playlists', data)
            .then(function(res) {
                return res.data;
            })
    };

    PlaylistFactory.fetchAll = function() {
        console.log("we are here!!!!!!!!");
        return $http.get('/api/playlists')
            .then(getData);
    };

return PlaylistFactory;

});
