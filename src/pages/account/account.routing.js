import angular from 'angular';

const fnRouting = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/account/login');
    $stateProvider
        .state('account_login', {
            url: '/account/login',
            template: '',
            controller: 'AccountLoginController as vm',
            resolve: {
                loadAccountLoginController: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            $stateProvider.stateRegistry.states.account_login
                                .views.$default.template = require('./login/login.html');
                            const mdl = require('./login/login.ctrl').default;
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
    .module('pages.account.routing', [])
    .config(['$stateProvider', '$urlRouterProvider', fnRouting]);