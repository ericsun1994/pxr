import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InputField from '../../components/InputField';
import {SafeAreaView} from 'react-native-safe-area-context';

function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField placeholder="이메일" />
        <InputField placeholder="비밀번호" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
  },
});

export default LoginScreen;
