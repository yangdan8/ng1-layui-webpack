import angular from 'angular';

const fnRouting = function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            template: require('./home.html'),
            controller: 'HomeController as vm',
            resolve: {
                loadHomeController: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
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
            template: require('./top/top.html'),
            controller: 'HomeTopController as vm',
            resolve: {
                loadHomeTopController: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
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
            template: require('./bottom/bottom.html'),
            controller: 'HomeBottomController as vm',
            resolve: {
                loadHomeBottomController: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
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
            template: require('./left/left.html'),
            controller: 'HomeLeftController as vm',
            resolve: {
                loadHomeLeftController: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
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
            template: require('./right/right.html'),
            controller: 'HomeRightController as vm',
            resolve: {
                loadHomeRightController: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
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
            template: require('./center/center.html'),
            controller: 'HomeCenterController as vm',
            resolve: {
                loadHomeCenterController: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
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