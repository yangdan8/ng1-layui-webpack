import angular from 'angular';

const fnRouting = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/account/login');
    $stateProvider
        .state('account_login', {
            url: '/account/login',
            templateUrl: require('./login/login.html'),
            controller: 'AccountLoginController as vm',
            resolve: {
                loadAccountLoginController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            const mdl = require('./login/login.ctrl').default;
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
    .module('pages.account.routing', [])
    .config(fnRouting);