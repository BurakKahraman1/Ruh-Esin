import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import CellInput from "../components/cellInput";

const Login = ({ navigation }) => {
  let cellRef0 = useRef(null);
  let cellRef1 = useRef(null);
  let cellRef2 = useRef(null);
  let cellRef3 = useRef(null);
  let cellRef4 = useRef(null);
  let cellRef5 = useRef(null);

  const [loginPage, setLoginPage] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");



  const handleCountryCodeChange = (code) => {
    setCountryCode(code);
  };

  const handlePhoneNumberChange = (number) => {
    setPhoneNumber(number);
  };

  const handleSubmit = () => {
    if(loginPage){
      navigation.navigate('Home')
    }else if (phoneNumber.length === 10) {
      setLoginPage(true);
    } else {
      Alert.alert("Numara yanlis", "10 haneli numaranizi girin!", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  const handleGoBack = () => {
    if (loginPage) {
      setLoginPage(false);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.titlesContainer, { marginVertical: 8 }]}>
        <Icon
          onPress={handleGoBack}
          name="long-arrow-left"
          size={25}
          color="black"
        />
      </View>
      {!loginPage && (
        <>
          <View style={styles.titlesContainer}>
            <Icon name="info" size={23} color="#1d079c" />
            <Text
              style={{
                lineHeight: 23,
                fontWeight: "600",
                fontSize: 14,
                paddingLeft: 12,
                color: "#222222",
              }}
            >
              Lutfen telefon numaranizi yaziniz
            </Text>
          </View>
          <Text
            style={{
              textAlign: "left",
              width: "100%",
              paddingVertical: 10,
              color: "#222222",
              fontSize: 15,
              lineHeight: 23,
              fontWeight: "400",
            }}
          >
            Telefon numarası
          </Text>
          <View style={styles.formContainer}>
            <View style={styles.countryCodeStyle}>
              <Picker
                style={{color:'black'}}
                selectedValue={countryCode}
                onValueChange={handleCountryCodeChange}
              >
                <Picker.Item label="+90" value="+90" />
                <Picker.Item label="+1" value="+1" />
                <Picker.Item label="+44" value="+44" />
              </Picker>
            </View>
            <TextInput
              style={styles.numberInput}
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
            />
          </View>
        </>
      )}

      {loginPage && (
        <>
          <View style={styles.titlesContainer}>
            <Icon name="info" size={23} color="#1d079c" />
            <Text
              style={{
                lineHeight: 23,
                fontWeight: "600",
                fontSize: 14,
                paddingLeft: 12,
                color: "#222222",
              }}
            >
              Lütfen telefonunuza gelen kodu giriniz.
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.textAgain}>{phoneNumber}</Text>
            <Text style={styles.textAgain}>Tekrar Gönder</Text>
          </View>
          <View style={styles.inputSeries}>
                <CellInput cellRef={cellRef0} onChange={()=>cellRef1.current.focus()}/> 
                <CellInput cellRef={cellRef1} onChange={()=>cellRef2.current.focus()}/> 
                <CellInput cellRef={cellRef2} onChange={()=>cellRef3.current.focus()}/> 
                <CellInput cellRef={cellRef3} onChange={()=>cellRef4.current.focus()}/> 
                <CellInput cellRef={cellRef4} onChange={()=>cellRef5.current.focus()}/> 
                <CellInput cellRef={cellRef5}/> 
          </View>
        </>
      )}
      <LinearGradient
        colors={["#e98137", "rgba(255, 145, 66, 0.7)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.buttonContainer}
      >
        <Pressable style={styles.buttonContainer} onPress={handleSubmit}>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 16,
              lineHeight: 23,
              color: "white",
            }}
          >
            Devam Et
          </Text>
        </Pressable>
      </LinearGradient>

      {!loginPage && (
        <View
          style={[styles.titlesContainer, { marginVertical: 8, width: "90%" }]}
        >
          <Text style={styles.description}>
            Kullanıcının gerçekten sen olduğunu doğrulamak için lütfen cep
            telefonuna gönderdiğimiz kodu giriniz. Mesajlar ücrete tabi
            olabilir.{" "}
            <Text style={{ color: "#fd8128", textDecorationLine: "underline" }}>
              
              Numaran değişirse ?
            </Text>
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    alignItems: "center",
    margin: 18,
  },
  titlesContainer: {
    width: "100%",
    alignItems: "flex-start",
    flexDirection: "row",
    marginVertical: 24,
  },
  formContainer: {
    flexDirection: "row",
    height: 48,
    marginBottom: 10,
  },
  countryCodeStyle: {
    flex: 1,
    height: 48,
    backgroundColor: "#EEEEEE",
    borderRadius: 5,
    justifyContent: "center",
  },
  numberInput: {
    flex: 2,
    height: 48,
    backgroundColor: "#EEEEEE",
    borderRadius: 5,
    marginLeft: 8,
    color:'black'
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 48,
    borderRadius: 5,
    marginVertical: 24,
  },
  description: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 20,
    textAlign: "center",
    color:"#222222"
  },
  buttonPressed: {
    opacity: 0.8,
  },
  textAgain: {
    paddingVertical: 10,
    color: "#222222",
    fontSize: 15,
    lineHeight: 23,
    fontWeight: "400",
  },
  inputSeries: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

});

export default Login;
