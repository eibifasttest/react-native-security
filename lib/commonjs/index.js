"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detect = detect;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'react-native-security' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const Security = _reactNative.NativeModules.Security ? _reactNative.NativeModules.Security : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
function detect() {
  Security.detect();
}
//# sourceMappingURL=index.js.map
