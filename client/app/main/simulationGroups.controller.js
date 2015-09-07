angular.module('controllers', ['ngTouch', 'ui.grid', 'ui.grid.resizeColumns'])
    .controller('SimulationGroupsController', function ($scope, SimulationGroupsService, uiGridConstants) {

        $scope.columns =
            [
                {field: 'runName'},
                {field: 'description', width: '5%', maxWidth: 200, minWidth: 100},


            ];

        $scope.gridOptions = {
            enableColumnResizing: true,
            enableSorting: true,
            enableFiltering: true,
            columnDefs: $scope.columns

        };

        SimulationGroupsService.getSimulationGroups().then(function (dataResponse) {

            $scope.results = dataResponse;
            $scope.gridOptions.data = dataResponse.data;
        });
    });
