angular
    .module('bonuspoint')
    .service('shopDetails', shopDetails);

function shopDetails($rootScope, $reactive, $state) {
    
    var shop = {};    
    return {
        getProperty: function () {
            console.log('Service get', shop)
            return shop;
        },
        setProperty: function(value) {
            shop = value;
            console.log('service set', value, shop)
        }
    };
};