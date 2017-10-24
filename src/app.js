import angular from 'angular';
import oclazyload from 'oclazyload';
import 'jquery';
import 'ilayui';
import 'normalize.css';
import 'ilayui/dist/css/layui.css';
import './app.scss';
import routing from './config/router';

// localStorage.setItem('app-base-url', location.pathname);
angular.module('app', [
    oclazyload,
    routing.name
]);