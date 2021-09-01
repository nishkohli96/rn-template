import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Light from '_Themes/Light';
import Dark from '_Themes/Dark';

export class ThemeStore {
    constructor() {
        makeAutoObservable(this);
        this.themeObj = Light;
    }

    async getThemeAction() {
        try {
            const themeVar = await AsyncStorage.getItem('theme');
            console.log('get themeVar: ', themeVar);
            themeVar
                ? this.setThemeAction(themeVar)
                : this.setThemeAction('light');
        } catch (e) {
            return 'error';
        }
    }

    async setThemeAction(themeName = 'light') {
        console.log('themeName: ', themeName);
        try {
            await AsyncStorage.setItem('theme', themeName);
            this.themeObj = themeName === 'light' ? Light : Dark;
        } catch (e) {
            throw new Exception(e);
        }
    }
}

export const ThemeStoreContext = createContext(counterStore);
export const useThemeStore = () => useContext(ThemeStoreContext)
