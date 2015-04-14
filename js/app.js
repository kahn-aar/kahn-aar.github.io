/**
 * Created by Nicolas on 14/04/2015.
 */

var sitePersoApp = angular.module('project', ['ngRoute', 'firebase']);

sitePersoApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller:'ViewCtrl',
        templateUrl:'partials/description.html',
    })
    .when('/admin/', {
        controller:'AdminCtrl',
        templateUrl:'partials/admin.html'
    })
    .when('/admin/:element/:id', {
        controller:'AdminCtrl',
        templateUrl:'partials/adminEdit.html'
    })
    .when('/admin/:element', {
        controller:'AdminCtrl',
        templateUrl:'partials/adminAdd.html'
    })
    .when('/desc/', {
        controller:'ViewCtrl',
        templateUrl:'partials/description.html'
    })
    .when('/xp/', {
        controller:'ViewCtrl',
        templateUrl:'partials/experience.html'
    })
    .when('/skills/', {
        controller:'ViewCtrl',
        templateUrl:'partials/competences.html'
    })
    .when('/projets/', {
        controller:'ViewCtrl',
        templateUrl:'partials/projets.html'
    })
    .when('/uvs/', {
        controller:'ViewCtrl',
        templateUrl:'partials/uvs.html'
    })
    .when('/autre/', {
        controller:'ViewCtrl',
        templateUrl:'partials/autrexp.html'
    })
    .otherwise({
        redirectTo:'/'
    });
});