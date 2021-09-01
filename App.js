import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components/native';
import { observer } from 'mobx-react';
import Home from '_Screens/home/Home';
import Dark from '_Store';

const Stack = createStackNavigator();

const App = () => {
    React.useEffect(() => {
        rootStore.theme.getThemeAction();
    }, []);

    return (
        <SafeAreaProvider>
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
        </SafeAreaProvider>
    );
};

export default observer(App);
