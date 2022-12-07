import React from 'react'
// import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from './screens/Login'

// const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        // <Stack.Navigator initialRouteName="login">
        //     <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
        // </Stack.Navigator>
        <Login />
    )
}

export default AuthStack