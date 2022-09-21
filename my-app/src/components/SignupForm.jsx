import TextField from "./TextField";
import Button from "./Button";
import Header from "./Header";
export default function (props) {
  return (
    <div className="w-50 mt-5 mx-auto">
      <Header {...{ text: "Please Sign Up" }} />
      <TextField
        {...{
          type: "text",
          name: "firstName",
          text: "First Name",
          id: "firstName",
          placeholder: "John",
          onTyped: props.onFirstName
        }}
      />
      <br />
      <TextField
        {...{
          type: "email",
          name: "signupEmail",
          text: "Email Address",
          id: "signupEmail",
          placeholder: "name@example.com",
          onTyped: props.onEmail
        }}
      />
      <br />
      <TextField
        {...{
          type: "password",
          name: "signuPassword",
          text: "Password",
          id: "signupPassword",
          placeholder: "Password",
          onTyped: props.onPassword
        }}
      />
      <br />
      <Button
          {...{
            text: "Sign up",
            classname: "w-100 btn btn-lg btn-primary mt-3",
            onclick:props.onclick
          }}
        />
    </div>
  );
}
