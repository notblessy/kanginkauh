import React, { useState } from "react";
import { Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

export const Chat = () => {
  const [messages, setMessages] = useState([]);

  return <GiftedChat messages={messages} />;
};
