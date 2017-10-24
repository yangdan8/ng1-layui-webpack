import angular from 'angular';
import $ from 'jquery';
require('./login.scss');

class AccountLoginController {
    constructor($scope) {
        this.$scope = $scope;
        this.title = '这里是登录页';
        $.ajax('/api/api/User/GetStructuringData?pageId=3980').done((data) => {
            console.log(data);
        });
    }
}

export default angular
    .module('pages.account.login.ctrl', [])
    .controller('AccountLoginController', AccountLoginController);