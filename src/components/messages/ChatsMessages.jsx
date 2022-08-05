import React from "react";
import { Field, reduxForm } from "redux-form";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { required, maxLength } from "../utils/validators/validators";

const maxLength30 = maxLength(30); //максимальная длина символов в сообщении

const ChatsMessages = (props) => {
  const submit = (message) => {
    ////все данные полученные в форме
    props.addNewMessage(message);
  };

  return (
    <div>
      <h2>Окно чата</h2>
      <div>
        {props.chats.messages.map((mes) => (
          <div key={mes.id}>
            <p>{mes.text}</p>
          </div>
        ))}
      </div>
      <ChatsMessageReduxForm onSubmit={submit} />
    </div>
  );
};

const ChatsMessageForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="message"
        component={MyInput}
        type="text"
        validate={[required, maxLength30]}
      />

      <button type="submit">Отправить сообщение</button>
    </form>
  );
};

const ChatsMessageReduxForm = reduxForm({ form: "messageSendForm" })(
  ChatsMessageForm
);

export default ChatsMessages;
