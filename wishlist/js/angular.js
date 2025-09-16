let app = angular.module('mainApp', []);

app.controller('mainController', ['$scope', '$sce', function($scope, $sce) {
    $scope.trustAsHtml = $sce.trustAsHtml;
    $scope.pageTitle = allData["main"].page.title;
    $scope.pageBackground = allData["main"].page.backgroundFileName;
    $scope.items = allData["main"].items;
    $scope.topPageDetails = [{}]
    $scope.mainAreaDisplay = "none";
    $scope.mainPageDisplay = "block";

    $scope.updateContent = function(s) {
        if ($scope.pageTitle == allData[s].page.title) return;

        if (s == "main") {
            $scope.pageTitle = allData[s].page.title;
            $scope.pageBackground = allData[s].page.backgroundFileName;
            $scope.items = [{}]
            $scope.topPageDetails = [{}]
            $scope.mainAreaDisplay = "none";
            $scope.mainPageDisplay = "block";
            return;
        }
        $scope.mainAreaDisplay = "block";
        $scope.mainPageDisplay = "none";
        $scope.pageTitle = allData[s].page.title;
        $scope.pageBackground = allData[s].page.backgroundFileName;
        $scope.items = allData[s].items;
        $scope.topPageDetails = [{}]
    }
}]);