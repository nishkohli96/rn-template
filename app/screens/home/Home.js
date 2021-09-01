import React from 'react';
import { Text, Button } from 'react-native';
import { ThemedContainer, ThemedView, ThemedText } from '_Shared/StyledComps';
import rootStore from '_Store';

const App = () => {
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
        </ThemedContainer>
    );
};

export default App;
