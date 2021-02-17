module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "bg-pattern": "url('/images/bg-pattern-desktop.svg')",
        "hero-background": "url('/images/hero-desktop.jpg')",
      }),
      textColor: {
        light: "#ce9797",
        soft: "#f96262",
        dark: "#413a3a",
      },
      letterSpacing: {
        widest: ".35em",
      },
      borderColor: (theme) => ({
        light: "#ce9797",
        soft: "#f96262",
        dark: "#413a3a",
      }),
      placeholderColor: (theme) => ({
        light: "#ce9797",
        soft: "#f96262",
        dark: "#413a3a",
      }),
      gradientColorStops: (theme) => ({
        light: "#ce9797",
        soft: "#f96262",
        dark: "#413a3a",
      }),
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [],
};
