import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {authNavigations} from '../../constants/navigations';
import AuthHomeScreen from '../../screens/auth/AuthHomeScreen';
import KakaoLoginScreen from '../../screens/auth/KakaoLoginScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import SignupScreen from '../../screens/auth/SignupScreen';
import NoSigninScreen from '../../screens/auth/NoSigninScreen';
import MainBottomTabNavigator from '../bottomtab/MainBottomTabNavigator';

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined;
  [authNavigations.LOGIN]: undefined;
  [authNavigations.SIGNUP]: undefined;
  [authNavigations.KAKAO]: undefined;
  [authNavigations.NOSIGNIN]: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: 'white'},
        headerStyle: {backgroundColor: 'white'},
        headerTitleStyle: {fontSize: 15},
        headerTintColor: 'black',
      }}>
      <Stack.Screen
        name={authNavigations.AUTH_HOME}
        component={AuthHomeScreen}
        options={{headerTitle: '', headerShown: false}}
      />
      <Stack.Screen
        name={authNavigations.LOGIN}
        component={LoginScreen}
        options={{headerTitle: '로그인'}}
      />
      <Stack.Screen
        name={authNavigations.SIGNUP}
        component={SignupScreen}
        options={{headerTitle: '회원가입'}}
      />
      <Stack.Screen
        name={authNavigations.KAKAO}
        component={KakaoLoginScreen}
        options={{headerTitle: '카카오 로그인'}}
      />
      <Stack.Screen
        name={authNavigations.NOSIGNIN}
        component={MainBottomTabNavigator}
        options={{headerTitle: '로그인 없이 둘러보기'}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default AuthStackNavigator;
