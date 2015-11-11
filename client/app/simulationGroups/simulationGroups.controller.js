'use strict';

angular.module('happoshuApp')
    .controller('SimulationGroupsCtrl', function ($scope, SimulationGroupsService) {

        $scope.columns =
            [
                {field: 'runName'},
                {field: 'description', width: '40%', maxWidth: 600, minWidth: 100},
                {field: 'dirty'}


            ];

        $scope.gridOptions2 = {
            enableColumnResizing: true,
            enableSorting: true,
            enableFiltering: true,
            columnDefs: $scope.columns

        };

        SimulationGroupsService.getSimulationGroups().then(function (dataResponse) {

            console.log('hello');
            //console.log(dataResponse);
            console.log('endhello');
            // $scope.results2 = dataResponse;
            $scope.gridOptions2.data = dataResponse.data;
        });
    });
