'use strict';

angular.module('happoshuApp')
    .service('MergedPositionService', function ($http) {
        this.getMergedPositions = function () {
            console.log('Getting mergedPositions');
            return $http({
                method: 'GET',
                url: 'http://localhost:9000/api/mergedPositions'
            });
        }
    });
