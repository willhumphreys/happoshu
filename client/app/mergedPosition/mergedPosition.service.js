'use strict';

angular.module('happoshuApp')
    .service('MergedPositionService', function ($http) {
        this.getMergedPositions = function (searchOptions) {
            console.log('Getting mergedPositions' + searchOptions.contract);
            var mergedPositionUrl = 'http://localhost:9000/api/mergedPositions';

            if (searchOptions.contract != null) {
                mergedPositionUrl = mergedPositionUrl + '?contract=' + searchOptions.contract;
            }

            return $http({
                method: 'GET',
                url: mergedPositionUrl
            });
        }
    });
