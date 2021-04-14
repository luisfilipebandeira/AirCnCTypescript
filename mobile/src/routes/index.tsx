import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login'
import Spots from '../pages/Spots'
import Book from '../pages/Book'

const Auth = createStackNavigator()

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: '#fff'}
        }}
    >
        <Auth.Screen name="Login" component={Login} />
        <Auth.Screen name="Spots" component={Spots} />
        <Auth.Screen name="Book" component={Book} />
    </Auth.Navigator>
)

export default AuthRoutes