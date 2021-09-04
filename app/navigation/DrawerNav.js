import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerLayout from './DrawerLayout';
import TabsNav from './TabsNav';
import Home from '_Screens/home/Home';
import IntroScreen1 from '_Screens/intro/IntroScreen1';
import IntroScreen2 from '_Screens/intro/IntroScreen2';
import IntroScreen3 from '_Screens/intro/IntroScreen3';

/*
Refer https://reactnavigation.org/docs/drawer-navigator#checking-if-the-drawer-is-open
*/
const Drawer = createDrawerNavigator();

const NavDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            overlayColor="transparent"
            screenOptions={{ headerShown: false }}
            drawerContent={() => <DrawerLayout />}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="TabsNav" component={TabsNav} />
            <Drawer.Screen name="IntroScreen1" component={IntroScreen1} />
            <Drawer.Screen name="IntroScreen2" component={IntroScreen2} />
            <Drawer.Screen name="IntroScreen3" component={IntroScreen3} />
        </Drawer.Navigator>
    );
};

export default NavDrawer;
