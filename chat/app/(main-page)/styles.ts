import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "gray",
  },
  container: {
    paddingHorizontal: 10,
    flex: 1,
    ...Platform.select({ android: { paddingTop: 20 } }),
  },
  chatAppBar: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    columnGap: 10,
  },
  backButton: {
    width: 30,
    height: 30,
  },
  chatArea: {
    flex: 1,
    height: "100%",
    padding: 10,
    backgroundColor: "lightgrey",
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  bottomBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    columnGap: 10,
  },
  textInput: {
    padding: 12,
    flex: 1,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#00000020",
    backgroundColor: "#55555550",
  },
  sendButton: {
    padding: 12,
    borderRadius: 20,
    borderWidth: 2,
    fontWeight: "bold",
    backgroundColor: "#00ff0020",
    borderColor: "#00ff0010",
  },
  messageServerContainer: {
    alignItems: "flex-start",
  },
  messageClientContainer: {
    alignItems: "flex-end",
  },
  clientMessage: {
    width: "auto",
    padding: 10,
    paddingBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00000010",
    backgroundColor: "#00000010",
    textAlign: "right",
  },
  serverMessage: {
    width: "auto",
    minWidth: 100,
    padding: 10,
    paddingBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00990010",
    backgroundColor: "#00990010",
  },
  timestamp: {
    position: "absolute",
    paddingLeft: 12,
    fontSize: 8,
    right: 4,
    bottom: 2,
  },
});

export default styles;
