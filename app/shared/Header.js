import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IoniconsI from 'react-native-vector-icons/MaterialIcons';

import { ThemedHeading } from './Comps.themed';
import { useThemeStore } from '_Store/theme.store';

const Header = ({ title, openDrawer = false }) => {
    const navigation = useNavigation();
    const { themeObj } = useThemeStore();

    const styles = StyleSheet.create({
        container: {
            height: 60,
            paddingLeft: 20,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: themeObj.colors.primary,
            borderBottomColor: themeObj.colors.border,
            borderBottomWidth: 1,
        },
        textView: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
        },
    });

    return (
        <View style={styles.container}>
            {openDrawer ? (
                <IoniconsI
                    name="menu-outline"
                    size={25}
                    color={themeObj.colors.border}
                    onPress={() => navigation.openDrawer()}
                />
            ) : (
                <IoniconsI
                    name="arrow-back"
                    size={25}
                    color={themeObj.colors.border}
                    onPress={() => navigation.goBack()}
                />
            )}
            <View style={styles.textView}>
                <ThemedHeading>{title}</ThemedHeading>
            </View>
        </View>
    );
};

export default Header;
