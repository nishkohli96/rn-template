import ThemeStore from './theme.store';
import { configure } from 'mobx';

/* Import all stores here */
class RootStore {
    constructor() {
        this.theme = new ThemeStore(this);
        /*  Set to "never" if Hermes isn't enabled. 
            Check README on how to enable Hermes */
        configure({
            useProxies: 'always', //"never"
        });
    }
}

export default new RootStore();
