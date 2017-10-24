import angular from 'angular';
import $ from 'jquery';
require('./login.scss');

class AccountLoginController {
    constructor($scope) {
        this.$scope = $scope;
        this.title = '这里是登录页';
        $.ajax('/api/5aV1bjqh_Q23odCf/static/superman/css/mt_min_d0e7c6d2.css').done((data) => {
            console.log('来自百度的数据', data);
        });
    }
}

export default angular
    .module('pages.account.login.ctrl', [])
    .controller('AccountLoginController', AccountLoginController);