import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

import Portuguese from '../translations/pt-br.json';
import English from '../translations/en-us.json';
import Germany from '../translations/de-de.json';

export default function languageProvider(props) {
    const [locale, setLocale] = useState('pt-br');
    const [lang, setLang] = useState(Portuguese);
    return(
        <IntlProvider locale = { locale } messages = { lang }>
            <div className = 'text-center'>{ props.children }</div>
        </IntlProvider>
    )
}