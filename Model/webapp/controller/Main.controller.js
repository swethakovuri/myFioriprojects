sap.ui.define(
    ["Model/controller/BaseController"],
    function(BaseController){
    return BaseController.extend("Model.controller.Main",{

        onInit:function(){
// create brand new model object
   var oModel = new sap.ui.model.json.JSONModel();
//set or load data in the model
   oModel.setData({
    "empStr":{
        "Empid": 123,
        "EmpName": "Sriansh",
        "Salary": 5000,
        "Gender": "Male",
        "lock":false
    }
   });
//Make the model aware to the application
        sap.ui.getCore().setModel(oModel);
//another binding syntax
        var oSal = this.getView().byId("idSal");
        oSal.bindValue("/empStr/Salary");
//in the above line curly brace is not required because we are clearly telling SAP using bindValue      
   //another syntax     
 var oGender = this.getView().byId("idGender");
  oGender.bindProperty("value","/empStr/Gender");

  //oGender.bindProperty("enabled","/empStr/lock");

  //

  //another technique
  var oModel= sap.ui.getCore().getModel();
  oModel.setProperty("/empStr/lock",true);
}

    });
});