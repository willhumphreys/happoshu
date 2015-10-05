'use strict';

angular.module('happoshuApp')
    .controller('MergedPositionCtrl', function ($scope, MergedPositionService, uiGridConstants) {
        $scope.columns =
            [
                {field: 'runName', width: '15%'},
                {field: 'name', width: '7%', maxWidth: 200, minWidth: 100},
                {field: 'Profit', type: 'number', width: '5%', maxWidth: 200, minWidth: 70},

                // multiple filters
                {
                    field: 'Winners', type: 'number', width: '3%', maxWidth: 200, minWidth: 70, filters: [
                    {
                        condition: uiGridConstants.filter.GREATER_THAN,
                        placeholder: 'greater than'
                    },
                    {
                        condition: uiGridConstants.filter.LESS_THAN,
                        placeholder: 'less than'
                    }]

                },
                {field: 'Losers', type: 'number', width: '3%', maxWidth: 200, minWidth: 70},
                {
                    field: 'ProfitPerTrade', type: 'number', width: '5%', maxWidth: 250, minWidth: 70,
                    cellFilter: 'number: 2',
                    sort: {
                        direction: uiGridConstants.DESC,
                        priority: 1
                    }

                },
                {field: 'Stop', type: 'number', width: '3%', maxWidth: 200, minWidth: 50},
                {field: 'TrailingStop', type: 'number', width: '3%', maxWidth: 200, minWidth: 70},
                {
                    field: 'TickOffset',
                    type: 'number',
                    width: '5%',
                    maxWidth: 200,
                    minWidth: 70,
                    displayName: 'Offset'
                },
                {field: 'time', width: '5%', maxWidth: 200, minWidth: 70, cellFilter: 'date:\'HH:mm\''},
                {field: 'monthOfYear', width: '5%', maxWidth: 200, minWidth: 70},
                {
                    field: 'WinnerLoserRatio',
                    cellFilter: 'number: 2',
                    type: 'number',
                    width: '3%',
                    maxWidth: 200,
                    minWidth: 50,
                    displayName: 'WLR'
                },

                {field: 'dayOfWeek', width: '5%', maxWidth: 200, minWidth: 70, displayName: 'DOW'},
                {
                    field: 'WinningSimulations',
                    width: '5%',
                    maxWidth: 200,
                    minWidth: 70,
                    displayName: 'Winners S',
                    cellFilter: 'number: 2'
                },
                {
                    field: 'LosingSimulations',
                    width: '5%',
                    maxWidth: 200,
                    minWidth: 70,
                    displayName: 'Losers S',
                    cellFilter: 'number: 2'
                },
                {
                    field: 'TotalSimulations',
                    width: '3%',
                    maxWidth: 200,
                    minWidth: 70,
                    displayName: 'Total S',
                    cellFilter: 'number: 2'
                },
                {
                    field: 'WinnerLoserRatio',
                    width: '3%',
                    maxWidth: 200,
                    minWidth: 50,
                    displayName: 'WLR',
                    cellFilter: 'number: 2'
                },
                {
                    field: 'LoserWinnerRatio',
                    width: '3%',
                    maxWidth: 200,
                    minWidth: 50,
                    displayName: 'LWR',
                    cellFilter: 'number: 2'
                },
                {
                    field: 'WinnerLoserRationSimulations',
                    width: '3%',
                    maxWidth: 200,
                    minWidth: 50,
                    displayName: 'WLRS',
                    cellFilter: 'number: 2'
                },
                {
                    field: 'LoserWinnerRatioSimulations',
                    width: '3%',
                    maxWidth: 200,
                    minWidth: 50,
                    displayName: 'LWRS',
                    cellFilter: 'number: 2'
                }

            ];

        $scope.gridOptions2 = {
            enableColumnResizing: true,
            enableSorting: true,
            enableFiltering: true,
            columnDefs: $scope.columns

        };

        $scope.update = function (searchOptions) {
            console.log(searchOptions);
            MergedPositionService.getMergedPositions(searchOptions).then(function (dataResponse) {

                console.log("Controller getting merged positions");

                $scope.gridOptions2.data = dataResponse.data;
            })
        };


    });
