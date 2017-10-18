import angular from 'angular';
import oclazyload from 'oclazyload';
import 'jquery';
import 'normalize.css';
import 'ilayui';
import 'ilayui/dist/css/layui.css';
import './app.scss';
import routing from './config/router';

export default angular
    .module('app', [
        oclazyload,
        routing.name
    ]);