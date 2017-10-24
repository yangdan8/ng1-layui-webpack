import angular from 'angular';
require('./about.scss');

class SystemAboutController {
    constructor($scope) {
        this.$scope = $scope;
        this.title = '这里是关于页面信息';
    }
}

export default angular
    .module('pages.system.about.ctrl', [])
    .controller('SystemAboutController', ['$scope', SystemAboutController]);