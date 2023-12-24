sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/xml/XMLModel"
], function(JSONModel,XMLModel) {
    'use strict';
    return{
    createMyJSONModel: function(filePath){
        var oModel = new JSONModel();
        //set or load data in the model
           //oModel.setData({       
           //});
        //   oModel.loadData("models/sample.json");
        oModel.loadData(filePath);
    
           return oModel;
    },

    createMYXMLModel : function(filePath){
        var oModel = new XMLModel();
        oModel.loadData(filePath);
        return oModel;
    }
    
} 
});