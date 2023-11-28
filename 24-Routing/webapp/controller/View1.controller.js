sap.ui.define([
    "sap/ui/core/mvc/Controller"
    ], function(Controller) {
        'use strict';
        return Controller.extend("sap.ui.demo.controller.View1",{
            onInit:function(){
                this.oRouter = this.getOwnerComponent().getRouter();
            },
            onNext:function(){
                debugger;
                console.log("onNext");
                console.log(this.oRouter);
                this.oRouter.navTo("next");
            }
        });
    });