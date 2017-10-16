import angular from 'angular';
const css = require('./left.scss');

class HomeLeftController {
    constructor($scope) {
        this.$scope = $scope;
        this.css = css[0][1];
        this.title = '这里是首页的左边菜单部份';
    }
}

export default angular
    .module('pages.home.left.ctrl', [])
    .controller('HomeLeftController', HomeLeftController);