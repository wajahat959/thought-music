import { getRespValue } from "@/design/desin";
import { Link, useFocusEffect } from "expo-router";
import { default as React } from "react";
import { BackHandler, Image, Text, View } from "react-native";
import Article from "../../../assets/articles/articalbg4.jpg";
import Header from "../../global/Header/index";
import Background from "../../global/ImageBackground/index";
const Articles4 = ({goTo}) => {

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
              The Journal of Living Together 
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
          The Journal of Living Together is a peer-reviewed academic journal
          that publishes a collection of articles that reflect various aspects
          of peace and conflict studies. The contributions from across the
          disciplines and grounded by relevant philosophical traditions and
          theoretical and methodological approaches systematically broach topics
          dealing with tribal, ethnic, racial, cultural, religious and sectarian
          conflicts, as well as alternative dispute resolution and peacebuilding
          processes. Through this journal it is our intention to inform,
          inspire, reveal and explore the intricate and complex nature of human
          interaction in the context of ethno-religious identity and the roles
          it plays in war and peace. By sharing theories, methods, practices,
          observations and valuable experiences we mean to open a broader, more
          inclusive dialogue between policymakers, academics, researchers,
          religious leaders, representatives of ethnic groups and indigenous
          peoples, as well as field practitioners around the world.
        </Text>
        <View style={{ flexDirection: "row",padding:20,marginTop:getRespValue(-50) }}>
          <Text
            style={{
              color: "white",
              textAlign: "left",
              fontSize: getRespValue(14),
              marginBottom: 20,
            }}
          >
            Through this journal it is our intention {' '}
          </Text>
          <Link href="https://icermediation.org/journal-of-living-together/?gad_source=1&gclid=EAIaIQobChMIqpHfzq2IhgMViopoCR3laAmSEAAYASAAEgKzTvD_BwE">
            <Text style={{
                  color: "orange",
                  textAlign: "left",
                  fontSize: getRespValue(14),
                  marginBottom: 10,
            }}>Read More...</Text>
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

export default Articles4;
