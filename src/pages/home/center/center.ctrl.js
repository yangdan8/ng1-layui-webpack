import angular from 'angular';
const css = require('./center.scss');

class HomeCenterController {
    constructor($scope) {
        this.$scope = $scope;
        this.css = css[0][1];
        this.title = '这里是首页的核心页面展示部份';
    }
}

export default angular
    .module('pages.home.center.ctrl', [])
    .controller('HomeCenterController', HomeCenterController);