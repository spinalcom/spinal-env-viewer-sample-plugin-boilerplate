(function () {
  angular.module('app.spinalforge.plugin')
    .controller('YourNameCtrl', ["$scope", "$rootScope", "$mdToast", "$mdDialog", "authService", "$compile", "$injector", "layout_uid", "spinalModelDictionary", "$q", "groupPanelService", "allObjectService", "createPanelService", "donutService", "$templateCache",
      function ($scope, $rootScope, $mdToast, $mdDialog, authService, $compile, $injector, layout_uid, spinalModelDictionary, $q, groupPanelService, allObjectService, createPanelService, donutService, $templateCache) {

        var viewer = v;
        // make your function, modification and display with angularJS
        $scope.message = "This is your first app in SpinalBIM viewer"
      }
      // end of controller
    ]);
})();