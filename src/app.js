import angular from 'angular';
import oclazyload from 'oclazyload';
import routing from './config/router';
require('normalize.css');
require('ilayui');
require('ilayui/dist/css/layui.css');
require('./app.scss');

export default angular
    .module('app', [
        oclazyload,
        routing.name
    ]);