import { Image, StyleSheet, Text, View } from "react-native";

const Lesson1 = () => {
  return (
    <View style={style.container}>
      <Image
        source={{ uri: "https://i.pravatar.cc/300" }}
        style={style.image}
      />
      <Text style={style.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
      </Text>
    </View>
  );
};

export default Lesson1;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
    textAlign: "center",
    maxWidth: 300,
  },
});
