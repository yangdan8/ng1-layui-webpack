import angular from 'angular';
require('./login.scss');

class AccountLoginController {
    constructor($scope) {
        this.$scope = $scope;
        this.title = '这里是登录页';
    }
}

export default angular
    .module('pages.account.login.ctrl', [])
    .controller('AccountLoginController', AccountLoginController);