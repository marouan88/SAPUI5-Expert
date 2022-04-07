
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"  

],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * 
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("logaligroup.sapui5.controller.App", {
            onInit: function () {

            },

            onShowHello: function () {
                //read text from i18n
                // @ts-ignore
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecupient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecupient]);
                MessageToast.show(sMsg);
            }

        });

    });