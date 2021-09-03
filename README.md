# RnTemplate

## Developer Guide

-   Create react-native-app with custom package name.
```react-native init MyApp --package=com.organizationname.app```

-   Generate your app Icon using [MakeAppIcon](https://makeappicon.com/).Read More about app icon setup on this [Link](https://aboutreact.com/react-native-change-app-icon/).iOS icons can be generated using `Icon Set Creater` app available on the App Store.

- Import this statement at the topmost line of your root as per `react-navigation` docs.
```import 'react-native-gesture-handler';```

-   Enable Hermes [link](https://reactnative.dev/docs/hermes)

-   To make sure that the content doesn't overlap, especially in iPhones, use `SafeAreaProvider`. Import this stmt at the top of your app code.
```import { SafeAreaProvider } from 'react-native-safe-area-context';```

-   Install [Async Storage](https://react-native-async-storage.github.io/async-storage/). Needs to be manually linked. Go to [this thread](https://stackoverflow.com/questions/61479644/invalid-podfile-file-unable-to-locate-the-executable-node) if `npx pod-install` fails to run.

-   Dependencies for `@react-navigation/stack` -> `react-native-safe-area-context`, `react-native-gesture-handler`. Run `npx pod-install` after installing the dependencies.

- Manually link `react-native-vector-icons` in ios [link](https://medium.com/@vimniky/how-to-use-vector-icons-in-your-react-native-project-8212ac6a8f06)
