import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components/native';
import { observer } from 'mobx-react';
import Home from '_Screens/home/Home';
import rootStore from '_Store';

const Stack = createStackNavigator();

const App = () => {

    React.useEffect(() => {
        rootStore.theme.getThemeAction();
    },[])
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
            <ThemeProvider theme={rootStore.theme.themeObj}>
                <Stack.Navigator initialRouteName={Home}>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </ThemeProvider>
        </NavigationContainer>
    );
};

export default observer(App);
