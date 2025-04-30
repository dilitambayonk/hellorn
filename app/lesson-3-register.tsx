import { Pressable, StyleSheet } from "react-native";
import { Text, TextInput, View } from "react-native";

const Lesson3Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput style={styles.inputText} placeholder="Username" />
      <TextInput
        style={styles.inputText}
        placeholder="Password"
        secureTextEntry
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          // Handle register action
          console.log("Register pressed");
        }}
      >
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
    </View>
  );
};

export default Lesson3Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4c669f",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  inputText: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 20,
    paddingLeft: 10,
  },
});
