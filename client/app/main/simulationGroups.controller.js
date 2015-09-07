angular.module('otherControllers', ['ngTouch', 'ui.grid', 'ui.grid.resizeColumns'])
    .controller('SimulationGroupsController', function ($scope, SimulationGroupsService, uiGridConstants) {

        $scope.columns =
            [
                {field: 'runName'},
                {field: 'description', width: '5%', maxWidth: 200, minWidth: 100},


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
            $scope.results2 = dataResponse;
            $scope.gridOptions2.data = dataResponse.data;
        });
    });
