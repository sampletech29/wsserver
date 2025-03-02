import { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
  TextInput,
  useWindowDimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  KeyboardAvoidingViewComponent,
  Platform,
} from "react-native";
import { styles } from "./styles";
import ChatArea from "./ChatArea";

const backIcon = require("../../assets/images/back.png");
const socket = new WebSocket("ws://localhost:4001"); // Change to your WebSocket server URL

export const MainPage = () => {
  const [isModalVisiable, setIsModalVisible] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [message, setMessage] = useState<string>("Hello");

  const deviceWidth = useWindowDimensions().width;
  const deviceHeight = useWindowDimensions().height;

  useEffect(() => {
    socket.onopen = () => {
      console.log("Connected to WebSocket server");
    };
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Message from server:", data);
      if (data?.status === 200) {
        setMessages((prevData) => [
          ...prevData,
          {
            from: "server",
            message: data.message,
            date: data.date,
          },
        ]);
        setMessage("");
      }
      //   setMessages((prevMessages: any) => [...prevMessages, event.data]);
    };
    socket.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };
    socket.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };
    // // Set WebSocket connection in state
    // // setSocket(socket);
    // // Cleanup function to close WebSocket connection when component unmounts
    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = (event: any) => {
    socket.send(message);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.chatAppBar}>
            <Pressable>
              <Image source={backIcon} style={styles.backButton}></Image>
            </Pressable>
            <Text style={styles.text}>Welcome</Text>
          </View>
          <ScrollView style={styles.chatArea}>
            <ChatArea data={messages}></ChatArea>
          </ScrollView>
          <View style={styles.bottomBar}>
            <TextInput
              style={styles.textInput}
              value={message}
              onChangeText={(event) => setMessage(event)}
            ></TextInput>
            <Pressable onPress={sendMessage}>
              <Text style={styles.sendButton}>Send</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
      <StatusBar
        backgroundColor={"lightgreen"}
        barStyle={"light-content"}
      ></StatusBar>
    </SafeAreaView>
  );
};

export default MainPage;
