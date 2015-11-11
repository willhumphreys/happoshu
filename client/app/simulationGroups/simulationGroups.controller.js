'use strict';

angular.module('happoshuApp')
    .controller('SimulationGroupsCtrl', function ($scope, SimulationGroupsService) {


        $scope.someProp = 'abc';

        $scope.showMe = function () {
            alert($scope.someProp);
            SimulationGroupsService.toggleDirty();
        };


        $scope.columns =
            [
                {field: 'runName'},
                {field: 'description', width: '40%', maxWidth: 600, minWidth: 100},
                {
                    field: 'dirty',
                    cellTemplate: '<button class="btn primary" ng-click="grid.appScope.showMe()">{{ COL_FIELD }}</button>'
                }


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
