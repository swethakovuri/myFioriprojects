sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function(JSONModel) {
    'use strict';
    return{
    createMyJSONModel: function(filePath){
        var oModel = new sap.ui.model.json.JSONModel();
        //set or load data in the model
           //oModel.setData({       
           //});
        //   oModel.loadData("models/sample.json");
        oModel.loadData(filePath);
    
           return oModel;
    }
    
} 
});