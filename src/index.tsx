import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-security' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const Security = NativeModules.Security
  ? NativeModules.Security
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function detect(): void {
  Security.detect();
}
