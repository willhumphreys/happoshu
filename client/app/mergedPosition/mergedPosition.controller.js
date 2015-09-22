'use strict';

angular.module('happoshuApp')
    .controller('MergedPositionCtrl', function ($scope, MergedPositionService) {

        $scope.gridOptions2 = {
            enableColumnResizing: true,
            enableSorting: true,
            enableFiltering: true//,
            //  columnDefs: $scope.columns

        };

        MergedPositionService.getMergedPositions().then(function (dataResponse) {

            console.log("Controller getting merged positions");

            $scope.gridOptions2.data = dataResponse.data;
        });
    });
