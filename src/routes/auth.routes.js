import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
            name="SignIn" 
            component={SignIn}
            options={{headerShown: false}}
            />

        <AuthStack.Screen 
            name="SignUp" 
            component={SignUp}
            options={{headerStyle:{
                    backgroundColor: '#131313',
                    borderBottomWidth: 1,
                    borderBottomColor: '#00b94a'
            },
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerTitle: 'Voltar'
            }}
            />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;

