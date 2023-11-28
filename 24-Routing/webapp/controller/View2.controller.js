sap.ui.define([
    "sap/ui/core/mvc/Controller"
    ], function(Controller) {
        'use strict';
        return Controller.extend("sap.ui.demo.controller.View2",{
            onInit:function(){
                this.oRouter = this.getOwnerComponent().getRouter();
            },
            onBack:function(){
                console.log(this.oRouter);
                this.oRouter.navTo("home");
            }
        });
    });