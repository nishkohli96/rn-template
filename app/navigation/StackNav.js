import React from 'react';
import { Platform, BackHandler, Alert } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useFocusEffect, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNav from './DrawerNav';
import Onboarding from '_Screens/onboarding/Onboarding';
import { useOnboardStore } from '_Store/onboard.store';

const StackNav = () => {
    const Stack = createStackNavigator();
    const { isOnboard } = useOnboardStore();

    // if (Platform.OS === 'android') {
    //     useFocusEffect(
    //         React.useCallback(() => {
    //             const backAction = () => {
    //                 Alert.alert(
    //                     'Hold on!',
    //                     'Are you sure you want to go back?',
    //                     [
    //                         {
    //                             text: 'Cancel',
    //                             onPress: () => null,
    //                             style: 'cancel',
    //                         },
    //                         {
    //                             text: 'YES',
    //                             onPress: () => BackHandler.exitApp(),
    //                         },
    //                     ],
    //                 );
    //                 return true;
    //             };

    //             const backHandler = BackHandler.addEventListener(
    //                 'hardwareBackPress',
    //                 backAction,
    //             );

    //             return () => backHandler.remove();
    //         }, []),
    //     );
    // }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={isOnboard ? 'DrawerNav' : 'Onboarding'}
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="DrawerNav" component={DrawerNav} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default observer(StackNav);
