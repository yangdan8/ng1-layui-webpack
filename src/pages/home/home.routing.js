import angular from 'angular';

const fnRouting = function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            template: '',
            controller: 'HomeController as vm',
            resolve: {
                loadHomeController: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            $stateProvider.stateRegistry.states.home
                                .views.$default.template = require('./home.html');
                            const mdl = require('./home.ctrl').default;
                            $ocLazyLoad.load({
                                name: mdl.name
                            });
                            resolve(mdl.controller);
                        });
                    });
                }]
            }
        })
        .state('home_top', {
            url: '/home/top',
            template: '',
            controller: 'HomeTopController as vm',
            resolve: {
                loadHomeTopController: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            $stateProvider.stateRegistry.states.home_top
                                .views.$default.template = require('./top/top.html');
                            const mdl = require('./top/top.ctrl').default;
                            $ocLazyLoad.load({
                                name: mdl.name
                            });
                            resolve(mdl.controller);
                        });
                    });
                }]
            }
        })
        .state('home_bottom', {
            url: '/home/bottom',
            template: '',
            controller: 'HomeBottomController as vm',
            resolve: {
                loadHomeBottomController: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            $stateProvider.stateRegistry.states.home_bottom
                                .views.$default.template = require('./bottom/bottom.html');
                            const mdl = require('./bottom/bottom.ctrl').default;
                            $ocLazyLoad.load({
                                name: mdl.name
                            });
                            resolve(mdl.controller);
                        });
                    });
                }]
            }
        })
        .state('home_left', {
            url: '/home/left',
            template: '',
            controller: 'HomeLeftController as vm',
            resolve: {
                loadHomeLeftController: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            $stateProvider.stateRegistry.states.home_left
                                .views.$default.template = require('./left/left.html');
                            const mdl = require('./left/left.ctrl').default;
                            $ocLazyLoad.load({
                                name: mdl.name
                            });
                            resolve(mdl.controller);
                        });
                    });
                }]
            }
        })
        .state('home_right', {
            url: '/home/right',
            template: '',
            controller: 'HomeRightController as vm',
            resolve: {
                loadHomeRightController: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            $stateProvider.stateRegistry.states.home_right
                                .views.$default.template = require('./right/right.html');
                            const mdl = require('./right/right.ctrl').default;
                            $ocLazyLoad.load({
                                name: mdl.name
                            });
                            resolve(mdl.controller);
                        });
                    });
                }]
            }
        })
        .state('home_center', {
            url: '/home/center',
            template: '',
            controller: 'HomeCenterController as vm',
            resolve: {
                loadHomeCenterController: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            $stateProvider.stateRegistry.states.home_center
                                .views.$default.template = require('./center/center.html');
                            const mdl = require('./center/center.ctrl').default;
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
    .module('pages.home.routing', [])
    .config(['$stateProvider', fnRouting]);