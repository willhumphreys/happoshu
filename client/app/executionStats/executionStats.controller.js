'use strict';

angular.module('happoshuApp')
    .controller('ExecutionStatsCtrl', function ($scope, ExecutionStatsService) {
        $scope.message = 'Hello';

        //$scope.columns =
        //    [
        //        {field: 'runName'},
        //        {field: 'description', width: '5%', maxWidth: 200, minWidth: 100},
        //
        //
        //    ];

        $scope.gridOptions2 = {
            enableColumnResizing: true,
            enableSorting: true,
            enableFiltering: true//,
            //  columnDefs: $scope.columns

        };

        ExecutionStatsService.getExecutionStats().then(function (dataResponse) {

            $scope.results2 = dataResponse;
            $scope.gridOptions2.data = dataResponse.data;
        });

    });
