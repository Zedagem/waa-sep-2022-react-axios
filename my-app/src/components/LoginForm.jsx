import TextField from "./TextField";
import Button from "./Button";
import Header from "./Header";
export default function (props) {
  return (
    <div className="w-50 mt-5 mx-auto">
      {/* <form className="w-50 mt-5 mx-auto"> */}
        <Header {...{text:"Please Sign In"}}/>
        <TextField
          {...{
            type: "email",
            name: "email",
            text: "Email address",
            id: "emailInput",
            placeholder: "name@example.com",
            onTyped: props.onEmail
          }}
        />
        <br />
        <TextField
          {...{
            type: "password",
            name: "password",
            text: "Password",
            id: "passwordInput",
            placeholder: "Password",
            onTyped: props.onPassword
          }}
        />
        <Button
          {...{
            type: "submit",
            text: "Sign in",
            classname: "w-100 btn btn-lg btn-primary mt-3",
            onclick:props.onclick
          }}
        />
      {/* </form> */}
    </div>
  );
}
