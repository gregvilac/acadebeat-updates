const studentReducer = (state = false, action) => {
  switch (action.type) {
    case "STUDENT_IN":
      return (state = true);

    case "STUDENT_OUT":
      return (state = false);
    default:
      return false;
  }
};

export default studentReducer;
