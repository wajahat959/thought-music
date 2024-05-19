import { getRespValue } from "@/design/desin";
import { Link } from "expo-router";
import { default as React } from "react";
import { Image, Text, View } from "react-native";
import Article from "../../../assets/articles/articalbg1.jpg";
import Header from "../../global/Header/index";
import Background from "../../global/ImageBackground/index";
const Articles = () => {
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
      7 Tips to Avoid Stress
        </Text>
        <Image
          source={Article}
          style={{
            width: "100%",
            height: "30%",
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
          There are emotional and behavioral consequences of stress that can
          make it difficult to perform your daily routine. These include
          anxiety, depression, fatigue, becoming aggressive, unmotivated, or
          withdrawn, and difficulties with problem-solving and concentration.
          There are also physiological consequences of stress including
          headaches, nausea, and palpitations.So, how can you avoid stress and
          assuage the negative social, emotional and physical consequences of it
          in the process?Here are some tips:
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
            Avoid drugs as they can add to stress{" "}
          </Text>
          <Link href="https://icermediation.org/journal-of-living-together/?gad_source=1&gclid=EAIaIQobChMIqpHfzq2IhgMViopoCR3laAmSEAAYASAAEgKzTvD_BwE">
            <Text
              style={{
                color: "orange",
                textAlign: "justify",

                fontSize: getRespValue(13),
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

export default Articles;
