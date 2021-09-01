import React from 'react';
import { Text, Button, Switch } from 'react-native';
import { ThemedContainer, ThemedView, ThemedText } from '_Shared/StyledComps';
import rootStore from '_Store';

const App = () => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        rootStore.theme.setThemeAction(!isEnabled ? 'dark' : 'light');
    };

    return (
        <ThemedContainer>
            <ThemedView>
                <Text>hi from homescreen</Text>
                <ThemedText>hdeiwfwe</ThemedText>
            </ThemedView>
            <Text>fuck</Text>
            <Button
                title="Change Theme"
                color="#006699"
                onPress={() => rootStore.theme.setThemeAction('dark')}
            />
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
