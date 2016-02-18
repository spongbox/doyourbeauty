(function() {
    'use strict';

    angular
        .module('blocks.logger')
        .factory('logger', logger);

    logger.$inject = ['$log'];

    /* @ngInject */
    function logger($log, toastr) {
        var service = {
            error   : error,
            info    : info,
            success : success,
            warning : warning,

            // straight to console; bypass toastr
            log     : $log.log
        };

        return service;
        /////////////////////

        function error(message, data, title) {
            console.error(message, title);
            $log.error('Error: ' + message, data);
        }

        function info(message, data, title) {
            console.info(message, title);
            $log.info('Info: ' + message, data);
        }

        function success(message, data, title) {
            console.log(message, title);
            $log.info('Success: ' + message, data);
        }

        function warning(message, data, title) {
            console.warn(message, title);
            $log.warn('Warning: ' + message, data);
        }
    }
}());
