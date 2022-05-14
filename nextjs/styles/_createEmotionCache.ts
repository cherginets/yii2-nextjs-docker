import createCache from '@emotion/cache';

export default function _createEmotionCache() {
    return createCache({ key: 'css', prepend: true });
}