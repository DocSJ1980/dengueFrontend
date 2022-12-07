import React, { useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
// import AppStack from './AppStack.jsx'
import AuthStack from './AuthStack.jsx'
// import Footer from './components/Footer'
// import Loader from './components/Loader.jsx'
import { Text } from 'react-native'

const Stack = createNativeStackNavigator()

const Main = () => {

    return (
        <NavigationContainer>
            < AuthStack />
        </NavigationContainer>

    )
}

export default Main