import React from 'react';
import {StyleSheet, View} from 'react-native';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainBottomTabNavigator from '../bottomtab/MainBottomTabNavigator';
import useAuth from '../../hooks/queries/useAuth';

function RootNavigator() {
  const {isLogin} = useAuth();

  return <>{isLogin ? <MainBottomTabNavigator /> : <AuthStackNavigator />}</>;
}

const styles = StyleSheet.create({});

export default RootNavigator;
