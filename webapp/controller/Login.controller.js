//amd like syntax asynchronous module loading
sap.ui.define(
    //base class
    //["sap/ui/core/mvc/Controller"], 
    ["fiori/controller/BaseController"],
    function(Controller){
        return Controller.extend("fiori.controller.Login", {

            onInit: function(){
               oView = this.getView();
            },
             //oView: this.getView(),
            onLogin: function(){
             
                var oInp = this.oView.byId("idUser");
                var oPassword = this.oView.byId("idPassword");
                var sUser = oInp.getValue();
                var sPassword = oPassword.getValue();
                if(sUser === "" || sPassword ===""){
                    alert("Please enter atleast some value");
                    //if we give return it will not go to the next statement, it will come out
                    return;
                }
                if(sUser === sPassword){
                    document.write("Login Success");
                } else {
                    alert("Login failed");
                }
              
            
            }

        });

})