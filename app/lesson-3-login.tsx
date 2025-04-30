import { Link } from "expo-router";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  View,
} from "react-native";

const Lesson3Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: "80%",
          marginBottom: 20,
          paddingLeft: 10,
        }}
        placeholder="Username"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: "80%",
          marginBottom: 20,
          paddingLeft: 10,
        }}
        placeholder="Password"
        secureTextEntry
      />
      <Pressable
        style={{
          backgroundColor: "#007BFF",
          padding: 10,
          borderRadius: 5,
          width: "80%",
          alignItems: "center",
        }}
        onPress={() => {
          // Handle login action
          console.log("Login pressed");
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Login</Text>
      </Pressable>
      <Link href="/lesson-3-register" push asChild>
        <Text style={{ marginTop: 20, color: "#007BFF" }}>Register</Text>
      </Link>
    </View>
  );
};

export default Lesson3Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
