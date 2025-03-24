const config = {
  menu: {
    logo: {
      expanded: true, // This forces the sidebar to be expanded by default
    },
  },
  theme: {
    colors: {
      primary100: "#f0ecfd", // Lightest shade
      primary200: "#d4c8f9", // Lighter shade
      primary500: "#9473f2", // Main color
      primary600: "#7c5be8", // Darker shade
      primary700: "#6343d1", // Darkest shade
    },
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Skillang Dashboard",
      "app.components.LeftMenu.navbrand.workspace": "CMS",
      "Auth.form.welcome.title": "Welcome to the CMS portal ",
      "Auth.form.welcome.subtitle": "Please login to continue",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
