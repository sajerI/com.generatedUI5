sap.ui.define([
    "./BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.myorg.generatedUI5project.controller.MainView", {
            onInit: function () {
                const oData = {
                    "name": "John",
                    "lastName" : "Doe",
                    "age": 34
                }
                var oJSON = new sap.ui.model.json.JSONModel(oData);
                this.setModel(oJSON,"test")
                var oModel = this.getModel("test")
                console.log(oModel)

            }
        });
    });
