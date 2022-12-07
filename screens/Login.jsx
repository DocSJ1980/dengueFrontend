import { View, StatusBar, Platform, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, TextInput } from 'react-native-paper'
// import { useNavigation } from '@react-navigation/native'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const navigation = useNavigation()
    const loginHandler = () => {
        console.log("Login Button working", email, password)
    }

    return (
        <SafeAreaView>
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: Platform === "android" ? StatusBar.currentHeight : 0 }}>
                <Avatar.Image size={350} backgroundColor='#ffffff' source={require("../assets/img/img1.png")} />
                <View style={{ width: "70%" }}>
                    <TextInput style={Styles.input} placeholder="PITB Username" value={email} onChangeText={setEmail}></TextInput>
                    <TextInput secureTextEntry style={Styles.input} placeholder="Password" value={password} onChangeText={setPassword}></TextInput>
                    <TouchableOpacity onPress={loginHandler} style={Styles.btn}>
                        <Text style={{ color: "#ffffff" }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ marginTop: 130, justifyContent: 'center', alignSelf: 'center', color: "#076f29", alignItems: 'center' }} >Powered by Epidemics Prevention & Control Cell</Text>
                    <Text style={{ justifyContent: 'center', color: "#076f29", alignItems: 'center', alignSelf: 'center' }}>District Health Authority Rawalpindi</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

const Styles = StyleSheet.create({
    input: {
        borderWidth: 2, borderColor: "#076f29", borderRadius: 5, height: 50, backgroundColor: '#ffffff', marginVertical: 5, fontSize: 15
    },
    btn: {
        padding: 5,
        backgroundColor: '#076f29',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 45,
        marginVertical: 25,
        height: 45,
    },
    txt: {

    }
})