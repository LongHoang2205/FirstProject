import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, Alert } from "react-native";

// styles
import styles from "./Styles/LoginScreenStyles";

// themes
import { Images } from "../../Themes";

// component
import { FBButton, FPTextInput, FPALoading } from "../../Components";

// redux
import { useSelector, useDispatch } from "react-redux";
import { loginRequestAction } from "../../Redux/Actions/LoginAction";

// functions
import { AppFunctions } from "../../Functions";

export default function SplashScreen({ navigation }) {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);

  // props
  const isLoadingLogin = loginState.isLoadingLogin;
  const previousIsLoadingLogin = AppFunctions.usePrevious(isLoadingLogin);
  const errorLogin = loginState.errorLogin;
  const userData = loginState.userData;

  // states
  const [nameInput, setNameInput] = useState();
  const [passwordInput, setPassWordInput] = useState();

  useEffect(() => {
    if (previousIsLoadingLogin && !isLoadingLogin) {
      if (userData) {
        navigation.navigate("HomeScreen");
      } else {
        Alert.alert("Thông báo", `Login thất bại: ${errorLogin}`);
      }
    }
  }, [isLoadingLogin]);

  const onChangeTextName = (text) => {
    setNameInput(text);
  };

  const onChangeTextPassword = (text) => {
    setPassWordInput(text);
  };

  const onPressHome = () => {
    dispatch(
      loginRequestAction({
        username: "vnh@gmail.com",
        password: "123123123",
      })
    );
  };

  const renderLoading = () => {
    return isLoadingLogin && <FPALoading />;
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={{ backgroundColor: "white" }} />
      <View style={styles.head}>
        <View style={styles.viewText}>
          <Text style={styles.content}>Login</Text>
          <Text style={styles.content1}>Welcome back</Text>
        </View>
      </View>
      <View style={styles.body}>
        <FPTextInput
          placeholder="username"
          imgSourceInput={Images.account}
          onChangeText={(text) => onChangeTextName(text)}
          value={nameInput}
        />
        <FPTextInput
          placeholder="password"
          imgSourceInput={Images.password}
          onChangeText={(text) => onChangeTextPassword(text)}
          value={passwordInput}
        />
      </View>
      <View style={styles.btn}>
        <FBButton text="Login" onPressBtn={onPressHome} />
      </View>
      {renderLoading()}
    </ScrollView>
  );
}
