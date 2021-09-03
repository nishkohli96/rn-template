import React from 'react';
import { observer } from 'mobx-react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import StackNav from '_Navigation/StackNav';
import { useThemeStore } from '_Store/theme';
import { useLangStore } from '_Store/lang';
import common_en from '_I18N/en/common.json';
import common_fr from '_I18N/fr/common.json';
import common_hi from '_I18N/hi/common.json';

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
                    <StackNav />
                </ThemeProvider>
            </I18nextProvider>
        </SafeAreaProvider>
    );
};

export default observer(App);
