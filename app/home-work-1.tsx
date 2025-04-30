import { FlatList } from "react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Icon } from "react-native-elements";

const HomeWork1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: "https://i.pravatar.cc/300" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Mawar Hitam</Text>
        <Text style={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          minus consequuntur. Sit sapiente iusto nisi distinctio. Impedit
          repellat officiis reprehenderit, cum, labore placeat, amet eligendi
          quasi quod sint consequatur dignissimos.
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableOpacity>
          <Button
            icon={
              <Icon
                name="paper-plane"
                type="font-awesome"
                size={15}
                color="#0281F1"
              />
            }
            buttonStyle={{
              backgroundColor: "#c5fcffd2",
              height: 42,
              width: 42,
            }}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={styles.sideCard}>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#fff",
                textAlign: "center",
              }}
            >
              10K
            </Text>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
              }}
            >
              Likes
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "#fff",
              borderBottomWidth: 1,
              marginVertical: 10,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#fff",
                textAlign: "center",
              }}
            >
              641
            </Text>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
              }}
            >
              Folowing
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "#fff",
              borderBottomWidth: 1,
              marginVertical: 10,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#fff",
                textAlign: "center",
              }}
            >
              62.1K
            </Text>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
              }}
            >
              Follower
            </Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.name}>Friends</Text>
            <FlatList
              horizontal
              data={[1, 2, 3, 4, 5]}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    marginVertical: 5,
                  }}
                >
                  <Image
                    source={{ uri: "https://i.pravatar.cc/300" }}
                    style={styles.avatar}
                  />
                </View>
              )}
              keyExtractor={(item) => item.toString()}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                gap: 10,
              }}
            />
          </View>
          <View style={{ marginTop: 20, gap: 10 }}>
            <Text style={styles.name}>Image Gallery</Text>
            <FlatList
              data={[1, 2, 3, 4, 5]}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: "https://i.pravatar.cc/300" }}
                  style={styles.imageGallery}
                />
              )}
              keyExtractor={(item) => item.toString()}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                gap: 10,
              }}
              style={{
                height: 240,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeWork1;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4c669f",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  sideCard: {
    backgroundColor: "#aa3636",
    borderRadius: 16,
    padding: 24,
    width: 120,
    gap: 20,
    justifyContent: "space-evenly",
  },
  imageGallery: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
    marginRight: 10,
  },
});
