    var phonecatApp = angular.module('project', ['ngRoute', 'firebase']);

    phonecatApp.value('fbURL', 'https://torrid-torch-6299.firebaseIO.com/')
    .service('fbRef', function(fbURL) {
        return new Firebase(fbURL)
    })
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            controller:'PhoneListCtrl',
            templateUrl:'partials/description.html',
        })
        .when('/admin/', {
            controller:'AdminCtrl',
            templateUrl:'admin.html'
        })
        .when('/desc/', {
            controller:'PhoneListCtrl',
            templateUrl:'partials/description.html'
        })
        .when('/xp/', {
            controller:'PhoneListCtrl',
            templateUrl:'partials/experience.html'
        })
        .when('/skills/', {
            controller:'PhoneListCtrl',
            templateUrl:'partials/competences.html'
        })
        .when('/projets/', {
            controller:'PhoneListCtrl',
            templateUrl:'partials/projets.html'
        })
        .when('/uvs/', {
            controller:'PhoneListCtrl',
            templateUrl:'partials/uvs.html'
        })
        .when('/autre/', {
            controller:'PhoneListCtrl',
            templateUrl:'partials/autrexp.html'
        })
        .otherwise({
            redirectTo:'/'
        });
    });
    phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', '$location', '$firebaseObject', '$firebaseArray', 'fbRef',
        function ($scope, $http, $location, $firebaseObject, $firebaseArray, fbRef) {
            console.log("hello");
            $scope.infos = $firebaseObject(fbRef.child("Informations"));
            $scope.contenu = $firebaseObject(fbRef.child("Contenu"));
            $scope.xp = $firebaseArray(fbRef.child("Xp"));
            $scope.otherXp = $firebaseObject(fbRef.child("AutreXp"));
            $scope.listuv = $firebaseArray(fbRef.child("UVs"));
            $scope.skills = $firebaseArray(fbRef.child("Skills"));
            $scope.projets = $firebaseArray(fbRef.child("Projets"));
            $scope.metrics = $firebaseObject(fbRef.child("Monitoring/projects"));
            
            $scope.displayProjets = function() {
                var metrics = fbRef.child("Monitoring/projects");
                var valuet = fbRef.child("Monitoring/projects/value");
                valuet.once("value", function(data) {
                    console.log(data.val());
                    var newMetric = data.val() + 1;
                    metrics.update({
                        value: newMetric
                    }).then(function(data) {
                        $location.path('/projets/');
                        $(".active").removeClass("active");
                        $(".projectBtn").addClass("active");
                    });
                });
            }

            $scope.displayUv = function() {
                $location.path('/uvs');
                $(".active").removeClass("active");
                $(".uvBtn").addClass("active");
            }

            $scope.displayContent = function() {
                $location.path('/desc');
                $(".active").removeClass("active");
                $(".descriptionBtn").addClass("active");
            }

            $scope.displayXp = function() {
                $location.path('/xp');
                $(".active").removeClass("active");
                $(".xpBtn").addClass("active");
            }

            $scope.displayOtherXp = function() {
                $location.path('/autre');
                $(".active").removeClass("active");
                $(".otherXpBtn").addClass("active");
            }

            $scope.displaySkills = function() {
                $location.path('/skills');
                $(".active").removeClass("active");
                $(".skillBtn").addClass("active");
            }


            $scope.query="";
        }
    ])
    .controller('AdminCtrl', function($scope, $firebaseObject) {
        $scope.value = "hello world";
        var ref = new Firebase("https://torrid-torch-6299.firebaseIO.com/Informations");
        // download the data into a local object
        $scope.infor = $firebaseObject(ref);

        $scope.save = function() {
            console.log($scope.name);
            ref.update({
                text: $scope.name
            });
        };
    });

 

    