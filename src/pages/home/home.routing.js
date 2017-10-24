import angular from 'angular';

const fnRouting = function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: require('./home.html'),
            controller: 'HomeController as vm',
            resolve: {
                loadHomeController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            const mdl = require('./home.ctrl').default;
                            $ocLazyLoad.load({
                                name: mdl.name
                            });
                            resolve(mdl.controller);
                        });
                    });
                }
            }
        })
        .state('home_top', {
            url: '/home/top',
            templateUrl: require('./top/top.html'),
            controller: 'HomeTopController as vm',
            resolve: {
                loadHomeTopController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            const mdl = require('./top/top.ctrl').default;
                            $ocLazyLoad.load({
                                name: mdl.name
                            });
                            resolve(mdl.controller);
                        });
                    });
                }
            }
        })
        .state('home_bottom', {
            url: '/home/bottom',
            templateUrl: require('./bottom/bottom.html'),
            controller: 'HomeBottomController as vm',
            resolve: {
                loadHomeBottomController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            const mdl = require('./bottom/bottom.ctrl').default;
                            $ocLazyLoad.load({
                                name: mdl.name
                            });
                            resolve(mdl.controller);
                        });
                    });
                }
            }
        })
        .state('home_left', {
            url: '/home/left',
            templateUrl: require('./left/left.html'),
            controller: 'HomeLeftController as vm',
            resolve: {
                loadHomeLeftController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            const mdl = require('./left/left.ctrl').default;
                            $ocLazyLoad.load({
                                name: mdl.name
                            });
                            resolve(mdl.controller);
                        });
                    });
                }
            }
        })
        .state('home_right', {
            url: '/home/right',
            templateUrl: require('./right/right.html'),
            controller: 'HomeRightController as vm',
            resolve: {
                loadHomeRightController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            const mdl = require('./right/right.ctrl').default;
                            $ocLazyLoad.load({
                                name: mdl.name
                            });
                            resolve(mdl.controller);
                        });
                    });
                }
            }
        })
        .state('home_center', {
            url: '/home/center',
            templateUrl: require('./center/center.html'),
            controller: 'HomeCenterController as vm',
            resolve: {
                loadHomeCenterController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            const mdl = require('./center/center.ctrl').default;
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
    .module('pages.home.routing', [])
    .config(fnRouting);