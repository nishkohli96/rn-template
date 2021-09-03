import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import IoniconsI from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

import packageJson from '../../package.json';
import {
    ThemedHeading,
    ThemedText,
    ThemedContainer,
} from '_Shared/Comps.themed';
import CommonStyles from '_Themes/CommonStyles';
import { useThemeStore } from '_Store/theme.store';

const DrawerLayout = () => {
    const { t } = useTranslation('common');
    const { themeObj } = useThemeStore();
    const navigation = useNavigation();

    return (
        <ThemedContainer>
            <DrawerContentScrollView>
                <DrawerItem
                    icon={() => (
                        <IoniconsI
                            name="logo-android"
                            color={themeObj.colors.border}
                            size={CommonStyles.icons.drawerIcon}
                        />
                    )}
                    label={() => <ThemedHeading>TABS</ThemedHeading>}
                    onPress={() => {
                        navigation.navigate('TabsNav');
                    }}
                />
                <DrawerItem
                    icon={() => (
                        <IoniconsI
                            name="home-outline"
                            color={themeObj.colors.border}
                            size={CommonStyles.icons.drawerIcon}
                        />
                    )}
                    label={() => (
                        <ThemedHeading>{t('DRAWER.home')}</ThemedHeading>
                    )}
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                />
                <DrawerItem
                    icon={() => (
                        <IoniconsI
                            name="musical-notes"
                            color={themeObj.colors.border}
                            size={CommonStyles.icons.drawerIcon}
                        />
                    )}
                    label={() => <ThemedHeading>IntroScreen</ThemedHeading>}
                    onPress={() => {
                        navigation.navigate('IntroScreen1');
                    }}
                />
                <DrawerItem
                    icon={() => (
                        <IoniconsI
                            name="ios-settings-outline"
                            color={themeObj.colors.border}
                            size={CommonStyles.icons.drawerIcon}
                        />
                    )}
                    label={() => <ThemedHeading>Settings</ThemedHeading>}
                    onPress={() => {
                        navigation.navigate('IntroScreen2');
                    }}
                />
            </DrawerContentScrollView>
            <DrawerItem
                label={() => (
                    <ThemedText>
                        {t('APP.version', {
                            appVersion: packageJson.version,
                        })}
                    </ThemedText>
                )}
            />
        </ThemedContainer>
    );
};

export default DrawerLayout;
