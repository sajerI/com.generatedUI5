/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["com/myorg/generatedUI5project/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
