import React from 'react';
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AuthStackParamList} from '../../navigations/stack/AuthStackNavigator';
import {authNavigations} from '../../constants/navigations';
import CustomButton from '../../components/CustomButton';
import {colors} from '../../constants';

type AuthHomeScreenProps = NativeStackScreenProps<AuthStackParamList>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        {/* <Image /> */}
        <Text>PIXELRO</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="카카오 간편로그인"
          size="medium"
          onPress={() => navigation.navigate(authNavigations.KAKAO)}
          style={styles.kakaoButtonCantainer}
          textStyle={styles.kakaoButtonText}
        />
        {/* <CustomButton
          label="로그인화면으로 이동"
          size="medium"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        /> */}
        {/* <Pressable onPress={() => navigation.navigate(authNavigations.SIGNUP)}>
          <Text style={styles.emailText}>이메일로 가입하기</Text>
        </Pressable> */}
        <Pressable
          onPress={() => navigation.navigate(authNavigations.NOSIGNIN)}>
          <Text style={styles.nologinText}>로그인 없이 둘러보기 {'>'}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1.5,
    width: Dimensions.get('screen').width / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    gap: 10,
  },
  kakaoButtonCantainer: {
    backgroundColor: '#FEE503',
  },
  kakaoButtonText: {
    color: '#181600',
  },
  emailText: {
    textDecorationLine: 'underline',
    fontWeight: '500',
    padding: 10,
    color: colors.BLACK,
    textAlign: 'center',
  },
  nologinText: {
    textDecorationLine: 'underline',
    fontWeight: '500',
    padding: 10,
    color: colors.BLACK,
    textAlign: 'center',
  },
});

export default AuthHomeScreen;
