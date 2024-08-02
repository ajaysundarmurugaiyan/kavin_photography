/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily :{
      arial: ['Arial', 'sans-serif'],
      display: ['Cinzel', 'serif'],
      body: ['Poppins', 'sans-serif'],
      new: ['IBM Plex Sans', 'sans-serif'],
      edu: ['Edu AU VIC WA NT Hand', 'cursive'],
      merriweather: ['Merriweather', 'serif'],
      openSans: ['Open Sans', 'sans-serif'],
      playfair: ['Playfair Display', 'serif'],
      playwrite: ['Playwrite DK Loopet', 'cursive'],
      robotoMono: ['Roboto Mono', 'monospace'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend:{
      keyframes:{
        scroll:{
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        fillColor: {
          '0%': { color: 'transparent' },
          '100%': { color: '#f97316' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        fillColor: 'fillColor 0.1s forwards',
      },
      spacing: {
        '2.5': '0.625rem', 
      },
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

