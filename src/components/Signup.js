import classes from "../styles/Singup.module.css";
import Checkbox from "./Checkbox";
import Form from "./Form";
import Illustration from "./Illustration";
import TextInput from "./TextInput";
export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration />
        <Form className={`${classes.signup} form`}>
          <TextInput type="text" placeholder="Enter name" icon="person" />

          <TextInput
            type="text"
            placeholder="Enter Email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />

          <Checkbox text="I agree to the Terms &amp Conditions" />
        </Form>
      </div>
    </>
  );
}
