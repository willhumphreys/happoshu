angular.module('services', ['ngTouch', 'ui.grid', 'ui.grid.resizeColumns']).

    service('SimulationGroupsService', function ($http) {
        this.getSimulationGroups = function () {
            console.log('Getting simulation groups');
            return $http({
                method: 'GET',
                url: 'http://localhost:9000/api/simulationGroups'
            });
        }
    });