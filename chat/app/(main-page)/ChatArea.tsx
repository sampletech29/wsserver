import { Text, View } from "react-native";
import styles from "./styles";

export default function ChatArea(props: any) {
  return (
    <View style={{ flex: 1, rowGap: 8 }}>
      {props.data.map((data: any) => {
        return (
          <View
            style={
              data.from === "server"
                ? styles.messageServerContainer
                : styles.messageClientContainer
            }
          >
            <View
              style={
                data.from === "server"
                  ? styles.serverMessage
                  : styles.clientMessage
              }
            >
              <Text>{data.message}</Text>
              <Text style={styles.timestamp}>{data.date}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
