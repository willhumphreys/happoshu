'use strict';

angular.module('happoshuApp')
    .controller('MergedPositionCtrl', function ($scope, MergedPositionService, uiGridConstants) {

        // define some random object
        $scope.bigData = {};

        $scope.bigData.breakfast = false;
        $scope.bigData.lunch = false;
        $scope.bigData.dinner = false;

        // COLLAPSE =====================
        $scope.isCollapsed = false;

        $scope.searchStatus = 'Waiting';

        $scope.columns =
            [
                {field: 'runName', width: '18%', cellTooltip: true, headerTooltip: true},
                {field: 'name', width: '7%', maxWidth: 200, minWidth: 100, headerTooltip: true},

                {
                    field: 'ProfitPerTrade',
                    type: 'number',
                    width: '5%',
                    headerTooltip: true,
                    maxWidth: 250,
                    minWidth: 70,
                    cellFilter: 'number: 2'
                    //sort: {
                    //    direction: uiGridConstants.DESC,
                    //    priority: 1
                    //}

                },

                {
                    field: 'TickProfitPerTrade',
                    type: 'number',
                    width: '5%',
                    headerTooltip: true,
                    maxWidth: 250,
                    minWidth: 70,
                    cellFilter: 'number: 2'
                },

                {
                    field: 'dayOfWeek',
                    width: '5%',
                    maxWidth: 200,
                    minWidth: 70,
                    headerTooltip: 'Day of Week',
                    displayName: 'DOW'
                },

                {
                    field: 'time',
                    width: '5%',
                    maxWidth: 200,
                    minWidth: 70,
                    headerTooltip: 'Time of Day',
                    cellFilter: 'date:\'HH:mm\''
                },

                {
                    field: 'TradeLength',
                    width: '3%',
                    maxWidth: 200,
                    minWidth: 40,
                    headerTooltip: 'Trade Length',
                    displayName: 'Trade Length'
                },

                {field: 'Stop', type: 'number', width: '3%', maxWidth: 200, minWidth: 50, headerTooltip: true},

                {
                    field: 'TickOffset',
                    type: 'number',
                    width: '5%', headerTooltip: true,
                    maxWidth: 200,
                    minWidth: 70,
                    displayName: 'Offset'
                },

                {field: 'TrailingStop', type: 'number', width: '3%', maxWidth: 200, minWidth: 70, headerTooltip: true},

                // multiple filters
                {
                    field: 'Winners',
                    type: 'number',
                    width: '3%',
                    headerTooltip: true,
                    maxWidth: 200,
                    minWidth: 40,
                    filters: [
                        {
                            condition: uiGridConstants.filter.GREATER_THAN,
                            placeholder: 'greater than'
                        },
                        {
                            condition: uiGridConstants.filter.LESS_THAN,
                            placeholder: 'less than'
                        }]

                },
                {field: 'Losers', type: 'number', width: '3%', maxWidth: 200, minWidth: 40, headerTooltip: true},


                {field: 'monthOfYear', width: '5%', maxWidth: 200, minWidth: 70, headerTooltip: 'Month of Year'},


                {field: 'Profit', type: 'number', width: '5%', maxWidth: 200, minWidth: 70, headerTooltip: true},
                {
                    field: 'WinningSimulations', headerTooltip: 'Winning Simulations',

                    width: '5%',
                    maxWidth: 200,
                    minWidth: 70,
                    displayName: 'Winners S',
                    cellFilter: 'number: 2'
                },
                {
                    field: 'LosingSimulations', headerTooltip: 'Losing Simulations',
                    width: '5%',
                    maxWidth: 200,
                    minWidth: 70,
                    displayName: 'Losers S',
                    cellFilter: 'number: 2'
                },
                {
                    field: 'TotalSimulations', headerTooltip: 'Total Simulations',
                    width: '3%',
                    maxWidth: 200,
                    minWidth: 70,
                    displayName: 'Total S',
                    cellFilter: 'number: 2'
                },
                {
                    field: 'WinnerLoserRatio', headerTooltip: 'Winner Loser Ratio',
                    width: '3%',
                    maxWidth: 200,
                    minWidth: 50,
                    displayName: 'WLR',
                    cellFilter: 'number: 2'
                },
                {
                    field: 'LoserWinnerRatio', headerTooltip: 'Loser Winner Ratio',
                    width: '3%',
                    maxWidth: 200,
                    minWidth: 50,
                    displayName: 'LWR',
                    cellFilter: 'number: 2'
                },
                {
                    field: 'WinnerLoserRationSimulations', headerTooltip: 'Winner Loser Ratio Simulations',
                    width: '4%',
                    maxWidth: 200,
                    minWidth: 50,
                    displayName: 'WLRS',
                    cellFilter: 'number: 2'
                },
                {
                    field: 'LoserWinnerRatioSimulations', headerTooltip: 'Loser Winner Ratio Simulations',
                    width: '4%',
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

            $scope.searchStatus = 'Searching';
            console.log(searchOptions);
            MergedPositionService.getMergedPositions(searchOptions).then(function (dataResponse) {

                console.log("Controller getting merged positions");


                $scope.gridOptions2.data = dataResponse.data;
                $scope.searchStatus = 'Search Complete';
            })
        };
    });
