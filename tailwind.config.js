/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        "Rubik": ["Rubik", "sans-serif"]
      },
      fontSize: {
        '2xs': ".5rem"
      },
      colors: {
        "Pale-Violet": "hsl(276, 100%, 81%)",
        "Moderate-Violet": "hsl(276, 55%, 52%)",
        "Desaturated-Dark-Violet": "hsl(271, 15%, 43%)",
        "Grayish-Blue": "hsl(206, 6%, 79%)",
        "Very-Dark-Desaturated-Violet": "hsl(271, 36%, 24%)",
        "Dark-Grayish-Violet": "hsl(270, 7%, 64%)",
        "Light-Magenta": "hsl(293, 100%, 63%)",
        "Light-Violet": "hsl(264, 100%, 61%)",
        "Light-Grayish-Violet": "hsl(270, 20%, 96%)",
        "Very-Light-Magenta": "hsl(289, 100%, 72%)",
      },
      borderWidth: {
        "10": "10px"
      },
      height: {
        "172": "43rem",
        "200": "50rem",
      },
      width: {
        "120": "30rem",
        "176": "44rem",
      },
    },
  },
  plugins: [],
}

