import angular from 'angular';
require('./home.scss');

class HomeController {
    constructor($scope) {
        this.$scope = $scope;
        this.title = '这里是首页';
    }
}

export default angular
    .module('pages.home.ctrl', [])
    .controller('HomeController', ['$scope', HomeController]);