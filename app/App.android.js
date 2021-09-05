import 'react-native-gesture-handler';
import React from 'react';
import {
    StatusBar,
    BackHandler,
    Text,
    Modal,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { useTranslation } from 'react-i18next';

import StackNav from '_Navigation/StackNav';
import { useThemeStore } from '_Store/theme.store';
import { useLangStore } from '_Store/lang.store';
import { useOnboardStore } from '_Store/onboard.store';
import { ThemedText } from '_Shared/Comps.themed';

import common_en from '_I18N/en/common.json';
import common_fr from '_I18N/fr/common.json';
import common_hi from '_I18N/hi/common.json';

const App = () => {
    const { getOnboardAction } = useOnboardStore();
    const { themeObj, getThemeAction } = useThemeStore();
    const { langName, getLangAction } = useLangStore();
    const { t } = useTranslation('common');

    const [open, setOpen] = React.useState(false);

    const backAction = () => {
        setOpen(true);
        return true; /* else the app will exit */
    };

    const styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        modalBody: {
            width: 250,
            height: 140,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: themeObj.colors.border,
            justifyContent: 'space-between',
            padding: 10,
            // backgroundColor: themeObj.colors.card,
        },
        modalHeading: {
            color: themeObj.colors.heading,
            fontSize: 22,
            fontWeight: '500',
            marginLeft: 10,
            marginTop: 5,
        },
        btmBtns: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
        },
        halfRow: {
            flex: 0.5,
            alignItems: 'center',
        },
        touchArea: { padding: 10 },
    });

    const ModalComponent = () => (
        <Modal
            transparent={true}
            visible={open}
            onRequestClose={() => setOpen(false)}>
            <View style={styles.centeredView}>
                <View style={styles.modalBody}>
                    <View>
                        <Text style={styles.modalHeading}>{t('HOMESCREEN.exitMsg')}</Text>
                    </View>
                    <View style={styles.btmBtns}>
                        <View style={styles.halfRow}>
                            <TouchableOpacity
                                style={styles.touchArea}
                                onPress={() => setOpen(false)}>
                                <ThemedText>Cancel</ThemedText>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.halfRow}>
                            <TouchableOpacity
                                style={styles.touchArea}
                                onPress={() => BackHandler.exitApp()}>
                                <ThemedText>OK</ThemedText>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );

    React.useEffect(() => {
        getOnboardAction();
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

    React.useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backAction);

        return () =>
            BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, []);

    return (
        <SafeAreaProvider>
            <I18nextProvider i18n={i18next}>
                <ThemeProvider theme={themeObj}>
                    <StatusBar
                        animated={true}
                        backgroundColor={themeObj.colors.primary}
                        barStyle={
                            themeObj.dark ? 'light-content' : 'dark-content'
                        }
                        networkActivityIndicatorVisible={true} // for iOS
                    />
                    <ModalComponent />
                    <StackNav />
                </ThemeProvider>
            </I18nextProvider>
        </SafeAreaProvider>
    );
};

export default observer(App);
