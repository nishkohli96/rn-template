import React from 'react';
import { Text, Switch } from 'react-native';
import { useTranslation } from 'react-i18next';

import Header from '_Shared/Header';
import {
    ThemedContainer,
    ThemedBody,
    ThemedView,
    ThemedText,
} from '_Shared/Comps.themed';
import { useThemeStore } from '_Store/theme.store';

const App = () => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const { setThemeAction } = useThemeStore();
    const { t } = useTranslation('common');

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        setThemeAction(!isEnabled ? 'dark' : 'light');
    };

    return (
        <ThemedContainer>
            <Header title="Home" openDrawer/>
            <ThemedBody>
                <ThemedView>
                    <Text>hi from homescreen</Text>
                    <ThemedText>hdeiwfwe</ThemedText>
                </ThemedView>
                <Text> {t('SSO.getOTP')}</Text>
                <ThemedText>hdeiwfwe</ThemedText>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </ThemedBody>
        </ThemedContainer>
    );
};

export default App;
