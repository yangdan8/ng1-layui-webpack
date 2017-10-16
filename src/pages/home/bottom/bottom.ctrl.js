import angular from 'angular';
const css = require('./bottom.scss');

class HomeBottomController {
    constructor($scope) {
        this.$scope = $scope;
        this.css = css[0][1];
        this.title = '这里是首页的底部';
    }
}

export default angular
    .module('pages.home.bottom.ctrl', [])
    .controller('HomeBottomController', HomeBottomController);