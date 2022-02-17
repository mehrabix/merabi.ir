module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "Merriweather-Black": ["Merriweather-Black"],
        "Merriweather-Bold": ["Merriweather-Bold"],
        "Merriweather-Light": ["Merriweather-Light"],
        "Merriweather-Regular": ["Merriweather-Regular"],
        "Merriweather-Italic": ["Merriweather-Italic"],
        "Merriweather-BoldItalic": ["Merriweather-BoldItalic"],
        "Merriweather-LightItalic": ["Merriweather-LightItalic"],
        "Merriweather-BlackItalic": ["Merriweather-BlackItalic"],
        
      },
        
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ]
};