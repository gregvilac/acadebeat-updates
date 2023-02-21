const siteLanguageReducer = (state = "ltr", action) => {
  switch (action.type) {
    case "RTL":
      return (state = "rtl");

    case "LTR":
      return (state = "ltr");

    default:
      return (state = "ltr");
  }
};

export default siteLanguageReducer;
