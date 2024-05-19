import { getRespValue } from "@/design/desin";
import { Link } from "expo-router";
import { default as React } from "react";
import { Image, Text, View } from "react-native";
import Article from "../../../assets/articles/articalbg3.jpg";
import Header from "../../global/Header/index";
import Background from "../../global/ImageBackground/index";
const Articles2 = () => {
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
        7 Ways to Overcome Depression Without Medication
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
          A major depressive episode is defined as experiencing five or more of
          the following symptoms every day (or most days) for two weeks or more:
          {"\n"}•Sleep problems (i.e.,
          sleeping too much or too little; sleeping mainly during the day){"\n"}
         • Excessive guilt or unrealistically low
          self-image{"\n"}• Significantly low energy and/or change in self-care
          (i.e., not showering anymore){"\n"}• Significantly worse concentration
          (i.e., sharp decline in grades or performance){"\n"}• Changes in
          appetite (i.e., eating too much or too little){"\n"}• Agitation or
          severe anxiety/panic attacks{"\n"}• Suicidal thoughts, plans or
          behaviors — including self-harm (i.e., intentionally cutting or
          burning yourself)
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
            OK, I’m feeling depressed… so now what{" "}
          </Text>
          <Link href="https://intermountainhealthcare.org/blogs/7-ways-to-overcome-depression-without-medication">
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

export default Articles2;
