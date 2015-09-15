'use strict';

angular.module('happoshuApp')
    .controller('SimulationGroupFilesCtrl', function ($scope, ScenarioService) {

        $scope.simulationGroupNames = null;


        ScenarioService.getSimulationGroupNames().then(function (dataResponse) {
            $scope.simulationGroupNames = dataResponse;
        });

        $scope.message = 'Hello';

        $scope.getSimulationGroupFiles = function (value) {
            console.log('Our value is ' + value);
            ScenarioService.getSimulationGroupFiles(value).then(function (dataResponse) {
                $scope.simulationGroupFiles = dataResponse;
            });
        }

    });
