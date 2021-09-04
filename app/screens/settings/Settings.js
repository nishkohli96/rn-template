import React from 'react';
import { observer } from 'mobx-react-lite';
import { View, Switch, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import RNPickerSelect from 'react-native-picker-select';
import IoniconsI from 'react-native-vector-icons/Ionicons';

import Header from '_Shared/Header';
import { ThemedContainer, ThemedText } from '_Shared/Comps.themed';
import { useThemeStore } from '_Store/theme.store';
import { Languages, useLangStore } from '_Store/lang.store';
import CommonStyles from '_Themes/CommonStyles';

const Settings = () => {
    const { themeObj, setThemeAction } = useThemeStore();
    const { t } = useTranslation('common');
    const [isEnabled, setIsEnabled] = React.useState(themeObj.dark);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        setThemeAction(!isEnabled ? 'dark' : 'light');
    };

    const styles = StyleSheet.create({
        container: {
            paddingTop: 25,
            borderBottomWidth: 0.5,
            borderBottomColor: themeObj.colors.border,
        },
        flexRow: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 25,
            paddingRight: 25,
            borderTopWidth: 1,
            borderTopColor: themeObj.colors.border,
        },
        textCol: {
            flex: 0.5,
        },
        settingText: {
            fontSize: 20,
            fontWeight: '500',
        },
        settingResult: {
            fontSize: 20,
            color: themeObj.colors.text,
        },
        endContent: {
            flex: 0.5,
            alignItems: 'flex-end',
        },
    });

    return (
        <ThemedContainer>
            <Header title={t('DRAWER.settings')} />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.flexRow}>
                        <View style={styles.textCol}>
                            <ThemedText style={styles.settingText}>
                                {t('SETTINGS.darkTheme')}
                            </ThemedText>
                        </View>
                        <View style={styles.endContent}>
                            <Switch
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <View style={styles.textCol}>
                            <ThemedText style={styles.settingText}>
                                {t('SETTINGS.language')}
                            </ThemedText>
                        </View>
                        <View style={styles.endContent}>
                            <RNPickerSelect
                                items={Languages}
                                // placeholder={{
                                //     // <IoniconsI
                                //     //     name="ios-chevron-forward-sharp"
                                //     //     color={themeObj.colors.border}
                                //     //     size={CommonStyles.icons.drawerIcon}
                                //     // />
                                //     label: 'frf',
                                //     value: null,
                                //     color: '#007aba'
                                // }}
                                onValueChange={value => console.log(value)}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ThemedContainer>
    );
};

export default observer(Settings);
