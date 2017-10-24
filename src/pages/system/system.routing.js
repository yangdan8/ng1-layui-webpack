import angular from 'angular';

const fnRouting = function($stateProvider) {
    $stateProvider
        .state('system_about', {
            url: '/system/about',
            templateUrl: require('./about/about.html'),
            controller: 'SystemAboutController as vm',
            resolve: {
                loadSystemAboutController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            const mdl = require('./about/about.ctrl').default;
                            $ocLazyLoad.load({
                                name: mdl.name
                            });
                            resolve(mdl.controller);
                        });
                    });
                }
            }
        });
};

export default angular
    .module('pages.system.routing', [])
    .config(fnRouting);