import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { ThemedView, ThemedText } from '_Shared/StyledComps';
import rootStore from '_Store';

const App = () => {
    return (
        <SafeAreaView>
            <ThemedView>
                <Text>hi from homescreen</Text>
            </ThemedView>
            <Text>fuck</Text>
            <Button
                title="Change Theme"
                color="#006699"
                onPress={() => rootStore.theme.setThemeAction('dark')}
            />
        </SafeAreaView>
    );
};

export default App;
