angular.module('happoshuApp').

service('SimulationGroupsService', function ($http) {
    this.getSimulationGroups = function () {
        console.log('Getting simulation groups');
        return $http({
            method: 'GET',
            url: 'http://localhost:9000/api/simulationGroups'
        });
    };

    this.toggleDirty = function () {
        console.log('Dirty toggle');

    };

    this.update = function (simulationGroup) {
        console.log('Updating simulation group' + simulationGroup);
        return $http({
            method: 'PUT',
            url: 'http://localhost:9000/api/simulationGroups/' + simulationGroup._id,
            data: simulationGroup
        });
    }

});
