sap.ui.define(
    ["Fioriapp/controller/BaseController"], 
    function(BaseController){
     'use strict';
     return BaseController.extend("Fioriapp.controller.Detail",{

       onBack:function(){
         //step1 -go to parent
         var oAppCon = this.getView().getParent();
         //navigate to next view
         oAppCon.to("idPrevious");
       },
       onBeforeRendering: function(){
        //to disable button before view is displayed
        this.getView().byId("idCheck").setVisible(false);
       },
       onAfterRendering: function(){
        //After the view is displayed to the user
        $("#idnext--idCheck").hide(function(){ $(this).fadeIn(5000) });
       }
     });

});