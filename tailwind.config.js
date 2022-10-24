/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],

  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl:'1440px'
    },
    maxWidth:{
      '1/4':'25%',
      '1/3':'33%',
      '1/2':'50%',
      '1/1':'100%'
    },
    extend: {
      colors:{
        Green :' #4CAF50',
        Blue : '#008CBA',
        PBlue: '#0029FF',
        PGray: '#F6F5F5',
        Red : '#f44336',
        Gray : '#e7e7e7',
        Black : '#555555',
        LightBlue : '#659DBD',
      },
    },
  },
  plugins: [],
}
