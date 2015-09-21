angular.module('happoshuApp').

    service('ExecutionStatsService', function ($http) {
        this.getExecutionStats = function () {
            console.log('Getting execution stats');
            return $http({
                method: 'GET',
                url: 'http://localhost:9000/api/executionStats'
            });
        }
    });
