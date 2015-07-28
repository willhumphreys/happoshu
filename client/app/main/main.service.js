angular.module('services', ['ngTouch', 'ui.grid', 'ui.grid.resizeColumns']).

    service('ScenarioService', function ($http) {
        this.getSimulationGroupNames = function () {
            return $http({
                method: 'GET',
                url: 'http://localhost:9000/api/scenarios'
            });
        };

        this.getResults = function () {
            return $http({
                method: 'GET',
                url: 'http://localhost:9000/api/results'
            });
        };

        this.getSimulationGroupFiles = function (simulationGroupName) {
            console.log('service time with ' + simulationGroupName);
            return $http({
                method: 'GET',
                url: 'http://localhost:9000/api/scenarios/' + simulationGroupName
            });
        };
    });