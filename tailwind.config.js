/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f4f2ff',
                    100: '#ebe6ff',
                    200: '#d9d1ff',
                    300: '#bba6ff',
                    400: '#9875ff',
                    500: '#7645ff',
                    600: '#5c2ed6',  // Adjusted for good button contrast
                    700: '#461fa3',
                    800: '#321475',
                    900: '#12003A',  // The requested brand color
                    950: '#08001f',
                },
                secondary: '#f59e0b', // Amber/Orange for highlights
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
