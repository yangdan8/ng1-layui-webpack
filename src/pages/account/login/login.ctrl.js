import angular from 'angular';
const css = require('./login.scss');

class AccountLoginController {
    constructor($scope) {
        this.$scope = $scope;
        this.css = css[0][1];
        this.title = '这里是登录页';
    }
}

export default angular
    .module('pages.account.login.ctrl', [])
    .controller('AccountLoginController', AccountLoginController);