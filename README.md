# RnTemplate

## Developer Guide

- Enable Hermes [link](https://reactnative.dev/docs/hermes) 
- To make sure that the content doesn't overlap, especially in iPhones, use `SafeAreaProvider`. Import this stmt at the top of your app code.

```import { SafeAreaProvider } from 'react-native-safe-area-context';
```
- Install [Async Storage](https://react-native-async-storage.github.io/async-storage/). Needs to be manually linked. Go to [this thread](https://stackoverflow.com/questions/61479644/invalid-podfile-file-unable-to-locate-the-executable-node) if `npx pod-install` fails to run.

- Dependencies for `@react-navigation/stack` -> `react-native-safe-area-context`, `react-native-gesture-handler`. Run `npx pod-install` after installing the dependencies.