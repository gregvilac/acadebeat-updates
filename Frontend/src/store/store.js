import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./reducers/isStudent";
import teacherReducer from "./reducers/isTeacher";
import siteLanguageReducer from "./reducers/siteLanguage";

const store = configureStore({
  reducer: {
    isStudent: studentReducer,
    isTeacher: teacherReducer,
    siteLanguage: siteLanguageReducer,
  },
});

export default store;
