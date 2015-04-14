    var sitePersoApp = angular.module('project');

    sitePersoApp.controller('ViewCtrl', ['$scope', '$location', 'fbObject',
        function ($scope, $location, fbObject) {

            $scope.infos = fbObject.getFbObject("Informations");
            $scope.contenu = fbObject.getFbObject("Contenu");
            $scope.xp = fbObject.getFbArray("Xp");
            $scope.otherXp = fbObject.getFbArray("AutreXp");
            $scope.listuv = fbObject.getFbArray("UVs");
            $scope.skills = fbObject.getFbArray("Skills");
            $scope.projets = fbObject.getFbArray("Projets");
            $scope.metrics = fbObject.getFbObject("Monitoring/projects");
            $scope.domains = fbObject.getFbArray("Domaines");
            
            $scope.displayProjets = function() {
                $location.path('/projets/');
                $(".active").removeClass("active");
                $(".projectBtn").addClass("active");
            };

            $scope.displayUv = function() {
                $location.path('/uvs');
                $(".active").removeClass("active");
                $(".uvBtn").addClass("active");
            };

            $scope.displayContent = function() {
                $location.path('/desc');
                $(".active").removeClass("active");
                $(".descriptionBtn").addClass("active");
            };

            $scope.displayXp = function() {
                $location.path('/xp');
                $(".active").removeClass("active");
                $(".xpBtn").addClass("active");
            };

            $scope.displayOtherXp = function() {
                $location.path('/autre');
                $(".active").removeClass("active");
                $(".otherXpBtn").addClass("active");
            };

            $scope.displaySkills = function() {
                $location.path('/skills');
                $(".active").removeClass("active");
                $(".skillBtn").addClass("active");
            };

            $scope.displayAdmin = function() {
                //$location.path('/admin/Projets');
                //$(".active").removeClass("active");
                //$(".adminBtn").addClass("active");
            };


            $scope.query="";
        }
    ])
    .controller('AdminCtrl', function($scope, $routeParams, $location, fbObject) {
        // download the data into a local object
        $scope.elements = fbObject.getFbObject("/template/" + $routeParams.element);

        $scope.save = function() {
            console.log($scope.name);
            ref.update({
                text: $scope.name
            });
        };

        $scope.addElement = function(element) {
            console.log("addElement");
            console.log("%O", element);
            $scope.projets.$add(element);
            element = {};
            $location.path('/');
        }
    });

 

    