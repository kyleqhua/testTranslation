import React from 'react';

// the hook
import { useTranslation } from 'react-i18next';

function MyComponent() {
    const { t, i18n } = useTranslation();
    return <h1>{t('Welcome to React')}</h1>
}
export default withTranslation()(MyComponent);