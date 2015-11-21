'use strict';

angular.module('happoshuApp')
    .service('MergedPositionService', function ($http) {
        this.getMergedPositions = function (searchOptions) {
            console.log('Getting mergedPositions' + searchOptions);

            var mergedPositionUrl = 'http://localhost:9000/api/mergedPositions?';

            return $http({
                method: 'GET',
                url: mergedPositionUrl,
                params: searchOptions
            });
        };

        this.showLeague = function (searchOptions) {
            console.log('Getting mergedPositions' + searchOptions);

            var mergedPositionUrl = 'http://localhost:9000/api/mergedPositions/league';

            return $http({
                method: 'GET',
                url: mergedPositionUrl
            });
        };

        this.mapScopeOptionsToSearch = function (searchOptions) {
            var optionsToSend = {};
            angular.copy(searchOptions, optionsToSend);

            tidyupBullBearContracts(optionsToSend)
            console.log("Options to send " + optionsToSend);

            return optionsToSend;
        };

        function tidyupBullBearContracts(searchOptions) {
            if (searchOptions.contract) {
                console.log("found contract" + searchOptions.contract)

                searchOptions[searchOptions.contract] = true;


                if (searchOptions.Bull) {
                    var key = searchOptions.contract + 'BULL';
                    searchOptions[key] = true;
                }

                if (searchOptions.Bear) {
                    var key = searchOptions.contract + 'BEAR';
                    searchOptions[key] = true;
                }

                if (searchOptions.All) {
                    var key = searchOptions.contract + 'ALL';
                    searchOptions[key] = true;
                }
            }

            delete searchOptions.contract;
            delete searchOptions.Bull;
            delete searchOptions.Bear;
            delete searchOptions.All;
        }

    });
