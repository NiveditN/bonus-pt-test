angular
    .module('bonuspoint')
    .service('testService', testService);

function testService($rootScope, $reactive, $state) {
    
    var serviceData = {};    
    return {
        get: function () {
            return serviceData;
        },
        set: function(value) {
            serviceData = value;
        }
    };
};