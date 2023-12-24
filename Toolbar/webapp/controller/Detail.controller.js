sap.ui.define(
  ["Fioriapp/controller/BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"],
  function (BaseController, Filter, FilterOperator) {
    'use strict';
    return BaseController.extend("Fioriapp.controller.Detail", {
      onInit: function () {
        //to avoid this error Cannot read properties of undefined (reading 'getRoute')
        //since it calls base classs controller and objects we create there we will get
        BaseController.prototype.onInit.apply(this);
        //route matched handler concept, it will trigger our method 
        //getData everytime the detail route is triggered
        // we can use it for preprocessing and binding purpose
        this.oRouter.getRoute("detail").attachMatched(this.getData);

      },
      getData: function (oEvent) {
        // console.log("lalalalala");
        var myVar = oEvent.getParameter("arguments").value;
        console.log("Hello" + myVar);
      },
      onBack: function () {
        //step1 -go to parent
        //  var oAppCon = this.getView().getParent();
        //  //navigate to next view
        //  oAppCon.to("idPrevious");
        this.oRouter.navTo("home");
      },
      onBeforeRendering: function () {
        //to disable button before view is displayed
        this.getView().byId("idCheck").setVisible(false);
      },
      onAfterRendering: function () {
        //After the view is displayed to the user
        $("#idnext--idCheck").hide(function () { $(this).fadeIn(5000) });
      },
      myField: null,
      oPopUpCities: null,
      onRequest: function (oEvent) {
        //snapshot of the field on which f4 was pressed as there are so many fields
        //inside the table, we need to extract the field on which later we set the value
        this.myField = oEvent.getSource();
        //we are checking if object is there, if it is there we don't create
        if (!this.oPopUpCities) {
          this.oPopUpCities = new sap.ui.xmlfragment("Fioriapp.fragments.popup", this);
          this.oPopUpCities.setTitle("Cities");
          this.getView().addDependent(this.oPopUpCities);
          this.oPopUpCities.bindAggregation("items", {
            path: 'default>/cities',
            template: new sap.m.StandardListItem({
              description: "{default>famousFor}",
              title: "{default>name}"
            })
          });
        }
        this.oPopUpCities.open();

      },
      oPopupSuppliers: null,
      onFilter: function (oEvent) {
        //check if popup object was already created
        //we are checking if object is there, if it is there we don't create
        if (!this.oPopupSuppliers) {
          //if not created create an object pass the controller object to the fragment object
          this.oPopupSuppliers = new sap.ui.xmlfragment("supplierPopup", "Fioriapp.fragments.popup", this);
          //get text from i18n
          var oResource = this.getOwnerComponent().getModel("i18n");
          var sTitle = oResource.getResourceBundle().getText("XTIT_SUPPLIER");
          this.oPopupSuppliers.setTitle(sTitle);
          this.oPopupSuppliers.setMultiSelect(true);
          this.getView().addDependent(this.oPopupSuppliers);
          this.oPopupSuppliers.bindAggregation("items", {
            path: 'default>/suppliers',
            template: new sap.m.ObjectListItem({
              intro: "{default>city}",
              title: "{default>name}",
              number: "{default>sinceWhen}",
              icon: "sap-icon://supplier"
            })
          });
        }
        this.oPopupSuppliers.open();

      },
      onConfirm: function (oEvent) {

        var sId = oEvent.getSource().getId();

        if (sId.indexOf("supplierPopup" != -1)) {
          // user can select multiple items
          //for each item we wil build filter object
          var aItems = oEvent.getParameter("selectedItems");
          var aFilter = [];
          //for each item we will build a filter object
          for (let i = 0; i < aItems.length; i++) {
            const element = aItems[i];
            aFilter.push(new Filter("name", FilterOperator.EQ, element.getTitle()));
          }
          //build a new filter with OR
          var oFilter = new Filter({
            filters: aFilter,
            and: false
          });

          this.getView().byId("idTable").getBinding("items").filter(oFilter);
        } else {

          var selItem = oEvent.getParameter("selectedItem");
          this.myField.setValue(selItem.getTitle());
        }
      }
    });

  });