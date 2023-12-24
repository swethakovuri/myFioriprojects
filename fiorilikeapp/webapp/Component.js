sap.ui.define(
    ["sap/ui/core/UIComponent"],
    function(UIComponent){
        'use strict';
 //the below statement is returning an object of UI component
     return UIComponent.extend("Fioriapp.Component",{
        metadata:{},
        init: function(){
     //in this child class constructor,i want to call base class constructor
     //Base class has lots of power, until i call i won't get it
       UIComponent.prototype.init.apply(this);
        },
        createContent: function(){
         //this is root view
            var oView = new sap.ui.view({
                viewName : "Fioriapp.view.App",
                type     : "XML"
            });
// get the container control object which is inside app view
            var oContainer = oView.byId("idApp");
 //create objects of your new views
           var oView1 = new sap.ui.view({
            viewName : "Fioriapp.view.Main",
            id       : "idPrevious",
            type     : "XML"
        });
        var oView2 = new sap.ui.view({
            viewName : "Fioriapp.view.Detail",
            id :"idnext",
            type     : "XML"
        }); 
//add our views inside container directly
        oContainer.addPage(oView1);
        oContainer.addPage(oView2);


            return oView;
        },
        destroy: function(){

        }

     });
});