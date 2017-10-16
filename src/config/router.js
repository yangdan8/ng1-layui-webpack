import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import accountRouting from '../pages/account/account.routing';
import homeRouting from '../pages/home/home.routing';
import systemRouting from '../pages/system/system.routing';

export default angular.module('config.router', [
    uiRouter,
    accountRouting.name,
    homeRouting.name,
    systemRouting.name
]);