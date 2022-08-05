import React from "react";
import MyLink from "../UI/link/MyLink";

const ChatList = (props) => {
  console.log(props.chats);
  return (
    <div>
      {props.chats.map((el) => (
        <MyLink to={`/messages/${el.id}`}>{el.name}</MyLink>
      ))}
    </div>
  );
};

export default ChatList;
