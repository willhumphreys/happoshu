'use strict';

angular.module('happoshuApp')
    .service('MergedPositionService', function ($http) {
        this.getMergedPositions = function (searchOptions) {
            console.log('Getting mergedPositions' + searchOptions);
            return $http({
                method: 'GET',
                url: 'http://localhost:9000/api/mergedPositions'
            });
        }
    });
