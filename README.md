# Spirit Island Companion

## Initial Setup
1. `npm install -g react-native-cli`
2. Add `ANDROID_HOME` - `c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk` to User Environment Variables.
3. `yarn` to install dependencies.
4. Run Android emulator.
5. `yarn android` (can terminate after)

## Run Instructions
1. Run Android emulator.
2. `yarn start` 

## Generating APK
1. Put `.keystore` file in `/android/app`
2. Add password to `gradle.properties`
3. `cd android` and run `./gradlew assembleRelease`
