import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import IoniconsI from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

import packageJson from '../../package.json';
import {
    ThemedHeading,
    ThemedText,
    ThemedContainer,
} from '_Shared/Comps.themed';
import { useThemeStore } from '_Store/theme.store';

const DrawerLayout = () => {
    const { t } = useTranslation('common');
    const { themeObj } = useThemeStore();
    const navigation = useNavigation();

    return (
        <ThemedContainer>
            <DrawerContentScrollView>
                <Drawer.Section>
                    <DrawerItem
                        icon={() => (
                            <IoniconsI
                                name="home-outline"
                                color={themeObj.colors.border}
                                size={themeObj.icons.drawerIcon}
                            />
                        )}
                        label={() => (
                            <ThemedHeading>{t('DRAWER.home')}</ThemedHeading>
                        )}
                        onPress={() => {
                            navigation.navigate('Home');
                        }}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem
                    label={() => (
                        <ThemedText>
                            {t('APP.version', {
                                appVersion: packageJson.version,
                            })}
                        </ThemedText>
                    )}
                />
            </Drawer.Section>
        </ThemedContainer>
    );
};

export default DrawerLayout;
