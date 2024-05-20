import { getRespValue } from "@/design/desin";
import { Link, useFocusEffect } from "expo-router";
import { default as React } from "react";
import { BackHandler, Image, Text, View } from "react-native";
import Article from "../../../assets/articles/articalbg2.jpg";
import Header from "../../global/Header/index";
import Background from "../../global/ImageBackground/index";
const Articles3 = ({goTo}) => {
  
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        goTo && goTo(0); // Navigate to step 0
      
        return true; // Prevent default back button behavior
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => backHandler.remove();
    }, [goTo]),
  );
  return (
    <Header title="Article">
      <Background>
      <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: getRespValue(22),
            marginBottom: 10,
            fontWeight:'600',
          }}
        >
          Home Remedies for Insomnia
        </Text>
        <Image
          source={Article}
          style={{
            width: "100%",
            height: "40%",
          }}
        />
      
        <Text
          style={{
            color: "white",
            textAlign: "left",    
            justifyContent:'center',
            alignSelf:'center',
             padding:20,
            fontSize: getRespValue(14),
            marginBottom: 10,
          }}
        >
          Practicing habits like mindfulness meditation and taking supplements
          like magnesium may help you sleep well at night. But if your symptoms
          dont resolve, a doctor may be able to help.{"\n"}
          Many people experience short-term insomnia. This common sleep disorder
          can make it difficult to fall asleep and stay asleep until it’s time
          to wake up.
          {"\n"}Although the amount of sleep needed varies from person to
          person, most adults need at least seven hours of sleep a night. If
          your sleeping patterns are affecting your quality of life, home
          remedies may be able to help.
        </Text>
        <View
          style={{
            flexDirection: "row",
            padding: 20,
            marginTop: getRespValue(-50),
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "justify",
              fontSize: getRespValue(14),
              marginBottom: 10,
            }}
          >
        Through meditationand home remedies.{" "}
          </Text>
          <Link href="https://www.healthline.com/health/healthy-sleep/insomnia-home-remedies#mantra-repetition">
            <Text
              style={{
                color: "orange",
                textAlign: "justify",

                fontSize: getRespValue(14),
                marginBottom: 10,
              }}
            >
              Read More...
            </Text>
          </Link>
        </View>
      </Background>
      {/* <View style={styles.container}>
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
    
 
      </View> */}
    </Header>
  );
};

export default Articles3;
