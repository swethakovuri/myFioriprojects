//all JS files start with sap.ui.define 
//this is a component.js file - here we have to load UI component
//there are different types of component - UIcomponent, Webcomponent etc
sap.ui.define([
    "sap/ui/core/UIComponent"
    ], function(UIComponent) {
        'use strict';
        //now as usual do inheritance and redefine by extend
        return UIComponent.extend("sap.ui.demo.Component",{
            //once we do these minimal steps - UI5 finds component.js file and is happy
            //now look at different sections of component.js - like metadata, initialisation, content etc
            metadata:{
                //here link the manifest.json file
                //create manifest.json based on this file here
                //https://github.com/SAP-docs/sapui5/blob/main/docs/07_APF/descriptor-manifest-json-74038a5.md
                manifest : "json"
            },
            init:function(){
                //call base class constructor? looks so
                UIComponent.prototype.init.apply(this);//to initialise the UIcomponent
                this.oRouter = this.getRouter();
                this.oRouter.initialize();//initializing the router
                console.log(this.oRouter);
            }
    /*        ,
             createContent:function(){
                //now here we need to look for App view and return it
                //so lets create app view
                var oAppView = new sap.ui.view("AppView",{
                    viewName : "sap.ui.demo.view.App",
                    type : "XML"
                });
                //from the app view - get the App container control
                var oAppContainer = oAppView.byId("appContainer");
                //now create View1 and add it to the pages aggregation of App container control
                var oView1 = new sap.ui.view("View1",{
                    viewName : "sap.ui.demo.view.View1",
                    type : "XML"
                });
                //add View1 to the App container control of the App view via the pages aggregation
                oAppContainer.addPage(oView1);
                //now go back to the metadata section and link manifest.json file
    
                return oAppView;
            }*/
        }); 
    });