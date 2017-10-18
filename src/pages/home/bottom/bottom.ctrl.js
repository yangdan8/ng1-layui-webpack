import angular from 'angular';
require('./bottom.scss');

class HomeBottomController {
    constructor($scope) {
        this.$scope = $scope;
        this.title = '这里是首页的底部';
    }
}

export default angular
    .module('pages.home.bottom.ctrl', [])
    .controller('HomeBottomController', HomeBottomController);