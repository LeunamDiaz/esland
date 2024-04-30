import catalan from './ca.json';
import spanish from './es.json';
import english from './en.json';

export const getI18N = ({ currentlocale }: { currentlocale: 'es' | 'ca' | 'en' }) => {
    if (currentlocale === 'ca') {
        return catalan;
    }
    if (currentlocale === 'es') {
        return spanish;
    }
    return english;
}

