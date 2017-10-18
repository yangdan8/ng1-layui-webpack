import angular from 'angular';
require('./right.scss');

class HomeRightController {
    constructor($scope) {
        this.$scope = $scope;
        this.title = '这里是首页的右边菜单部份';
    }
}

export default angular
    .module('pages.home.right.ctrl', [])
    .controller('HomeRightController', HomeRightController);