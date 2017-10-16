import angular from 'angular';
import router from './router';
import i18n from './i18n';

const name = 'app.config';
angular.module(name, [router, i18n]);

export default name;