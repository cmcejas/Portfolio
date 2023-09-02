/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons: "burtons",
        poppins: "poppins",
        roboto: "roboto",
      },
      colors: {
        'cool-orange': '#0f172a',
        'cool-pink': '#ea6eaf',
        'bgc1': '#152844',
        'bgc2': '#0b111f',
      },
    },
  },
  plugins: [],
}