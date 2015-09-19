'use strict';

angular.module('happoshuApp')
    .controller('RankedSimulationsCtrl', function ($scope, ScenarioService, uiGridConstants) {

        $scope.columns =
            [
                {field: 'RunName'},
                {field: 'Account', width: '5%', maxWidth: 200, minWidth: 100},
                {field: 'Profit', type: 'number', width: '5%', maxWidth: 200, minWidth: 90},

                // multiple filters
                {
                    field: 'Winners', type: 'number', width: '5%', maxWidth: 200, minWidth: 90, filters: [
                    {
                        condition: uiGridConstants.filter.GREATER_THAN,
                        placeholder: 'greater than'
                    },
                    {
                        condition: uiGridConstants.filter.LESS_THAN,
                        placeholder: 'less than'
                    }]

                },
                {field: 'Losers', type: 'number', width: '5%', maxWidth: 200, minWidth: 90},
                {
                    field: 'ProfitPerTrade', type: 'number', width: '5%', maxWidth: 250, minWidth: 190,
                    sort: {
                        direction: uiGridConstants.DESC,
                        priority: 1
                    }

                },
                {field: 'Stop', type: 'number', width: '5%', maxWidth: 200, minWidth: 90},
                {field: 'TrailingStop', type: 'number', width: '5%', maxWidth: 200, minWidth: 90},
                {
                    field: 'OpenTickOffset',
                    type: 'number',
                    width: '5%',
                    maxWidth: 200,
                    minWidth: 90,
                    displayName: 'Offset'
                },
                {field: 'Time', width: '5%', maxWidth: 200, minWidth: 90},
                {
                    field: 'WinnerLoserRatio',
                    type: 'number',
                    width: '5%',
                    maxWidth: 200,
                    minWidth: 90,
                    displayName: 'WLR'
                },
                {field: 'WinnerLoserSimulationRatio', width: '5%', maxWidth: 200, minWidth: 90, displayName: 'WLSR'},
                {field: 'DayOfWeek', width: '5%', maxWidth: 200, minWidth: 90, displayName: 'DOW'}

            ];

        $scope.gridOptions = {
            enableColumnResizing: true,
            enableSorting: true,
            enableFiltering: true,
            columnDefs: $scope.columns

        };


        $scope.logout = function (value) {
            console.log('Hello I was called ' + value);
            $scope.simulationGroupName = value;
        };

        if ($scope.results == null) {

            ScenarioService.getResults().then(function (dataResponse) {

                $scope.results = dataResponse;
                $scope.gridOptions.data = dataResponse.data;
            });
        }

        console.log("what is this");
        //
        //$scope.simulationGroupFiles = null;
    }).directive('targetBlank', function () {
        return {
            compile: function (element) {
                var elems = (element.prop("tagName") === 'A') ? element : element.find('a');
                elems.attr("target", "_blank");
            }
        };
    });
