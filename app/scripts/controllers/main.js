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
  .controller('DemandCtrl', function($scope) {
    var demandData = [
  			{
  				itemName: 'Metal Leverage',
  				dimHeight: 10,
  				dimWidth: 20,
  				dimDepth: 30,
  				packQunatity: 12,
  				weight: 300,
  				inventoryQty: 10
  			},
  			{
  				itemName: 'Bronize Leverage',
  				dimHeight: 10,
  				dimWidth: 40,
  				dimDepth: 40,
  				packQunatity: 1,
  				weight: 444,
  				inventoryQty: 20
  			},
  			{
  				itemName: 'Gold Leverage',
  				dimHeight: 10,
  				dimWidth: 30,
  				dimDepth: 30,
  				packQunatity: 24,
  				weight: 500,
  				inventoryQty: 30
  			}
  		];
  	var demandDataList = demandData;
  	$scope.demandDataList = demandDataList;
  });
