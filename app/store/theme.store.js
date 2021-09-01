import { makeAutoObservable } from 'mobx';

class ThemeStore {
    themeName = 'light';

    constructor() {
        makeAutoObservable(this);
    }
}

export default ThemeStore;