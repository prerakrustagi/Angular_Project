angular.module("tutorialControllerModule", [])
.controller("TutorialCtrl", ["$scope", function($scope) {
    $scope.name = "Prerak";
    $scope.tutorialObj = {
        title: "Tutorial Title",
        subtitile: "Tutorial Sub-Title",
        firstNane: "Prerak",
        bindOutput: 2,
        timesTwo: function() {
            this.bindOutput *= 2;
        }
    }
}])
.service();
