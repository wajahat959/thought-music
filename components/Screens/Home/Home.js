import AuthScreen from "@/components/global/AuthScreen";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const Home = ({ goTo }) => {
  const router = useRouter();
  const [pressed, setPressed] = useState(false);

  const handlePressIn = () => {
    setPressed(true);
  };

  const handlePressOut = () => {
    setPressed(false);
  };

  return (
    <AuthScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Articles</Text>
        <TouchableHighlight
          style={[
            styles.buttonContainer,
            pressed && { backgroundColor: "#ccc" }, // Change color to grey when pressed
          ]}
          underlayColor="#ccc" // Grey background when pressed
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Link href="https://icermediation.org/journal-of-living-together/?gad_source=1&gclid=EAIaIQobChMIqpHfzq2IhgMViopoCR3laAmSEAAYASAAEgKzTvD_BwE">
            <Text style={styles.buttonText}>Read Online Article</Text>
          </Link>
        </TouchableHighlight>
      </View>
    </AuthScreen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Light gray background color
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#333", // Dark gray text color
  },
  buttonContainer: {
    borderWidth: 2,
    borderColor: "#007bff", // Blue border color
    width: "60%",
    borderRadius: 20,
    overflow: "hidden", // Ensure border radius works
    alignItems: "center", // Center the child horizontally
  },
  buttonText: {
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff", // Blue text color
  },
});
