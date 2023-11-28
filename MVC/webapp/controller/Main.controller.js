sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){

     return Controller.extend("fiori.controller.Main",{

        myFunction: function(){

            //alert("Welcome");
            //get object of input field
            //the below one will HTML element object
           // var oControl = document.getElementById("idinput");
           //the below will get runtime instance of running object
          var oId = sap.ui.getCore().byId("idinput");
          oId.setEnabled(false);

        }

     });

});