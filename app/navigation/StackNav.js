import React from 'react';
import { observer } from 'mobx-react-lite';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNav from './DrawerNav';
import Onboarding from '_Screens/onboarding/Onboarding';
import { useOnboardStore } from '_Store/onboard.store';

const StackNav = () => {
    const Stack = createStackNavigator();
    const { isOnboard } = useOnboardStore();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={isOnboard ? "DrawerNav" : "Onboarding"}>
                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DrawerNav"
                    component={DrawerNav}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default observer(StackNav);
