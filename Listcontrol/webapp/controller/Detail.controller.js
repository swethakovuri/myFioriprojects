sap.ui.define(
    ["Fioriapp/controller/BaseController"], 
    function(BaseController){
     'use strict';
     return BaseController.extend("Fioriapp.controller.Detail",{
       onInit:function(){
        //to avoid this error Cannot read properties of undefined (reading 'getRoute')
        //since it calls base classs controller and objects we create there we will get
        BaseController.prototype.onInit.apply(this);
        //route matched handler concept, it will trigger our method 
        //getData everytime the detail route is triggered
      // we can use it for preprocessing and binding purpose
       this.oRouter.getRoute("detail").attachMatched(this.getData);

       },
       getData:function(oEvent){
      // console.log("lalalalala");
      var myVar = oEvent.getParameter("arguments").value;
      console.log("Hello" + myVar);
       },
       onBack:function(){
         //step1 -go to parent
        //  var oAppCon = this.getView().getParent();
        //  //navigate to next view
        //  oAppCon.to("idPrevious");
        this.oRouter.navTo("home");
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