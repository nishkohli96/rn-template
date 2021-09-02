import i18next from 'i18next';
import { observer } from 'mobx-react';
import common_en from './translations/en/common.json';
import common_fr from './translations/fr/common.json';
import common_hi from './translations/hi/common.json';
import { useLangStore } from '_Store/lang.store';

const { langName, getLangAction } = useLangStore();

const configurei18 = observer(() => {
    i18next.init({
        interpolation: { escapeValue: false }, // React already does escaping
        lng: langName, // language to use
        fallbackLng: 'en', // in case no language found
        resources: {
            en: {
                common: common_en, // 'common' is our custom namespace
            },
            fr: {
                common: common_fr,
            },
            hi: {
                common: common_hi,
            },
        },
    });
});

export const get18config = () => {
    return i18next;
};

getLangAction();
configurei18();
