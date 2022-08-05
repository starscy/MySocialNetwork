import React from "react";
import ChatList from "./ChatList";
import ChatsMessages from "./ChatsMessages";
import cl from "../../components/css/Messages.module.css";

const Messages = (props) => {
  const addNewMessage = (message) => props.actionAddMessageThunk(message);

  return (
    <div className={cl.main}>
      <div className={cl.chats}>
        <h3>Чаты</h3>
        <ChatList chats={props.state.chats} />
      </div>
      <div className={cl.messages}>
        <ChatsMessages chats={props.state} addNewMessage={addNewMessage} />
      </div>
    </div>
  );
};

export default Messages;
