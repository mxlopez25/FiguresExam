import * as React from "react";
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import Checkbox from 'expo-checkbox';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainContainer from "./MainContainer";

const Stack = createNativeStackNavigator();
const Login = "Login";
const Main = "Main";
const initialState = {
    index: 0,
    routes: [
      {
        name: 'Login',
        params: { screen: 'LoginScreen' },
      },
      {
        name: 'Main',
        params: { screen: 'MainContainer' },
      }
    ],
  };
export default function InitialContainer() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={Login} component={LoginScreen} />
            <Stack.Screen name={Main} component={MainContainer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


function LoginScreen({ navigation }) {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [invalidCreds, setInvalidCreds] = React.useState(false);
    const [rememberMe, setRememberMe] = React.useState(false);

    function logInUser(userName, password) {
        if(userName == 'admin' && password == 'password1') {
            setInvalidCreds(false);
            console.log("Success");
            navigation.navigate(Main);
        } else {
            setInvalidCreds(true)
        }
    }
    return(
        <View style={styles.loginContainer}>
            <View><Image source={require("../assets/figures/Figure1.png")} /></View>
            <View style={styles.textContainer}><Text style={styles.textLabels}>Account Login</Text></View>
            <View>
                <TextInput style={styles.input} value={userName.toLowerCase()} onChangeText={setUserName} />
                <TextInput secureTextEntry={true} style={styles.input} value={password.toLowerCase()} onChangeText={setPassword} />
                <View style={styles.textContainer}><Text>Remember Me</Text><Checkbox  value={rememberMe} onChange={() => setRememberMe(!rememberMe)} /></View>
                <Button title="Log In" onPress={() => {logInUser(userName, password)}} />
                { invalidCreds && <View style={{alignItems: 'center', justifyContent: 'center'}}><Text style={{fontSize: 15, color: "red"}}>Wrong Credentials</Text></View> }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textLabels: {fontSize: 25, fontWeight: 'bold' },
    textContainer: {alignItems: 'center', justifyContent: 'center'},
    loginContainer: {
        flex: 1
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});