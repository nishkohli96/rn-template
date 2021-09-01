import React from 'react';
import { Text, Switch } from 'react-native';
import { ThemedContainer, ThemedView, ThemedText } from '_Shared/StyledComps';
import { useThemeStore } from '_Store/theme.store';

const App = () => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const { setThemeAction } = useThemeStore();

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        setThemeAction(!isEnabled ? 'dark' : 'light');
    };

    return (
        <ThemedContainer>
            <ThemedView>
                <Text>hi from homescreen</Text>
                <ThemedText>hdeiwfwe</ThemedText>
            </ThemedView>
            <Text>fuck</Text>
            <ThemedText>hdeiwfwe</ThemedText>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </ThemedContainer>
    );
};

export default App;
