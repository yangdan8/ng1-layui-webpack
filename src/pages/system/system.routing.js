import angular from 'angular';

const fnRouting = function($stateProvider) {
    $stateProvider
        .state('system_about', {
            url: '/system/about',
            template: '',
            controller: 'SystemAboutController as vm',
            resolve: {
                loadSystemAboutController: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            $stateProvider.stateRegistry.states.system_about
                                .views.$default.template = require('./about/about.html');
                            const mdl = require('./about/about.ctrl').default;
                            $ocLazyLoad.load({
                                name: mdl.name
                            });
                            resolve(mdl.controller);
                        });
                    });
                }]
            }
        });
};

export default angular
    .module('pages.system.routing', [])
    .config(['$stateProvider', fnRouting]);