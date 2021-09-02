import React from 'react';
import i18next from 'i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components/native';
import { observer } from 'mobx-react';
import { I18nextProvider } from 'react-i18next';
import Home from '_Screens/home/Home';

import { useThemeStore } from '_Store/theme.store';
import { useLangStore } from '_Store/lang.store';
import common_en from '_I18N/en/common.json';
import common_fr from '_I18N/fr/common.json';
import common_hi from '_I18N/hi/common.json';

const Stack = createStackNavigator();

const App = () => {
    const { themeObj, getThemeAction } = useThemeStore();
    const { langName, getLangAction } = useLangStore();

    React.useEffect(() => {
        getThemeAction();
        getLangAction();
        i18next.init({
            interpolation: { escapeValue: false }, // React already does escaping
            lng: langName, // language to use
            fallbackLng: 'en', // in case no language found
            resources: {
                en: {
                    common: common_en, // 'common' is our custom namespace
                },
                fr: {
                    common: common_fr,
                },
                hi: {
                    common: common_hi,
                },
            },
        });
    }, [langName]);

    return (
        <SafeAreaProvider>
            <I18nextProvider i18n={i18next}>
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
