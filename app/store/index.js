import { ThemeStore } from './theme.store';
import { configure } from 'mobx';

/* Import all stores here */
class RootStore {
    constructor() {
        /*  Set to "never" if Hermes isn't enabled. 
            Check README on how to enable Hermes */
        configure({
            useProxies: 'always', //"never"
            isolateGlobalState: true,
        });

        this.theme = new ThemeStore(this);
    }
}

export default new RootStore();
