import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Background from './Background';
import { darkGreen } from './Constants'
import Field from './Field'

const Login = () => {
    return (
        <Background>
            <View style={{ alignItems: "center", width: 400 }}>
                <Text style={{
                    color: "white", fontSize: 64, fontWeight: 'bold', marginVertical: 10
                }}> Login</Text>
                <View style={{
                    backgroundColor: "white",
                     height: 700,
                      width: 460, 
                      borderTopLeftRadius: 100, 
                      borderTopRightRadius: 100,
                    borderBottomLeftRadius: 100,
                     borderBottomRightRadius: 100,
                      paddingTop: 100, 
                      alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 40, color: darkGreen, fontWeight: "bold" }}> Welcome Back</Text>
                    <Text style ={{ color: "grey", fontSize: 19, fontWeight: "bold",
                    marginBottom:20}}>Login your account</Text>
                    <Field placeholder ="Email/Username" keyboard={"email-address"}/>
                    <Field placeholder ="Password" secureTextEntry={true}/>
             <View style={{ alignItems:'flex-end',width:"78%"}}>
                <Text style ={{ color: darkGreen,fontWeight: " bold", fontSize: 16}}> Forgot Password?</Text>
           </View>
           </View>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({})

export default Login;