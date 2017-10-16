import angular from 'angular';
const css = require('./top.scss');

class HomeTopController {
    constructor($scope) {
        this.$scope = $scope;
        this.css = css[0][1];
        this.title = '这里是首页的顶部';
    }
}

export default angular
    .module('pages.home.top.ctrl', [])
    .controller('HomeTopController', HomeTopController);