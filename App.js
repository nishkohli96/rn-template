import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components/native';
import { observer } from 'mobx-react';
import Home from '_Screens/home/Home';
import { useThemeStore } from '_Store/theme.store';

const Stack = createStackNavigator();

const App = () => {
    const { themeObj, getThemeAction } = useThemeStore();
    console.log('themeObj: ', themeObj);

    React.useEffect(() => {
        getThemeAction();
    }, []);

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <ThemeProvider theme={themeObj}>
                    <Stack.Navigator initialRouteName={Home}>
                        <Stack.Screen name="Home" component={Home} />
                    </Stack.Navigator>
                </ThemeProvider>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default observer(App);
