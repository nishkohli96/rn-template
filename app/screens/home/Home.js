import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemedView } from '_Shared/StyledComps';

const storeData = async value => {
    try {
        await AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {
      return;
    }
};

const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key');
        if (value !== null) {
            console.log(value);
            return value;
        }
    } catch (e) {
        return 'error';
    }
};

const App = () => {
    storeData('nish');
    getData();
    return (
        <SafeAreaView>
            <ThemedView>
                <Text>hi from homescreen</Text>
            </ThemedView>
        </SafeAreaView>
    );
};

export default App;
