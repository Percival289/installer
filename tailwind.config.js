'use strict';

const reactComponentsSafeList = require('@flybywiresim/react-components/build/usedCSSClasses.json');

module.exports = {
    purge: {
        options: { safelist: [...reactComponentsSafeList] },
        content: [
            './src/**/*.html',
            './src/**/*.jsx',
            './src/**/*.tsx',
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                navy: {
                    'lightest': '#273347',
                    'lighter': '#222c3d',
                }
            },
            boxShadow: {
                'inner-sm': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)'
            },
            animation: {
                'spin-reverse': 'spin 1s linear infinite reverse',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['first']
        }
    },
    plugins: [require('@flybywiresim/tailwind-config')],
};
