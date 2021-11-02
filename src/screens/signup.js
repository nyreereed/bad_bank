import FormGroup from "lib/formgroup";
import Input from "lib/input";
import Label from "lib/label";
import Button from "lib/button";
import Error from "lib/error";
import { isBlank, isWithinMinRange } from "utils/validate";
import { useFormik } from "formik";

function validate(values) {
  let errors = {};

  if (isBlank(values.name)) {
    errors.name = "Name is required";
  }

  if (isBlank(values.email)) {
    errors.email = "Email is required";
  }

  if (!isWithinMinRange(values.password, 8)) {
    errors.password = "Password must be atleast 8 characters long";
  }

  return errors;
}

function SignUp() {
  const {
    values,
    handleSubmit,
    handleChange,
    errors,
    resetForm,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      setSubmitting(true);
      alert("Success!!");
    },

    onReset: (values, { validateForm }) => {
      validateForm(values);
    },

    validate: validate,

    validateOnMount: true,
    validateOnChange: true,
  });

  function handleReset() {
    resetForm();
    setSubmitting(false);
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div>
      <h1 className="font-extrabold mb-5 mt-5 text-2xl">Sign Up</h1>

      <form onSubmit={handleSubmit} className="max-w-lg">
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name"
            onChange={handleChange}
            value={values.name}
          />
          {errors.name && <Error>{errors.name}</Error>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter email address"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <Error>{errors.email}</Error>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <Error>{errors.password}</Error>}
        </FormGroup>
        <div className="grid grid-cols-2 gap-4">
          <Button type="submit" disabled={hasErrors}>
            {isSubmitting ? "Create Another Account" : "Create Account"}
          </Button>
          {isSubmitting ? (
            <Button onClick={handleReset}>Clear Form</Button>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default SignUp;
