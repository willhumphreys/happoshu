'use strict';

angular.module('happoshuApp')
    .controller('ExecutionStatsCtrl', function ($scope, ExecutionStatsService) {
        $scope.message = 'Hello';

        $scope.columns =
            [
                {field: '_id', with: '5%', maxWidth: 200, minWidth: 100},
                {field: 'stage', width: '5%', maxWidth: 200, minWidth: 100},
                {field: 'runName', width: '50%', maxWidth: 700, minWidth: 100},
                {field: 'open', width: '5%', maxWidth: 250, minWidth: 200},
                {field: 'close', width: '5%', maxWidth: 250, minWidth: 200},
                {field: 'durationInSeconds', width: '5%', maxWidth: 200, minWidth: 100},
                {field: 'durationInMillis', width: '8%', maxWidth: 200, minWidth: 100},
                {field: 'created', width: '5%', maxWidth: 200, minWidth: 200}


            ];

        $scope.gridOptions2 = {
            enableColumnResizing: true,
            enableSorting: true,
            enableFiltering: true,
            columnDefs: $scope.columns

        };

        ExecutionStatsService.getExecutionStats().then(function (dataResponse) {

            $scope.results2 = dataResponse;
            $scope.gridOptions2.data = dataResponse.data;
        });

    });
