sap.ui.define(
    ["Fioriapp/controller/BaseController"], 
    function(BaseController){
     'use strict';
     return BaseController.extend("Fioriapp.controller.Main",{
       onNext: function(){
        //step1 -go to parent
        //var oAppCon = this.getView().getParent();
        //navigate to next view
        //oAppCon.to("idnext");
        this.oRouter.navTo("detail");

       
     


       }

     });

});