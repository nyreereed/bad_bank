// This components exists solely for styling purposes
// It is used to group a label and its form element in an aesthetically way

const FormGroup = ({ children }) => {
  return <div className="flex flex-col mb-4">{children}</div>;
};

export default FormGroup;
