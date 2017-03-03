'use strict';

/**
 * Services
 */

angular.module('myApp.services', [])
.factory('testFactory', function ($rootScope) {
    
    return {
        testFunc: function () {
            console.log('Service')
        }
    };
});