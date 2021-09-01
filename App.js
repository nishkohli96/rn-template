import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '_Screens/home/Home';

const Stack = createStackNavigator();

const App = () => {
    // const [firstScreen, setFirstScreen] = React.useState();

    // AsyncStorage.getItem('firstTime').then((item) => {
    //     console.log('itm ', item);
    //     if (!item) {
    //         console.log('in this loop');
    //         setFirstScreen('IntroScreen');
    //     } else {
    //         setFirstScreen('NavDrawer');
    //     }
    // });

    // if (!firstScreen) {
    //     /* Feel free to design a splash Screen for this part */
    //     return (
    //         <View>
    //             <Text>App loading</Text>
    //         </View>
    //     );
    // }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Home}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    // screenOptions={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
