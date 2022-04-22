// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast", 
    "sap/ui/core/Fragment"
],
    /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller
    * @param {typeof sap.m.MessageToast} MessageToast
    * @param {typeof sap.ui.core.Fragment} Fragment
    */
    function (Controller, MessageToast, Fragment) {
        "use strict";
        return Controller.extend("logaligroup.sapui5.controller.HelloPanel", {
            onInit: function () {
            },
            onShowHello: function () {
                //read text from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //read property from data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }, 

            onShowDialog: function(){
                const oView = this.getView();

                if(!this.byId("helloDialog")){
                    Fragment.load({
                        id: oView.getId(),
                        name: "logaligroup.sapui5.view.HelloDialog"
                    }).then(function(oDialog){
                        oView.addDependent(oDialog);
                        oDialog.indexOfDependent();
    
                    })

                }
                else{
                    this.byId("helloDialog").open();
                }
                
                
            }
        });
    });