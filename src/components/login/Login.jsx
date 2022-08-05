import React from "react";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import MyInput from "../UI/input/MyInput";
import { required, maxLength } from "../utils/validators/validators";

const maxLength30 = maxLength(30);

const LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="email"
          component={MyInput}
          type="text"
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <Field
          name="password"
          component={MyInput}
          type="password"
          validate={[required]}
        />
      </div>
      <div>
        <Field component="input" type="checkbox" name="remember" />
      </div>
      <button type="submit">Login</button>
      {props.error && <div className="error">{props.error}</div>}
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  const submit = (formData) => {
    ////все данные полученные в форме
    props.logInThunk(formData);
  };

  return (
    <div>
      <LoginReduxForm onSubmit={submit} />
    </div>
  );
};

export default Login;
