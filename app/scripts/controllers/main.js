'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope,$position) {
  })
  .controller('DemandCtrl', function($scope, demandPlannerService) {
  	var demandDataList = demandPlannerService.getDemandTemplate();
  	$scope.demandDataList = demandDataList;
  });
