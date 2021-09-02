import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components/native';
import { observer } from 'mobx-react';
import { I18nextProvider } from 'react-i18next';
import Home from '_Screens/home/Home';
import { useThemeStore } from '_Store/theme.store';
import { geti18config } from '_I18N/i18config';

const Stack = createStackNavigator();

const App = () => {
    const { themeObj, getThemeAction } = useThemeStore();

    React.useEffect(() => {
        getThemeAction();
    }, []);

    return (
        <SafeAreaProvider>
            <I18nextProvider i18n={geti18config()}>
                <ThemeProvider theme={themeObj}>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName={Home}>
                            <Stack.Screen
                                name="Home"
                                component={Home}
                                options={{ headerShown: false }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </ThemeProvider>
            </I18nextProvider>
        </SafeAreaProvider>
    );
};

export default observer(App);
