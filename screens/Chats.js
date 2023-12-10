import { Ionicons } from "@expo/vector-icons";
import { useLayoutEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
} from "react-native";

export const Chats = ({ navigation }) => {
  const data = [
    {
      id: "1",
      name: "John Doe",
      lastChat: "Hello there!",
      time: "10:30 AM",
      avatar:
        "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
    },
    {
      id: "2",
      name: "Jane Smith",
      lastChat: "How are you doing?",
      time: "10:30 AM",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.chatItemContainer}>
      <Image source={{ url: item.avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.lastChat}>{item.lastChat}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <>
      <View style={{ marginTop: 50, width: "100%" }}>
        <View style={styles.row}>
          <View style={[styles.left, { flex: 1, padding: 10 }]}>
            <Text>Edit</Text>
          </View>
          <View style={[styles.center, { flex: 3, padding: 10 }]}>
            <Text style={{ fontWeight: 600 }}>Chats</Text>
          </View>
          <View style={[styles.right, { flex: 1, padding: 10 }]}>
            <Ionicons name="create-outline" size={24} color="black" />
          </View>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <View style={styles.chatContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  center: {
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  left: {
    alignItems: "left",
  },
  chatContainer: {
    width: "100%",
    paddingLeft: 10,
  },
  chatItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lastChat: {
    color: "#888",
  },
  time: {
    color: "#888",
    marginRight: 10,
    fontSize: 10,
  },
  inputLabel: {
    paddingHorizontal: 10,
    fontSize: 17,
  },
  input: {
    height: 40,
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 10,
    backgroundColor: "#E7E7E7",
  },
});
