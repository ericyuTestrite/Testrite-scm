'use strict';

angular.module('sbAdminApp')
  .factory('demandPlannerService', function () {
    return {
       getDemandTemplate: function(){
    		var demandData = [
    			{
    				itemName: 'Metal',
    				dimHeight: 10,
    				dimWidth: 20,
    				dimDepth: 10,
    				packQunatity: 12,
    				weight: 300,
    				inventoryQty: 30
    			},
    			{
    				itemName: 'Bronize',
    				dimHeight: 10,
    				dimWidth: 20,
    				dimDepth: 10,
    				packQunatity: 12,
    				weight: 300,
    				inventoryQty: 30
    			},
    			{
    				itemName: 'Gold',
    				dimHeight: 10,
    				dimWidth: 20,
    				dimDepth: 10,
    				packQunatity: 12,
    				weight: 300,
    				inventoryQty: 30
    			}
    		];
    		return demandData;
    	}// end of getDemandTemplate
  }
});
