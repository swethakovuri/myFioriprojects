sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function (Controller) {
        'use strict';
        return Controller.extend("fioriapp.controller.BaseController",{
        
            onInit:function(){
                this.oRouter = this.getOwnerComponent().getRouter();
              },
        });
    });