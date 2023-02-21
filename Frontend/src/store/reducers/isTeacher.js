const teacherReducer = (state = false, action) => {
  switch (action.type) {
    case "TEACHER_IN":
      return (state = true);

    case "TEACHER_OUT":
      return (state = false);
    default:
      return false;
  }
};

export default teacherReducer;
