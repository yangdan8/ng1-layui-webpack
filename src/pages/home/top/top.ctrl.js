import angular from 'angular';
require('./top.scss');

class HomeTopController {
    constructor($scope) {
        this.$scope = $scope;
        this.title = '这里是首页的顶部';
    }
}

export default angular
    .module('pages.home.top.ctrl', [])
    .controller('HomeTopController', HomeTopController);