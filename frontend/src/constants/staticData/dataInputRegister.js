const dataInputSignup = [
  {
    label: "Your pseudo",
    type: "text",
    id: "pseudo",
    name: "pseudo",
    required: true,
    message: "Pseudo required!",
    placeholder: "John Doe",
  },
  {
    label: "Your email",
    type: "email",
    id: "email",
    name: "email",
    required: true,
    message: "Email required!",
    placeholder: "your_email@gmail.com",
  },
  {
    label: "Your password",
    type: "password",
    id: "password",
    name: "password",
    required: true,
    message: "Password required!",
    placeholder: "••••••••",
  },
  {
    label: "Confirm Password",
    type: "password",
    id: "confirmPassword",
    name: "confirmPassword",
    required: true,
    message: "Confirm password required!",
    placeholder: "••••••••",
  },
];

export default dataInputSignup;
