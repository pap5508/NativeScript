﻿/* tslint:disable:no-unused-variable */
import app = require("application");
import TKUnit = require("./TKUnit");
import commonTests = require("./application-tests-common");

// merge the exports of the application_common file with the exports of this file
declare var exports;
require("utils/module-merge").merge(commonTests, exports);

// <snippet module="application" title="application">
// ### Adding a Notification Observer (iOS)
// ``` JavaScript
//// Add the notification observer
if (app.ios) {
    app.ios.addNotificationObserver(UIDeviceBatteryLevelDidChangeNotification,
        function onReceiveCallback(notification: NSNotification) {
            var percent = UIDevice.currentDevice().batteryLevel * 100;
            var message = "Battery: " + percent + "%";
            ////console.log(message);
        });
}
//// When no longer needed, remove the notification observer
if (app.ios) {
    app.ios.removeNotificationObserver(UIDeviceBatteryLevelDidChangeNotification);
}
// ```
// </snippet> 