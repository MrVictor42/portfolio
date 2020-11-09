import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';

import Portuguese from '../translations/pt-br.json';
import English from '../translations/en-us.json';
import Germany from '../translations/de-de.json';

import Header from '../components/Header';
import About from '../components/About';

export default function languageProvider(props) {
    const [locale, setLocale] = useState('pt-br');
    const [lang, setLang] = useState(Portuguese);

    const changeLanguage = (getLang) => {
        setLocale(getLang)
        switch(getLang) {
            case 'pt-br':
                setLang(Portuguese);
                break;
            case 'en-us':
                setLang(English);
                break;
            case 'de-de':
                setLang(Germany);
                break;
            default: 
                setLang(Portuguese)
        }
    }

    return(
        <IntlProvider locale = { locale } messages = { lang }>
            <Header data = { props.data } onChange = { changeLanguage } />
            <About data = { props.data } />
        </IntlProvider>
    );
}