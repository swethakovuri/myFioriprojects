sap.ui.define(
   ["Model/controller/BaseController",
      "Model/models/models"],
   function (BaseController, models) {
      return BaseController.extend("Model.controller.Main", {

         onInit: function () {

            //var oModel = models.createMyJSONModel();
            // var oModel = models.createMyJSONModel("models/sample.json");
            //the below model is default model
          //  var oModel = models.createMyJSONModel("models/sample2.json");
            //the above statement will overwite model data, so we have to use named model
            //var oModel1 = models.createMyJSONModel("models/sample.json", "iron");
            var OXMLModel = models.createMYXMLModel("models/myData.xml");
           
            sap.ui.getCore().setModel(OXMLModel);
             
           // var oGender = this.getView().byId("idGender");
            //oGender.bindProperty("value", "/empStr/Gender");

            //oGender.bindProperty("enabled","/empStr/lock");

            //another technique
            //var oModel = sap.ui.getCore().getModel();
            //oModel.setProperty("/empStr/lock", true);
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