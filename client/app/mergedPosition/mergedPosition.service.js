'use strict';

angular.module('happoshuApp')
    .service('MergedPositionService', function ($http) {
        this.getMergedPositions = function (searchOptions) {
            console.log('Getting mergedPositions' + searchOptions);

            var mergedPositionUrl = 'http://localhost:9000/api/mergedPositions?';

            return $http({
                method: 'GET',
                url: mergedPositionUrl,
                params: searchOptions
            });
        }
    });
