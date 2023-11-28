sap.ui.jsview("fiori.view.Main",
{

    getControllerName:function(){
      //ui5 will create controller object 
        return "fiori.controller.Main";
    },

    createContent:function(oController){
        var oButton = new sap.m.Button("idBtn",{
            text: "Click me",
          //  press: function(){
            //    alert("Welcome");
            //}
            press: oController.myFunction
         });

         return oButton;
    }

});