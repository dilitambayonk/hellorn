import { Link, useRouter } from "expo-router";
import {
  Button,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Link href="/lesson-1" push asChild>
        <Button title="Go to Lesson 1" />
      </Link>
      <Link href="/lesson-2" push asChild>
        <Button title="Go to Lesson 2" />
      </Link>
      <Link href="/home-work-1" push asChild>
        <Button title="Go to Home Work 1" />
      </Link>
      <Link href="/lesson-3-login" push asChild>
        <Button title="Go to Lesson 3 - Login" />
      </Link>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
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
});
