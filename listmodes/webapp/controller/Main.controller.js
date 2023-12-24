sap.ui.define(
  ["Fioriapp/controller/BaseController",
    "Fioriapp/util/formatter",
    'sap/m/MessageBox',
    'sap/m/MessageToast'],
  function (BaseController, Formatter, MessageBox, MessageToast) {
    'use strict';
    return BaseController.extend("Fioriapp.controller.Main", {
      formatter: Formatter,
      onNext: function (ivalue) {
        //step1 -go to parent
        //var oAppCon = this.getView().getParent();
        //navigate to next view
        //oAppCon.to("idnext");
        this.oRouter.navTo("detail", {
          value: ivalue
        });

      },
      onItemPress: function (oEvent) {
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

      },
      OnShowSelItems: function () {
        //get list control object
        var oList = this.getView().byId("idList");
        //Get all selected list items
        var aItems = oList.getSelectedItems();
        //loop over them ad print one by one
        aItems.forEach(element => {
          console.log(element.getTitle());
        });

      },
      onDelete: function (oEvent) {
        //which item was clicked to be deleted
        debugger;

        var oDeletedItem = oEvent.getParameter("listItem");

        //get address of item
        var sPath = oDeletedItem.getBindingContextPath();
        //get index
        var sIndex = sPath.split("/")[sPath.split("/").length - 1];
        //read all the model data
        var oModel = this.getOwnerComponent().getModel("default");
        var aData = oModel.getProperty("/fruits");
        //Deleete the item @ index
        aData.splice(sIndex, 1);


        oModel.setProperty("/fruits", aData);
        //find same item address in modelbinding by looping
        //delete that item from array and come out of the loop
        //set the data back to the model
      }
    });
  });