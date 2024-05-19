import Header from "@/components/global/Header/index";
import { getRespValue } from "@/design/desin";
import { selectUser } from "@/store/selectors/userSelect";
import { setReviewModal } from "@/store/slices/userSlice";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Image,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Article1 from "../../../assets/articles/articalbg1.jpg";
import Article3 from "../../../assets/articles/articalbg2.jpg";
import Article2 from "../../../assets/articles/articalbg3.jpg";
import Article4 from "../../../assets/articles/articalbg4.jpg";
import Background from "../../global/ImageBackground/index";
const Home = ({ goTo }) => {
  const [currentDate, setCurrentDate] = useState('');
  const {currentData}=useSelector(selectUser);
  const [modalVisible, setModalVisible] = useState(false);
  const {reviewModal}= useSelector(selectUser);
  const dispatch=useDispatch();
  const [dat,setdat]=useState('')
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based, add leading zero
    const day = String(today.getDate()).padStart(2, '0'); // Add leading zero
    const formattedDate = `${year}-${month}-${day}`;
    setdat(formattedDate);
    setCurrentDate(formattedDate);
    console.log('Today Date',formattedDate )
  
  }, []);

  useEffect(() => {
    if (currentDate && currentData?.results?.latestReview?.date) {
      if (currentDate !== currentData.results.latestReview.date && !reviewModal) {
        setModalVisible(true);
      }
      console.log('Api Date', currentData.results.latestReview.date);
      console.log('Review Modal', reviewModal);
      console.log('current date', currentDate);
    }
  }, [currentDate, currentData, reviewModal]);
  
 
  const [isPlaylistVisible, setIsPlaylistVisible] = useState(false);

  const onClose = (index) => {
    setIsPlaylistVisible(false);
  };
  const onOpen = (index) => {
    setIsPlaylistVisible(true);
  };
  const name = currentData?.results?.user?.firstName ?? "";
  const lastName = currentData?.results?.user?.lastName ?? "";
const truncate = (str, length) => {
  return str.length > length ? str.substring(0, length) + "..." : str;
};
  return (
    <Header title='Thought Theory'>
      <Background>
        <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row",
         margin: getRespValue(15)}}>
          <TouchableOpacity onPress={() => onOpen()}>
            <Ionicons name="person-circle-sharp" size={40} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "700",
              marginLeft: getRespValue(15),
            }}
          >
          Hii {truncate(currentData?.results?.user?.name || '', 16)}
          </Text>
        </View>
    
        <Text 
        style={{color: "white",
        fontWeight: "600",
        marginLeft: getRespValue(20),
        marginTop: getRespValue(25),
        fontSize: 15,
        marginBottom: 10,}}>Daily check in</Text>
        <View style={{
          height:getRespValue(360) ,
          width:'90%',
          
          marginTop:10,
          alignSelf:'center',
          padding:getRespValue(10),
          borderColor:'#FAFFF4',
          opacity:0.7,
          borderRadius:30,
          marginBottom:getRespValue(6),
          borderWidth:0.6,}}
          >
        <TouchableOpacity
          style={styles.topCard}
          onPress={() => goTo && goTo(1)}
        >
          <Text style={styles.text}>How was your day?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.topCard}
          onPress={() => goTo && goTo(2)}
        >
          <Text style={styles.text}>Self Assessment</Text>
          <Text style={{fontSize:12,color:'white'}}>GAD-7</Text>
        </TouchableOpacity>
        </View>
        <Text
          style={{
            color: "white",
            fontWeight: "600",
            marginLeft: getRespValue(20),
            marginTop: getRespValue(35),
            fontSize: 15,
            marginBottom: 10,
          }}
        >
          Suggested for you:
        </Text>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection:'row',marginBottom:150}}>
        
        <TouchableOpacity onPress={() => goTo(3)}>
          <Image
            source={Article1}
            style={{
              width: getRespValue(160),
              height: getRespValue(80),
              marginLeft: getRespValue(40),
              opacity:Platform.OS=='ios'?  0.8:1,
            }}
          />
          <Text
            style={{
              color: "white",
              marginLeft: getRespValue(40),
              marginTop: getRespValue(10),
              fontSize: getRespValue(12),
              marginBottom: 10,
            }}
          >
            7 Tips to Avoid Stress...
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goTo(4)}>
          <Image
            source={Article2}
            style={{
              width: getRespValue(160),
              height: getRespValue(80),
              marginLeft: getRespValue(40),
              opacity:Platform.OS=='ios'?  0.8:1,
            }}
          />
          <Text
            style={{
              color: "white",
              marginLeft: getRespValue(40),
              marginTop: getRespValue(10),
              fontSize: getRespValue(12),
              marginBottom: 10,
            }}
          >
           7 Ways to Overcome Depression...
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goTo(5)}>
          <Image
            source={Article3}
            style={{
              width: getRespValue(160),
              height: getRespValue(80),
              marginLeft: getRespValue(40),
              opacity:Platform.OS=='ios'?  0.8:1,
            }}
          />
          <Text
            style={{
              color: "white",
              marginLeft: getRespValue(40),
              marginTop: getRespValue(10),
              fontSize: getRespValue(12),
              marginBottom: 10,
            }}
          >
           Home Remedies for Insomnia...
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goTo(6)}>
          <Image
            source={Article4}
            style={{
              width: getRespValue(160),
              height: getRespValue(80),
              marginLeft: getRespValue(40),
              opacity:Platform.OS=='ios'?  0.8:1,
            }}
          />
          <Text
            style={{
              color: "white",
              marginLeft: getRespValue(40),
              marginTop: getRespValue(10),
              fontSize: getRespValue(12),
              marginBottom: 10,
            }}
          >
            Journal of Living Together...
          </Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        </ScrollView>
      </Background>

      <Modal
        visible={isPlaylistVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {}}
      >
        <Header title='Profile'>
          <Background>
            <View style={styles.modalContainer}>
              <View>
                <Ionicons name="person-circle-sharp" size={200} color="white" />
              </View>
              <View style={{marginBottom:getRespValue(30)}}>
                <Text
                  style={{
                    color: "white",
                    fontSize: getRespValue(40),
                  }}
                >
                  {truncate(currentData?.results?.user?.name || '', 16)}
               
                </Text>
              </View>
              <View style={styles.card}>
                {/* Name */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.textInput}>Name:</Text>
                  <Text numberOfLines={1} style={styles.text}>
                 {truncate(currentData?.results?.user?.name || '', 16)}
                  </Text>
                </View>
           
               
                {/* Email */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <Text style={styles.textInput}>Email:</Text>
                  <Text numberOfLines={1} style={styles.text}>
                    {currentData?.results?.user?.email}
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => onClose()}
                style={{
                  borderWidth: 1,
                  backgroundColor: "#7339BA",
                  opacity: 0.6,
                  borderRadius: 20,
                  width: 90,
                  shadowColor: "white",
                  alignContent: "center",
                  alignItems: "center",
                  borderColor: "grey",
                  height: 30,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: "#F2F2F2", fontWeight: "500", fontSize: 14 }}
                >
                  Close
                </Text>
              </TouchableOpacity>
            </View>
          </Background>
        </Header>
      </Modal>
   
      {/* Rating Modal*/}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay2}>
          <View style={styles.modalContainer2}>
            <Text style={styles.modalText2}>Your Today Review is not Submited</Text>
            <TouchableOpacity
              style={styles.closeButton2}
              onPress={() => {setModalVisible(false)
                goTo(1)
                dispatch(setReviewModal(true))
              }
              }
            >
              <Text style={styles.closeButtonText2}>Go to submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton2}
              onPress={() => {
               
                setModalVisible(false);
              dispatch(setReviewModal(true))
              }}
            >
              <Text style={styles.closeButtonText2}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </Header>
  );
};

export default Home;

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    fontSize: 18,

    fontWeight: "600",
    color: "white",
    fontVariant: "italic",
  },
  text: {
    margin: 10,
    fontSize: 15,
    fontWeight: "500",
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
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
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  card: {
    alignSelf: "center",
    justifyContent: "space-between",
    backgroundColor: "#7339BA",
    opacity: 0.5,
    borderRadius: 40,
    borderColor: "grey",
    borderWidth: 1,
    padding: 20,
    width: "85%", // Adjust width as needed
    shadowColor: "white",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For iOS
    marginTop: 20,
    height: "30%",
    // flex:1,
    // flexDirection: "row",
    marginBottom: 10,
  },
  topCard: {
    alignSelf: "center",
    backgroundColor: "#2D2A70",
    opacity: 0.7,
    borderRadius: 20,
    borderColor: "grey",
    borderWidth: 1,
    padding: getRespValue(10),
    width: "70%", // Adjust width as needed
    shadowColor: "white",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For iOS
    marginTop: 5,
    height: "10%",
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    // flexDirection: "row",
    marginBottom: getRespValue(10),
  },
  buttonText: {
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff", // Blue text color
  },

  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer2: {
    width: getRespValue(400),
    padding: getRespValue(20),
    borderRadius:getRespValue(60),
    backgroundColor:  "#5E3CE9",
    // borderRadius: 10,
    alignItems: 'center',
    opacity:0.9
  },
  modalText2: {
    marginBottom: getRespValue(60),
    fontSize: getRespValue(24),
    fontWeight:'600',
    color:'white',
  },
  closeButton2: {
    backgroundColor:"white",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    width:'60%',
    alignContent:'center',
    alignItems:'center',
  },
  
  closeButtonText2: {
    color: 'black',
    fontSize: 16,
  },
});
