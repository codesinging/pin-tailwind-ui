module.exports = {
    purge: [],
    darkMode: false,
    theme: {
        extend: {
            spacing: {
                'header-banner': '0rem',
                'header-nav': '4rem',
                'header': '4rem',
            }
        },
    },
    variants: {
        extend: {
            backgroundColor: ['disabled'],
            textColor: ['disabled'],
            textOpacity: ['disabled'],
            cursor: ['disabled'],
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
