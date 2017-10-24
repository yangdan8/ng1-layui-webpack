import angular from 'angular';
require('./left.scss');

class HomeLeftController {
    constructor($scope) {
        this.$scope = $scope;
        this.title = '这里是首页的左边菜单部份';
    }
}

export default angular
    .module('pages.home.left.ctrl', [])
    .controller('HomeLeftController', ['$scope', HomeLeftController]);