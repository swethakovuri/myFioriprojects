sap.ui.define(
  ["Fioriapp/controller/BaseController",
  "Fioriapp/util/formatter",
    'sap/m/MessageBox',
    'sap/m/MessageToast'],
  function (BaseController,Formatter, MessageBox, MessageToast) {
    'use strict';
    return BaseController.extend("Fioriapp.controller.Main", {
      formatter: Formatter,
      onNext: function (ivalue) {
        //step1 -go to parent
        //var oAppCon = this.getView().getParent();
        //navigate to next view
        //oAppCon.to("idnext");
        this.oRouter.navTo("detail",{
          value:ivalue
       });

      },
      onItemPress: function(oEvent){
      //get the item object on whoch item user clicked
       var oSelectedItem = oEvent.getParameter("listItem");
       //Get the value of fruit name from that object--title since we have mapped name
       //to title in object list item
       var oTitle = oSelectedItem.getTitle();
       // call router to navigate and set the value
      // this.oRouter.navTo("detail",{
        //  value:oTitle
       //});
       this.onNext(oTitle);
       //to get index of fruit selected
       //var sPath = oSelectedItem.getBindingContextPath();
       //var sIndex = sPath.split("/")[sPath.split("/").length - 1];
       //this.onNext(sIndex);

      },
      onOrder: function () {
        //alert("Order is success");
        MessageBox.confirm("Do you wish to continue?", {
          title: "Confirm Order",
          onClose: function (value) {
            if (value === "OK") {
              MessageToast.show("Your order is placed successfully")
            } else {
              MessageBox.error("Order was rejected")
            }

          }
        });

      },

      onSearch: function (oEvent) {
        //step1 we need to know what user enter on search field
        var searchval = oEvent.getParameter("query");
        //prepare filter for that search
        var oFilter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, searchval);
        //Inject the filter inside the list control object
        var oList = this.getView().byId("idList");
        oList.getBinding("items").filter([oFilter]);

      }
    });
  });