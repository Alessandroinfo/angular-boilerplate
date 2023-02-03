/** @type {import("tailwindcss").Config} */
//Customize Tailwind

// Note:
// Remember to edit
// theme.extend.colors.primary
// and
// theme.extend.colors.secondary
// with same primary and secondary of angular material
// theme colors in assets/design-system/abstract/_palettes.scss
// Choice they wisely on https://material.io/resources/color
// Check if it's good the important true to override Material styles

module.exports = {
  important: true,
  prefix: "",
  content: [
    "./src/**/*.{html,ts}"
  ],
  // darkMode: media, // 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
        "0": 0,
        "10": 10,
        "20": 20,
        "30": 30,
        "40": 40,
        '50': 50,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
        'auto': 'auto',
      },
      colors: {
        primary: '#2EC4B6',
        secondary: '#2E88C4'
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
        '144': '36rem',
      },
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms'
      }
    }
  },
  corePlugins: {
    preflight: true
  },
  variants: {
    display: ["DEFAULT", "responsive"],
    zIndex: ["DEFAULT", "responsive"],
    padding: ["DEFAULT", "responsive"],
    margin: ["DEFAULT", "responsive"],
    height: ["DEFAULT", "responsive"],
    width: ["DEFAULT", "responsive"],
    flexGrow: ["DEFAULT", "responsive"],
    lineHeight: ["DEFAULT", "responsive"],
    backgroundColor: ["DEFAULT", "hover", "focus", "responsive"],
    textColor: ["DEFAULT", "hover", "focus", "responsive"],
    justifyContent: ["DEFAULT", "responsive"],
    alignItems: ["DEFAULT", "responsive"]
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    // https://github.com/SamGoody/tailwind-children
    require("tailwind-children")
  ]
};
