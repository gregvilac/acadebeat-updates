const UserDetailsForm = ({ formData }) => {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input name="name" id="name" type="text" />
      <label htmlFor="email">Email</label>
      <input name="email" id="email" type="email" />
      <label htmlFor="password">Password</label>
      <input name="password" id="password" type="password" />
      <label htmlFor="confirmPassword">Re-type your password</label>
      <input name="confirmPassword" id="confirmPassword" type="password" />
    </div>
  );
};

export default UserDetailsForm;
