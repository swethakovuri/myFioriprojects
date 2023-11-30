sap.ui.define(
   ["Model/controller/BaseController",
      "Model/models/models"],
   function (BaseController, models) {
      return BaseController.extend("Model.controller.Main", {

         onInit: function () {

            //var oModel = models.createMyJSONModel();
            // var oModel = models.createMyJSONModel("models/sample.json");
            //the below model is default model
            var oModel = models.createMyJSONModel("models/sample2.json");
            //the above statement will overwite model data, so we have to use named model
            var oModel1 = models.createMyJSONModel("models/sample.json", "iron");
            // create brand new model object
            //var oModel = new sap.ui.model.json.JSONModel();
            //set or load data in the model
            //    oModel.setData({
            //     "empStr":{
            //         "Empid": 123,
            //         "EmpName": "Sriansh",
            //         "Salary": 5000,
            //         "Gender": "Male",
            //         "lock":false
            //     }
            //    });
            //Make the model aware to the application
            //default model
            sap.ui.getCore().setModel(oModel);
            sap.ui.getCore().setModel(oModel1, "iron");
            //another binding syntax
            //   var oSal = this.getView().byId("idSal");
            // oSal.bindValue("/empStr/Salary");
            //in the above line curly brace is not required because we are clearly telling SAP using bindValue      
            //another syntax     
            var oGender = this.getView().byId("idGender");
            oGender.bindProperty("value", "/empStr/Gender");

            //oGender.bindProperty("enabled","/empStr/lock");

            //another technique
            var oModel = sap.ui.getCore().getModel();
            oModel.setProperty("/empStr/lock", true);
         },
         onChange: function () {
//this will flip model when we select switch
            var firstModel = sap.ui.getCore().getModel();
            var secondModel = sap.ui.getCore().getModel("iron");
            sap.ui.getCore().setModel(firstModel, "iron");
            sap.ui.getCore().setModel(secondModel);
         },

         mario: false,
         onClick: function () {

            //technique 1
            // if(this.mario === false){
            //     this.mario = true;
            // } else{
            //     this.mario = false;
            // }
            // var oModel= sap.ui.getCore().getModel();
            // oModel.setProperty("/empStr/lock",this.mario);

            //technique2
            //get state of input field

            var oInpfield = this.getView().byId("idEmp");
            var state = oInpfield.getEnabled();

            if (state === true) {
               state = false;
            } else {
               state = true;
            }
            var oModel = sap.ui.getCore().getModel();
            oModel.setProperty("/empStr/lock", state);

         },

         onRowSelect: function (oEvent) {

            //debugger;
            //first technique
            //var oModel = sap.ui.getCore().getModel();
            //var sRowData = oModel.getProperty(oEvent.getParameter("rowContext").getPath());
            //oModel.setProperty("/empStr",sRowData);

            //another technique
            //we link the simple form with the same memory where the row was taking data from
            //directly get path of the memory
            var sPath = oEvent.getParameter("rowContext").getPath();
            //get simpleform object
            var oSimpleForm = this.getView().byId("idSimpleForm");
            //linking entire simple form with-for simple form perspective it is called absolute path
            oSimpleForm.bindElement(sPath);
         }
      });
   });