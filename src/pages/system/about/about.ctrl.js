import angular from 'angular';
const css = require('./about.scss');

class SystemAboutController {
    constructor($scope) {
        this.$scope = $scope;
        this.css = css[0][1];
        this.title = '这里是关于页面信息';
    }
}

export default angular
    .module('pages.system.about.ctrl', [])
    .controller('SystemAboutController', SystemAboutController);