sap.ui.jsview("sap.ui.demo.view.Main",
{

    getControllerName:function(){
      //ui5 will create controller object 
        return "sap.ui.demo.controller.View1";
    },

    createContent:function(oController){
        var oButton = new sap.m.Button("idBtn",{
            text: "Click me",
          //  press: function(){
            //    alert("Welcome");
            //}
            press: oController.myFunction
         });

         var oInp = new sap.m.Input("idinput");

         return[oButton, oInp];
                
         
    }

});