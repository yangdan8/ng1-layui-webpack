import angular from 'angular';
const css = require('./home.scss');

class HomeController {
    constructor($scope) {
        this.$scope = $scope;
        this.css = css[0][1];
        this.title = '这里是首页';
    }
}

export default angular
    .module('pages.home.ctrl', [])
    .controller('HomeController', HomeController);