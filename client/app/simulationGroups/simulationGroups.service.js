angular.module('happoshuApp').

    service('SimulationGroupsService', function ($http) {
        this.getSimulationGroups = function () {
            console.log('Getting simulation groups');
            return $http({
                method: 'GET',
                url: 'http://localhost:9000/api/simulationGroups'
            });
        }
    });
