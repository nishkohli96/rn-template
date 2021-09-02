import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import packageJson from '../../package.json';
import { ThemedText, ThemedContainer } from '_Shared/Comps.themed';


const DrawerLayout = () => {

    const { t } = useTranslation('common');
    
    return (
        <ThemedContainer style={styles.container}>
            <DrawerContentScrollView>
                <ThemedText> Drawer </ThemedText>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
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