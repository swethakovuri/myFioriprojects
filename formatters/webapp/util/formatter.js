sap.ui.define([
    "sap/ui/core/format/NumberFormat"
],function(NumberFormat){
    'use strict';
    return{
        changeNameToUC : function(inp){
            if (inp){
              return(inp.toUpperCase());               
            }
        },
        formatCurrency : function(amount,curr){
            //get object of number format class given by ui5
            var oCurFormat = NumberFormat.getCurrencyInstance({
                //to show currency in $ format
                currencyCode:false
            });
            //format the currency amount
            return oCurFormat.format(amount,curr);
        },
        getStatus: function(eStat){
            debugger;
            switch (eStat){
                case 'E':
                  return "Employed";
                  break;
                case 'T':
                  return "Terminated";
                  break;
                default:
                break;
            }
        },
        getStatusColor : function(eStat){
            switch (eStat){
                case 'E':
                  return "Success";
                  break;
                case 'T':
                  return "Error";
                  break;
                default:
                break;
            }

        }

    };
})