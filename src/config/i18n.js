import angular from 'angular';
import ngTranslate from 'angular-translate';
import 'angular-translate-loader-static-files';

const name = 'app.config.i18n';
angular.module(name, [ngTranslate])
    .config(function($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'static/i18n/',
            suffix: '.json'
        });
        const lang = window.localStorage.lang || 'zh_cn';
        $translateProvider.preferredLanguage(lang);
    });

export default name;