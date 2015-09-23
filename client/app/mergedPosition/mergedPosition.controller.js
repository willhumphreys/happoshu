'use strict';

angular.module('happoshuApp')
    .controller('MergedPositionCtrl', function ($scope, MergedPositionService, uiGridConstants) {
        $scope.columns =
            [
                {field: 'runName'},
                {field: 'name', width: '5%', maxWidth: 200, minWidth: 100},
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
                    cellFilter: 'number: 2',
                    sort: {
                        direction: uiGridConstants.DESC,
                        priority: 1
                    }

                },
                {field: 'Stop', type: 'number', width: '5%', maxWidth: 200, minWidth: 90},
                {field: 'TrailingStop', type: 'number', width: '5%', maxWidth: 200, minWidth: 90},
                {
                    field: 'TickOffset',
                    type: 'number',
                    width: '5%',
                    maxWidth: 200,
                    minWidth: 90,
                    displayName: 'Offset'
                },
                {field: 'time', width: '5%', maxWidth: 200, minWidth: 90},
                {
                    field: 'WinnerLoserRatio',
                    cellFilter: 'number: 2',
                    type: 'number',
                    width: '5%',
                    maxWidth: 200,
                    minWidth: 90,
                    displayName: 'WLR'
                },

                {field: 'dayOfWeek', width: '5%', maxWidth: 200, minWidth: 90, displayName: 'DOW'},
                //{field: 'WinningSimulations', width: '5%', maxWidth: 200, minWidth: 90, displayName: 'Winners S'},
                //{field: 'LosingSimulations', width: '5%', maxWidth: 200, minWidth: 90, displayName: 'Losers S'},
                //{field: 'TotalSimulations', width: '5%', maxWidth: 200, minWidth: 90, displayName: 'Total S'},
                {field: 'WinnerLoserRationSimulations', width: '5%', maxWidth: 200, minWidth: 90, displayName: 'WLRS'},
                {field: 'LoserWinnerRatioSimulations', width: '5%', maxWidth: 200, minWidth: 90, displayName: 'LWRS'}

            ];

        $scope.gridOptions2 = {
            enableColumnResizing: true,
            enableSorting: true,
            enableFiltering: true,
            columnDefs: $scope.columns

        };


        MergedPositionService.getMergedPositions().then(function (dataResponse) {

            console.log("Controller getting merged positions");

            $scope.gridOptions2.data = dataResponse.data;
        });
    });
